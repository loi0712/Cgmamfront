/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_DOMAIN_URL: string
    readonly VITE_DEBUG_MODE: string
    readonly VITE_ENV: string
    readonly VITE_APP_NAME: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  