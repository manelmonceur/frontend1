namespace NodeJS {
  interface ProcessEnv {
    BACK_URI: string;

    NODE_ENV: 'development' | 'production';
    PORT?: string;
  }
}
