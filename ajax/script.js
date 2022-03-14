/*const btn = document.querySelector("#request");
const bio = document.querySelector("#bio");

const request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(request.readyState === 4) {
        bio.style.border = "1px solid #e8e8e8";

        if(request.status === 200){
            bio.innerHTML = request.responseText;
        }else{
            bio.innerHTML='An error occurred during your request: ' + request.status + ' ' + request.statusText;
        }
    }
}

request.open("get","https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test");

btn.addEventListener('click' , function(){
    
    this.style.display = "none";

    request.send();
});*/
$(document).ready(function(){

    const $btn = $('#request');
    const $bio = $('#bio');

    function completeFunction(responseText, statusText, request){
        $bio.css('border', '1px solid #e8e8e8');

        if (statusText == 'error'){
            $bio.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
        }
    }

    $btn.on('click', function() { 
        $(this).hide();

        $bio.load('https://baconipsum.com/api/?type=meat-and-filler', completeFunction);
    });

});