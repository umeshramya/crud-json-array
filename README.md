# crud-json-array
This module is creating manipulating JSON array. create table, insert, update, select and delete. useful for small data

### install with this command
**npm i crud-json-array**

## What is this module?
This is storing small amount of data in columan and row format. for exmple storing settings, 
1.  Each instance of this module produces only one table i.e table_name.json
2.  CRUD operatation inlude insert, update, find, delete

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
## insert row
```
    curDB.insert_row(["Rithik", 47, "male"]);
    curDB.insert_row(["Varun", 27, "male"]);
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
Two way to read
1. from file `var tableFile = curDB.read_table_from_file();`
2. from memory `var tableMemory = curDB.read_table_in_memory()`

use in Momery as avoid from file method



