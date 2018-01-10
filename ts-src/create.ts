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
        }
        this.read_table_from_file();
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

    insert_one_row(row:any[]){
        // code to insrt row
        this.table.push(row);
        fs.writeFileSync(this.full_table_name, JSON.stringify({"array":this.table}));
        this.read_table_from_file();//this call is for safety pupose
    }

    update_one_row(row:any[], find:any[]=["col_index", "value"]){
        // this update row in find fiter
        let curIndexRow = this.find_one_row(find);
        this.table[curIndexRow[0]] = row;
        fs.writeFileSync(this.full_table_name, JSON.stringify({"array":this.table}));
        this.read_table_from_file();
    }
 

    find_one_row(find:any[]=["col_index", "value"]){
        //returns the first find
        //returns array with index at position zero and row array at position 1
        let col_index:string = find[0];
        let value:any = find[1];
        let curValue:any;
        for (let index = 0; index < this.table.length; index++) {
           curValue = this.table[index][col_index]
           if (curValue == value){
               return [index,  this.table[index]];
           } 
        }
        
        throw new Error ("Row not found");
    }



    delete_one_row(find:any[]=["col_index", "value"]){
        // delete row 
        let curIndexRow = this.find_one_row(find);
        let array:any[] = this.table;

        array.splice(curIndexRow[0], 1);
         this.table = array;
    
        fs.writeFileSync(this.full_table_name, JSON.stringify({"array":this.table}));
        this.read_table_from_file();

    }

    get_table_full_path_name(){
        // returns this path and table name
        return this.full_table_name;
    }

    

    


}