import { Router, Request as req, Response as res } from "express";
import { authController } from "../controller/Authentication";
class Authentication { 
    public router!: Router;
    constructor () {
        this.router = Router();
        this.setAuthRoute()
    }

    setAuthRoute(): void {
        // this.router.get('/', authController.);

        this.router.post('/signUp', authController.signUp);

        this.router.post('/signIn', authController.signIn);

        // this.router.delete('/', );

        // this.router.patch('/', function(req: req, res: res) {
        //     console.log(`${req.query}`);
        // });
    }
    
    public getAuthRouter(): any {
        return this.router;
    }
}

const auth: Authentication = new Authentication();
export { auth }
