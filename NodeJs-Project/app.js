//. Setting up Node.js
//  Objective: Install Node.js and create a simple script to verify installation.
//  Task:
// 1. Install Node.js on your system.
// 2. Write a script (app.js) that logs &quot;Hello, Node.js!&quot; to the console.
// 3. Run the script using node app.js.

console.log("Hello Node.js");

// 2. Working with Built-in Modules
//  Objective: Use the fs and path modules.
//  Task:
// 1. Create a new directory called test.
// 2. Inside the directory, create a file named data.txt and write &quot;This is a sample
// file&quot; to it.
// 3. Read the file content and log it to the console.

const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "test");
const file = path.join(dir, "data.txt");

fs.mkdir(dir, (err)=>{
    if(err){
        return console.log(err);
    }
    else{
        fs.writeFile(file, "This is a sample file", (err, data)=>{
            if(err){
                return console.log(err)
            }
            else{
                fs.readFile(file, 'utf8', (err, data)=>{
                    if(err){
                        return console.log(err)
                    }
                    else{
                        return console.log(data)
                    }
                })
            }
        })
    }
})

// 3. Creating a Simple Web Server
//  Objective: Use the http module to create a basic server.
//  Task:
// 1. Create a server that responds with &quot;Hello, World!&quot; for all incoming requests.
// 2. Test the server in your browser or using curl.

const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello World");
    res.end();
}).listen(8000);

// 4. Working with npm
//  Objective: Use npm to manage packages.
//  Task:
// 1. Initialize a new Node.js project using npm init.
// 2. Install the chalk package.
// 3. Write a script that logs a colorful &quot;Welcome to Node.js!&quot; message using
// chalk.


const chalk = require("chalk");

console.log(chalk.blue('Hello world!'));

// 5. Handling JSON Data
//  Objective: Read and write JSON files.
//  Task:
// 1. Create a data.json file with the following content:

const fs = require("fs");
const path = require("path");

const jsondir = path.join(__dirname, "Json");
const filpath = path.join(jsondir, "nic.json");
fs.mkdir(jsondir, (err)=>{
    if(err){
        return(err);
    }
    else{
        fs.writeFile(filpath, "{'name': 'Vikas'}", (err)=>{
            if(err){
                return console.log(err)
            }
            else{
                fs.readFile(filpath, 'utf8', (err, data)=>{
                    console.log(data)
                })
            }
        })
    }
})

// Assignment Done - Vikash Khati 