var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Create a request object to the counter endpoint
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE){
            //TAKE ACTION
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET', 'http://coolcheetah1.imad.hasura-app.io/counter', true);
    request.send(null);
};