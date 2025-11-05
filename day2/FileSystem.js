import { log } from 'console';
import fs from 'fs';

fs.writeFile("sample.txt","Hello",(err)=>{
    if (err) {
        console.log(err);
        
    }
})

// const data = fs.readFileSync("sample.text",(err)=>{
//      if (err) {
//         console.log(err);
        
//     }
//     console.log(data);
    
// })

fs.appendFile("sample.txt", "\n Thank you",(err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log("data added successfully");
    
})

fs.rename("sample.txt", "demo.txt", (err)=>{
    if (err) {
        console.log(err);
        
    }
    console.log("Renamed");
    
})