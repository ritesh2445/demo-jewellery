type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Reports a runtime error from a React error boundary.
 * Logs to console in all environments; can be wired to a third-party
 * observability service (e.g. Sentry) by replacing the body below.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[ErrorBoundary]", message, { ...context });
}
