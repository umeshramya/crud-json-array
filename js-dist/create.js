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
        fs.writeFileSync(this.full_table_name, JSON.stringify({ "array": this.table }));
        this.read_table_from_file(); //this call is for safety pupose
    };
    Create.prototype.update_one_row = function (row, find) {
        if (find === void 0) { find = ["col_index", "value"]; }
        // this update row in find fiter
        var curIndexRow = this.find_one_row(find);
        this.table[curIndexRow[0]] = row;
        fs.writeFileSync(this.full_table_name, JSON.stringify({ "array": this.table }));
        this.read_table_from_file();
    };
    Create.prototype.find_one_row = function (find) {
        if (find === void 0) { find = ["col_index", "value"]; }
        //returns the first find
        //returns array with index at position zero and row array at position 1
        var col_index = find[0];
        var value = find[1];
        var curValue;
        for (var index = 0; index < this.table.length; index++) {
            curValue = this.table[index][col_index];
            if (curValue == value) {
                return [index, this.table[index]];
            }
        }
        throw new Error("Row not found");
    };
    Create.prototype.delete_one_row = function (find) {
        if (find === void 0) { find = ["col_index", "value"]; }
        // delete row 
        var curIndexRow = this.find_one_row(find);
        console.log(curIndexRow[0]);
        var array = this.table;
        array.splice(curIndexRow[0], 1);
        this.table = array;
        fs.writeFileSync(this.full_table_name, JSON.stringify({ "array": this.table }));
        this.read_table_from_file();
    };
    return Create;
}());
exports.Create = Create;
//# sourceMappingURL=create.js.map