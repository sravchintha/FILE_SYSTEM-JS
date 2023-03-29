const fs=require('fs')

fs.writeFile("file2.js","Hi employeeeee",(err)=>{
    if(err){
        console.err(err);
    }
    console.log("new file is created");
})