const fs = require('fs')
 fs.writeFile('./welcome.txt','Hello Node',(err,data)=>{
    console.log('created with succ')
 })
 fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    console.log(data)
 })