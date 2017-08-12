var button=document.getElementById("counter");
button.onclick=function()
{
    //make a request object
    var request=new XMLHTTPRequest();
    // capturing the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readystate===XMLHTTPRequest.Done)
        {//if the request is done we want to do some activities
            if(request.status ===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.InnerHTML = counter.toString();
                
            }
        }
    };
    //make the request
    request.open('GET','http://guruvedharamanan20cs.imad.hasura-app.io/counter',true);
    request.send(null);
};
