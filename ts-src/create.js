"use strict";
exports.__esModule = true;
/*
This creat the folder and files ie tables
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
    Create.prototype.create_table = function (table_name) {
        // this creates the table file i.e table_name.json
        // it also initaites JSON object with array
        var full_table_name = this.dbPath + "/" + table_name;
        if (!fs.existsSync(full_table_name)) {
            var createStream = fs.createWriteStream(full_table_name);
            createStream.end();
            fs.writeFileSync(full_table_name, JSON.stringify({ array: [] }));
        }
    };
    return Create;
}());
exports.Create = Create;
