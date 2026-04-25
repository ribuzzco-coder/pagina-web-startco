"use client";

type ApiSuccess<T> = {
  ok: true;
  data: T;
  meta?: Record<string, unknown>;
};

type ApiFailure = {
  ok: false;
  error: {
    code: string;
    message: string;
    fieldErrors?: Record<string, string[] | undefined>;
  };
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export type SessionSummary = {
  authenticated: boolean;
  session: {
    accessToken: string;
    expiresAt: number | null;
    user: {
      id: string;
      email: string | null;
      provider: string | null;
      fullName: string | null;
    };
  } | null;
};

export type CurrentUserPayload = {
  user: {
    id: string;
    email: string | null;
    provider: string | null;
    fullName: string | null;
  } | null;
  actor: {
    id: string;
    email: string | null;
  };
};

async function requestJson<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  const response = await fetch(input, {
    credentials: "include",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  return (await response.json()) as ApiResult<T>;
}

export async function getSessionSummary() {
  return requestJson<SessionSummary>("/api/auth/session", { method: "GET" });
}

export async function loginWithPassword(input: { email: string; password: string }) {
  return requestJson("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function signupWithPassword(input: {
  email: string;
  password: string;
  fullName?: string;
}) {
  return requestJson("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function logoutUser() {
  return requestJson<{ loggedOut: boolean }>("/api/auth/logout", { method: "POST" });
}

export async function getCurrentUser() {
  return requestJson<CurrentUserPayload>("/api/auth/me", { method: "GET" });
}

