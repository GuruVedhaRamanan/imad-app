
    //submit username
    var submit =document.getElementById("submit_btn");
   submit.onclick = function(){
     var request = new XMLHttpRequest();
     request.onreadystatechange = function()
     {
         if(request.readyState == XMLHttpRequest.DONE)
         {
             if(request.status ==200)
             {
                 console.log("logged in succefully");
                 alert("you have loged into guru's app");
             }
             else if (request.status ==403)
             {
                 console.log("username and password is wrong");
                 alert("you have entered wrong password");
             }
             else if(request.status == 500)
             {
                 console.log("something went wrong");
             }
         }
     };
      var username=document.getElementById("username").value;
      var password=document.getElementById("password").value;
     request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/login',true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({ username: username,password: password}));
   }; 
  
  var register =document.getElementById("register_btn");
register.onclick = function(){
     var request = new XMLHttpRequest();
     request.onreadystatechange = function()
     {
         if(request.readyState == XMLHttpRequest.DONE)
         {
             if(request.status ==200)
             {
                 console.log("logged in succefully");
                 alert("you have suceefully registered");
             }
         }   
     };
      var username=document.getElementById("username").value;
      var password=document.getElementById("password").value;
     request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/create-user',true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({ username: username,password: password}));
   }; 
  