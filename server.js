var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config={
user:'guruvedharamanan20cs',
database:'guruvedharamanan20cs',
host:'db.imad.hasura-app.io',
port:'5432',
password:process.env.DB_PASSWORD,
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
function createtemplate (data){
var title = data.title;
var heading=data.heading;
var date=data.date;
var content =data.content;
var htmltemplate= `
<html>
      <head>
    <title>
        ${title}
    </title>
    <link href ="/ui/style.css" rel="stylesheet" />
    </head>
      <body>
      <div class="guru">
        <div>
          <o href='/'>Home</o>
      </div>
      <hr/>
      <h3>
         ${heading}
      </h3>
      <div>
         ${date.toDateString()}
          </div>
          <div>
         ${content}
                </div>
       </div>
 </body>  
 </html> 
 `;
 return htmltemplate;
}
app.get('/', function (req, res)  {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
 });

 function hash(input,salt){
    //How to create hash?
    var hashed = crypto.pbkdf2Sync(input,salt, 100000, 512, 'sha512');
    return["pbkdf2","100000",salt,hashed.toString('hex')].join('$');
}
app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'this-is-a-random-value');
    res.send(hashedString);
});
app.post('/create-user',function(req,res){
   //user name and password
   var username=req.body.username;
   var password=req.body.password;
   var salt =crypto.getRandomBytes(128).toString('hex');
    var dbstring =hash(password,salt);
    pool.query('INSERT INTO "user"(username,password) VALUES($1,$2)',[username,dbstring],function(err,result){
       if(err)
     {
         res.status(500).send(err.toString());
     }
     else
     {
         res.send("User-name is created successfully"+username);
     } 
        
});
});

 var pool =new Pool(config);
 app.get('/test-db',function(req,res){
    
     //make a select to database
     pool.query('SELECT * FROM test',function(err,result){
     if(err)
     {
         res.status(500).send(err.toString());
     }
     else
     {
         res.send(JSON.stringify(result));
     }
 });
 });
 var counter=0;
 app.get('/counter',function(req,res)
 {
     counter=counter+1;
     res.send(counter.toString());
 });
 app.get('/submit-name',function(req,res){
   var name =req.query.name;
   names.push(name);
// JSON -java script obi=ject notation
   res.send(JSON.stringify(names));
});
var comments =" ";
app.get('/commend',function(req,res){
   var comment =req.query.comment;
  comments.push(comment);
   res.send(JSON.stringify(comments));
});
app.get('/article/:articleName',function(req,res){
   
    pool.query("SELECT * FROM article WHERE title =$1",[req.params.articleName],function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        
        else
        {
            if(result.rows.length===0)
            {
                res.status(404).send("article is not found");
            }
        else
        {
            var articleData = result.rows[0];
         res.send(createtemplate(articleData));
        }
        }
});  
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names= [];


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
