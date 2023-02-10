/* eslint-disable semi */
/* eslint-disable @typescript-eslint/semi */
import express, { type Express } from 'express'
import { config } from 'dotenv'
import { auth } from './router/Authentication'
config()
class App {
    app: Express
    constructor () {
        this.app = express();
        this.mountingRoutes();
    }
    
    mountingRoutes(): void {
        this.app.use('/auth', auth.getAuthRouter());
    }

    startApp (): void {
        this.app.listen(process.env.PORT, () => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.info(`chat App server is running on port: ${process.env.PORT}`)
        
    })
  }
}

const app: App = new App()
app.startApp()
