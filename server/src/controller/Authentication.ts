
import { Request as req, Response as res } from "express";
import { authDao } from '../dao/Authentication'

class Authentication {
    
    constructor () {  

    }

    public async signUp(req: req, res: res): Promise<void> {
        console.log('req--------',req.body)
        authDao.signUp(req.body)
    }

    public signIn(): void {
           
    }

    public forgotPassword(): void {
           
    }

    public createPassword(): void {
           
    }

} 

const authController: Authentication = new Authentication();

export { authController }
