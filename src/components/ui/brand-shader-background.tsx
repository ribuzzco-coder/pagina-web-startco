"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type BrandShaderBackgroundProps = {
  className?: string;
};

type Vec2 = [number, number];

const vertexShaderSource = `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = position;
}`;

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 pointers[8];

#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  float a = rnd(i);
  float b = rnd(i + vec2(1, 0));
  float c = rnd(i + vec2(0, 1));
  float d = rnd(i + 1.);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = .0, a = 1.;
  mat2 m = mat2(1., -.5, .2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2. * m;
    a *= .5;
  }
  return t;
}

float clouds(vec2 p) {
  float d = 1., t = .0;
  for (float i = .0; i < 3.; i++) {
    float a = d * fbm(i * 10. + p.x * .2 + .2 * (1. + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2. / (i + 1.);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - .5 * R) / MN;
  vec2 st = uv * vec2(2, 1);
  vec2 pointer = pointerCount > 0 ? (pointers[0] / R - .5) : vec2(0);
  vec2 drift = vec2(move.x, -move.y) * .00008 + pointer * .08;
  vec3 col = vec3(0);
  vec3 cyan = vec3(0.059, 0.937, 0.992);
  vec3 magenta = vec3(0.902, 0.145, 1.0);
  vec3 white = vec3(0.961, 0.969, 0.98);
  float bg = clouds(vec2(st.x + T * .32 + drift.x, -st.y + drift.y));
  uv *= 1. - .22 * (sin(T * .18) * .5 + .5);

  for (float i = 1.; i < 12.; i++) {
    uv += .09 * cos(i * vec2(.1 + .01 * i, .8) + i * i + T * .42 + .1 * uv.x);
    vec2 p = uv + drift * (1. + i * .08);
    float d = length(p);
    vec3 brandRamp = mix(cyan, magenta, smoothstep(.0, 1., sin(i * 1.27 + T * .16) * .5 + .5));
    col += .00155 / d * brandRamp;
    float b = noise(i + p + bg * 1.731);
    col += .0014 * b / length(max(p, vec2(b * p.x * .018, p.y))) * mix(white, cyan, .55);
    col = mix(col, vec3(bg * .03, bg * .13, bg * .16) + magenta * bg * .035, d);
  }

  float vignette = smoothstep(1.35, .12, length((FC - .5 * R) / R.y));
  col *= .78 + vignette * .36;
  col += cyan * .018 * smoothstep(.85, .05, length(uv - vec2(-.45, .15)));
  col += magenta * .022 * smoothstep(.9, .08, length(uv - vec2(.42, -.05)));
  O = vec4(col, 1);
}`;

class WebGLShaderRenderer {
  private buffer: WebGLBuffer | null = null;
  private fragmentShader: WebGLShader | null = null;
  private program: WebGLProgram | null = null;
  private vertexShader: WebGLShader | null = null;
  private readonly gl: WebGL2RenderingContext;
  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
  private move: Vec2 = [0, 0];
  private pointerCoords: Vec2 = [0, 0];
  private pointerCount = 0;
  private touch: Vec2 = [0, 0];

  constructor(private readonly canvas: HTMLCanvasElement) {
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "high-performance",
    });

    if (!gl) {
      throw new Error("WebGL2 is not available.");
    }

    this.gl = gl;
    this.setup();
    this.init();
  }

  resize(width: number, height: number, scale: number) {
    const nextWidth = Math.max(1, Math.floor(width * scale));
    const nextHeight = Math.max(1, Math.floor(height * scale));

    if (this.canvas.width !== nextWidth || this.canvas.height !== nextHeight) {
      this.canvas.width = nextWidth;
      this.canvas.height = nextHeight;
    }

    this.gl.viewport(0, 0, nextWidth, nextHeight);
  }

  updatePointer(move: Vec2, touch: Vec2, coords: Vec2, count: number) {
    this.move = move;
    this.touch = touch;
    this.pointerCoords = coords;
    this.pointerCount = count;
  }

  render(now: number) {
    if (!this.program || this.gl.getProgramParameter(this.program, this.gl.DELETE_STATUS)) {
      return;
    }

    const gl = this.gl;
    const program = this.program;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.uniform2f(gl.getUniformLocation(program, "resolution"), this.canvas.width, this.canvas.height);
    gl.uniform1f(gl.getUniformLocation(program, "time"), now * 0.001);
    gl.uniform2f(gl.getUniformLocation(program, "move"), this.move[0], this.move[1]);
    gl.uniform2f(gl.getUniformLocation(program, "touch"), this.touch[0], this.touch[1]);
    gl.uniform1i(gl.getUniformLocation(program, "pointerCount"), this.pointerCount);
    gl.uniform2fv(gl.getUniformLocation(program, "pointers"), this.pointerCoords);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    const gl = this.gl;

    if (this.program) {
      if (this.vertexShader) {
        gl.detachShader(this.program, this.vertexShader);
        gl.deleteShader(this.vertexShader);
      }

      if (this.fragmentShader) {
        gl.detachShader(this.program, this.fragmentShader);
        gl.deleteShader(this.fragmentShader);
      }

      gl.deleteProgram(this.program);
    }

    if (this.buffer) {
      gl.deleteBuffer(this.buffer);
    }
  }

  private compile(type: number, source: string) {
    const shader = this.gl.createShader(type);

    if (!shader) {
      throw new Error("Unable to create WebGL shader.");
    }

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const error = this.gl.getShaderInfoLog(shader);
      this.gl.deleteShader(shader);
      throw new Error(error ?? "Shader compilation failed.");
    }

    return shader;
  }

  private setup() {
    const gl = this.gl;
    this.vertexShader = this.compile(gl.VERTEX_SHADER, vertexShaderSource);
    this.fragmentShader = this.compile(gl.FRAGMENT_SHADER, fragmentShaderSource);
    this.program = gl.createProgram();

    if (!this.program) {
      throw new Error("Unable to create WebGL program.");
    }

    gl.attachShader(this.program, this.vertexShader);
    gl.attachShader(this.program, this.fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program) ?? "Shader link failed.");
    }
  }

  private init() {
    const gl = this.gl;
    const program = this.program;

    if (!program) {
      return;
    }

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  }
}

class PointerTracker {
  private active = false;
  private lastCoords: Vec2 = [0, 0];
  private moves: Vec2 = [0, 0];
  private pointers = new Map<number, Vec2>();
  private scale = 1;

  constructor(private readonly element: HTMLCanvasElement) {
    element.addEventListener("pointerdown", this.handlePointerDown);
    element.addEventListener("pointerup", this.handlePointerEnd);
    element.addEventListener("pointercancel", this.handlePointerEnd);
    element.addEventListener("pointerleave", this.handlePointerEnd);
    element.addEventListener("pointermove", this.handlePointerMove);
  }

  get count() {
    return this.pointers.size;
  }

  get coords(): Vec2 {
    return this.pointers.values().next().value ?? [0, 0];
  }

  get first(): Vec2 {
    return this.pointers.values().next().value ?? this.lastCoords;
  }

  get move(): Vec2 {
    return this.moves;
  }

  dispose() {
    this.element.removeEventListener("pointerdown", this.handlePointerDown);
    this.element.removeEventListener("pointerup", this.handlePointerEnd);
    this.element.removeEventListener("pointercancel", this.handlePointerEnd);
    this.element.removeEventListener("pointerleave", this.handlePointerEnd);
    this.element.removeEventListener("pointermove", this.handlePointerMove);
  }

  updateScale(scale: number) {
    this.scale = scale;
  }

  private map(clientX: number, clientY: number): Vec2 {
    const rect = this.element.getBoundingClientRect();

    return [(clientX - rect.left) * this.scale, (rect.height - (clientY - rect.top)) * this.scale];
  }

  private handlePointerDown = (event: PointerEvent) => {
    this.active = true;
    this.pointers.set(event.pointerId, this.map(event.clientX, event.clientY));
  };

  private handlePointerEnd = (event: PointerEvent) => {
    this.lastCoords = this.first;
    this.pointers.delete(event.pointerId);
    this.active = this.pointers.size > 0;
  };

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.active) {
      return;
    }

    this.lastCoords = this.map(event.clientX, event.clientY);
    this.pointers.set(event.pointerId, this.lastCoords);
    this.moves = [this.moves[0] + event.movementX, this.moves[1] + event.movementY];
  };
}

export function BrandShaderBackground({ className }: BrandShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    let renderer: WebGLShaderRenderer | null = null;
    let pointerTracker: PointerTracker | null = null;
    let frameId = 0;

    try {
      renderer = new WebGLShaderRenderer(canvas);
      pointerTracker = new PointerTracker(canvas);
    } catch (error) {
      console.error(error);
      return;
    }

    const resize = () => {
      if (!renderer || !pointerTracker) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const scale = Math.max(1, Math.min(1.5, window.devicePixelRatio * 0.65));
      renderer.resize(rect.width, rect.height, scale);
      pointerTracker.updateScale(scale);
    };

    const loop = (now: number) => {
      if (!renderer || !pointerTracker) {
        return;
      }

      renderer.updatePointer(pointerTracker.move, pointerTracker.first, pointerTracker.coords, pointerTracker.count);
      renderer.render(now);
      frameId = requestAnimationFrame(loop);
    };

    resize();
    frameId = requestAnimationFrame(loop);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      pointerTracker?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-auto absolute inset-0 h-full w-full touch-none bg-[#05050a]", className)}
    />
  );
}
