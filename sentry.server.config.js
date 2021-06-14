import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "some DSN here",
  debug: true,
  tracesSampleRate: 1,
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  beforeSend: (event) => {
    // make all new events start their own issue, so they're easy to find
    // event.fingerprint = [Date.now()];
    return event;
  },
});
