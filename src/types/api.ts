export type ApiFieldErrors = Record<string, string[]>;

export type ApiSuccess<T> = {
  ok: true;
  data: T;
  meta?: Record<string, unknown>;
};

export type ApiErrorPayload = {
  ok: false;
  error: {
    code: string;
    message: string;
    fieldErrors?: ApiFieldErrors;
  };
};

