import * as Sentry from "@sentry/react-router";

const integrations = [];
try {
  const { nodeProfilingIntegration } = await import('@sentry/profiling-node');
  integrations.push(nodeProfilingIntegration());
} catch {
  // Gracefully fallback when native CPU profiler binary is unavailable (e.g. Node 24 on Windows)
}

Sentry.init({
  dsn: "https://5490ef8c6bcb638779d99e990baa9a90@o4509212149612544.ingest.de.sentry.io/4509212154658896",
  sendDefaultPii: true,
  integrations,
  tracesSampleRate: 1.0,
});
