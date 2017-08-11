var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
articleone:{title :'ARTICLE REPONSE1',
    date : '10 AUG 2017',
    heading:'ARTICLE ONE',
content :`
<p>
            This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>
                    <p>
                    This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>
                    <p>
                    This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>
                    <p>
                    This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>`
},
articletwo: {title :'ARTICLE REPONSE2',
    date : '10 AUG 2017',
    heading:'ARTICLE ONE',
content :`
           <p>
            This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>
                    <p>`

},
articlethree:{title :'ARTICLE REPONSE3',
    date : '10 AUG 2017',
    heading:'ARTICLE three',
content :`
<p>
            This is the content of the article one you can see i t is very nice to do with i-mad app.
                    </p>
                    <p>
                    This is the content of the article three you can see i t is very nice to do with i-mad app.
                    </p>`
}
};
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
         ${date}
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

app.get('/:articleName',function(req,res)
{
     var articleName =req.params.articleName;
     res.send(createtemplate(articles[articleName]));

});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
