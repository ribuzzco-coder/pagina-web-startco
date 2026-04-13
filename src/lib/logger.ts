import "server-only";

type LogLevel = "info" | "warn" | "error";

type LogDetails = Record<string, unknown>;

function write(level: LogLevel, event: string, message: string, details?: LogDetails) {
  const payload = {
    level,
    event,
    message,
    details,
    timestamp: new Date().toISOString(),
  };

  const output = JSON.stringify(payload);

  if (level === "error") {
    console.error(output);
    return;
  }

  if (level === "warn") {
    console.warn(output);
    return;
  }

  console.info(output);
}

export const logger = {
  info(event: string, message: string, details?: LogDetails) {
    write("info", event, message, details);
  },
  warn(event: string, message: string, details?: LogDetails) {
    write("warn", event, message, details);
  },
  error(event: string, message: string, details?: LogDetails) {
    write("error", event, message, details);
  },
};

