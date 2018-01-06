"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
This creat the folder and files a single table file
for more then one table use on more instanc of this class.
*/
var fs = require("fs");
var Create = /** @class */ (function () {
    function Create() {
        this.dbPath;
    }
    Create.prototype.create_database = function (dbPath) {
        if (dbPath === void 0) { dbPath = "./json"; }
        this.dbPath = dbPath;
        // this creates the folder for data base
        if (!fs.existsSync(this.dbPath)) {
            fs.mkdirSync(this.dbPath);
        }
    };
    Create.prototype.create_table = function (table_name, cols) {
        // this creates the table file i.e table_name.json
        // it also initaites JSON object with array
        this.full_table_name = this.dbPath + "\\" + table_name + ".json";
        if (!fs.existsSync(this.full_table_name)) {
            var createStream = fs.createWriteStream(this.full_table_name);
            createStream.end();
            fs.writeFileSync(this.full_table_name, JSON.stringify({ array: [cols] }));
            this.read_table_from_file();
        }
    };
    Create.prototype.read_table_from_file = function () {
        // reads the table file
        // this is called after every CRUD
        var curTable = fs.readFileSync(this.full_table_name);
        this.table = JSON.parse(curTable).array;
        "";
        return this.table;
    };
    Create.prototype.read_table_in_memory = function () {
        // this reads table from the memory
        return this.table;
    };
    Create.prototype.insert_row = function (row) {
        // code to insrt row
        this.table.push(row);
        fs.writeFileSync(this.full_table_name, JSON.stringify(this.table));
    };
    Create.prototype.update_row = function (row, find) {
    };
    Create.prototype.find_row = function (find) {
        //retturns single row
    };
    Create.prototype.delete_row = function (find) {
        // delete row 
    };
    return Create;
}());
exports.Create = Create;
//# sourceMappingURL=create.js.map