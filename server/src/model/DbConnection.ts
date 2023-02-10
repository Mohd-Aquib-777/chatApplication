import "reflect-metadata"
import { DataSource } from "typeorm";
import path from 'path'

class DbConnection {
    
    public dataSource: DataSource;
    
    constructor () {
        this.dataSource = new DataSource(
            {
                type: "mongodb",
                host: "localhost",
                port: 27017,
                entities: [path.join(__dirname, '/*.entity.ts')],
                database: "chatApp",
                logging: true,
                synchronize: true,
                useUnifiedTopology: true
            }
        )
        this.dataSource.initialize().then( e => {
            console.log(`Database is connected`)
        }).catch(error=>{
            console.error(`ERROR: Database is connected`,error);
        });
    }

    public getDbConnection (): any {
        return this.dataSource;
    }
}

const dataSource: DbConnection = new DbConnection();
// const dbConn = dbConnection.getDbConnection();
export{ dataSource }
