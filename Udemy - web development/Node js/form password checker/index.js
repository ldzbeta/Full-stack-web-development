//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Why is this necessary?

// In older Node.js versions, a special variable named __dirname was automatically available, 
// providing the directory path of the current module. However, in modern Node.js using ES modules (.mjs files or with type: "module" in package.json), __dirname is not directly available.

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
//  app.use is a powerful function used to incorporate middleware into your application
// This part specifies the type of body parser to be used. In this case, it's bodyParser.urlencoded.
// The ({extended:true}) option tells Body-Parser to handle extended URL-encoded forms, which may include complex data structures like nested objects or arrays.


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/check',(req,res)=>{

if (req.body["password"]==="ILoveProgramming"){
    res.sendFile(__dirname+'/public/secret.html')
}
else {
    res.sendFile(__dirname + '/public/index.html')
    // res.redirect('/') also can be used
  }
})
app.listen(3000, function() {
console.log('Server is running on port 3000');
});
