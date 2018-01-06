/*
This creat the folder and files ie tables
*/ 
import * as fs from "fs";
import { exists } from "fs";
import * as path from "path";

export class Create{
    private dbPath:string;

    constructor (){
        this.dbPath;
    }

    create_database(dbPath:string = "./json"){
        this.dbPath = dbPath;
        // this creates the folder for data base
        if(!fs.existsSync(this.dbPath)){
            fs.mkdirSync(this.dbPath);
        }
    }

    create_table(table_name:string){
        // this creates the table file i.e table_name.json
        // it also initaites JSON object with array
        let full_table_name:string = this.dbPath + "/" + table_name;
        if(!fs.existsSync(full_table_name)){
            var createStream = fs.createWriteStream(full_table_name);
            createStream.end();
            fs.writeFileSync(full_table_name, JSON.stringify({array : []}));
        }
    }
}