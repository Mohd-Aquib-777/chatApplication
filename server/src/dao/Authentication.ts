import { dataSource } from "../model/DbConnection";
import { User } from "../model/User.entity";
import { MongoEntityManager} from "typeorm";

class Authentication {
    manager: MongoEntityManager;

    constructor () {
        this.manager = dataSource.getDbConnection().getMongoRepository(User);
    };

    public async signUp (data: object): Promise<object>  {
        return this.manager.save(data); 
    }
}

const authDao: Authentication = new Authentication();
export{ authDao }
