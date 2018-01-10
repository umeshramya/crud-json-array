# crud-json-array
This module is for creating and manipulating JSON array, i.e create table, insert row, update row, select row and delete row. useful for small data like storing settings on servers

### install with this command
**npm i crud-json-array**

## reqiure this module
```
    var DB = require("crud-json-array");

    var curDB = new DB.CRUD();
```

## create destination folder
```
    curDB.create_database("test");
```

## create table inside folder

```
    curDB.create_table("fTable",["name", "age", "sex"]);

```

## Code to create more than one table
Each instance of this module produces only one table i.e table_name.json
```
    //below exmple shows way to create three table in side folder data
    var DB = require("crud-json-array");

    var curTable_1 = new DB.CRUD("data");
    curTable_1.create_table("fTable",["name", "age", "sex"]);

    var curTable_2 = new DB.CRUD("data");
    curTable_2.create_table("fTable",["paper1", "paper2", "paper3"]);

    var curTable_3 = new DB.CRUD("data);
    curTable_3.create_table("fTable",["taet1", "test2", "test3"]);


```

## Format of table 
```
    {
        "array" : [
            ["Name", "Age", "Sex" ] //first row i.e 0 index is name of column
            ,["Raju", 18, "Male"]
            ,["Mangala", 34, "Female"]
        
        ]
    }
```

## insert row
```
    curDB.insert_one_row(["Rithik", 47, "male"]);
    curDB.insert_one_row(["Varun", 27, "male"]);
```

## find single row
```
    var index = curDB.find_one_row([0,"Rithik"]);//0 is for column index
    console.log(index);
```
## update row
```
    curDB.update_one_row(["Raman", 18, "Male"], [0, "Rithik"]); //0 is for column index
```

## delete row
```
    curDB.delete_one_row([0, "Umesh"]);
```
## read table (all)
    Two ways to read
    1. from file `var tableFile = curDB.read_table_from_file();`
    2. from memory `var tableMemory = curDB.read_table_in_memory()`

    use in Momery method, avoid from file method

## get table name with path
```
    curDb.get_table_full_path_name();
```
