import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { BatchSpanProcessor, ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';

const provider = new NodeTracerProvider();

if (process.env.ENABLE_CONSOLE_SPANS === 'true') {
  provider.addSpanProcessor(
    new BatchSpanProcessor(new ConsoleSpanExporter(), {
      maxQueueSize: 2048,
      maxExportBatchSize: 256,
      scheduledDelayMillis: 500,
      exportTimeoutMillis: 10000
    })
  );
}

provider.register();

export const tracer = provider.getTracer('financeiro-api');
