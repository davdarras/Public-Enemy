/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_URL: string;
  readonly VITE_ORCHESTRATOR_URL: string;
  readonly VITE_LOCALE: LocaleType;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
