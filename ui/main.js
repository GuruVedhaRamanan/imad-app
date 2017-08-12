var button=document.getElementById("counter");
button.onclick=function()
{  
    var request = new XMLHttpRequest();
     request.onreadystatechange = function()
     {
         if(request.readyState===XMLHttpRequest.DONE)
         {
             if(request.status=== 200)
             {
                 var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML = counter.toString();
             }
         }
     };
     request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/counter',true);
     request.send(null);
    };
      
    var submit =document.getElementById("submit_btn");
   submit.onclick = function(){
     var request = new XMLHttpRequest();
     request.onreadystatechange = function()
     {
         if(request.readyState == XMLHttpRequest.DONE)
         {
             if(request.status ==200)
             {
                 var names = request.responseText;
                 names=JSON.parse(names);
                var ul = document.getElementById("namelist");
             ul.innerHTML = names;
             }
         }
     };
      var nameInput=document.getElementById("name");
      var name = nameInput.value;
     request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/submit-name/?name='+name,true);
     request.send(null);
   };
         var commentbox = document.getElementById("comment_btn");
             commentbox.onclick = function(){
                 var request = new XMLHttpRequest();
                 request.onreadystatechange = function()
                 {
                     if(request.readyState === XMLHttpRequest.DONE)
                     {
                         if(request.status ==200)
                         {
                             var comments = request.responseTEXT;
                             comments =JSON.parse(comments);
                              var ul =document.getElementById("commentslist");
                              ul.innerHTML = comments;
                         }
                     }
                 };
                 request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/comment',true);
                 request.send(null);
             };

   
   
