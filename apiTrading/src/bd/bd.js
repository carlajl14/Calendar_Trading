const fs = require("fs");

const saveToDataBase=(newtransaccion)=>{
  fs.writeFileSync("./src/bd/transactions.json",JSON.stringify(newtransaccion,null,2),{
    encoding:"utf-8"
  })

}
module.exports = saveToDataBase;