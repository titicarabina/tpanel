namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test'
        readonly mongodburl: string
        readonly SALT_ROUNDS: string
        readonly NEXTAUTH_URL: string
        readonly NEXTAUTH_SECRET: string
        readonly NEXTAUTH_JWT_SECRET: string
        readonly EMAIL_USERNAME: string
        readonly EMAIL_PASSWORD: string
        readonly EMAIL_HOST: string
        readonly MONGODB_DATABASE: string
        readonly MONGODB_COLLECTION: string
        readonly TEBEX_SECRET: string
    }
  }