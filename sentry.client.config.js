import * as Sentry from "@sentry/nextjs";
import * as SentryTracing from "@sentry/tracing";

Sentry.init({
  dsn: "some DSN here",
  debug: true,
  tracesSampleRate: 1,
  integrations: [
    // sometimes the XHRs take just slightly too long to get included, so up the timeout
    new SentryTracing.Integrations.BrowserTracing({ idleTimeout: 10000 }),
  ],
  beforeSend: (event) => {
    // make all new events start their own issue, so they're easy to find
    // event.fingerprint = [Date.now()];
    return event;
  },
});
