/*
This creat the folder and files a single table file
for more then one table use on more instanc of this class.
*/ 
import * as fs from "fs";
import { exists } from "fs";
import * as path from "path";
import { isUndefined } from "util";


export class Create{
    private dbPath:string;//stores the path name of folder contauning database 
    private table:any; //store the table valuue
    private table_name:string; //name of the table
    private full_table_name:string; //path and table name
   

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

    create_table(table_name:string, cols:string[]){
        // this creates the table file i.e table_name.json
        // it also initaites JSON object with array
        this.full_table_name = this.dbPath + "\\" + table_name + ".json";

        if(!fs.existsSync(this.full_table_name)){
            var createStream = fs.createWriteStream(this.full_table_name);
            createStream.end();
            fs.writeFileSync(this.full_table_name, JSON.stringify({array : [cols]}));
            this.read_table_from_file();
        }
    }

    read_table_from_file(){
        // reads the table file
        // this is called after every CRUD
        let curTable:any = fs.readFileSync(this.full_table_name);
        this.table = JSON.parse(curTable).array;``
        return this.table;

        
    }

    read_table_in_memory(){
        // this reads table from the memory
        return this.table
    }

    insert_row(row:any[]){
        // code to insrt row
        this.table.push(row);
        fs.writeFileSync(this.full_table_name, JSON.stringify(this.table));
        this.read_table_from_file();//this call is for safety pupose
    }

    update_row(row:any[], find:string){

    }


    find_row( find:string){
        //retturns single row

    }



    delete_row( find:string){
        // delete row 
    }

    


}