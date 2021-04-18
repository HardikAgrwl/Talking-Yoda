var textInput = document.querySelector('#text-input');
var btnTranslate = document.querySelector('#translate');
var btnClear = document.querySelector('#clear');
var output = document.querySelector('#output');


var serverLink = 'https://api.funtranslations.com/translate/minion.json';

function getServerLink(text){
    return serverLink + '?text=' + text;
}

function errorHandler(error)
{
    alert('error occured');
    console.log('error occured ' , error);
}

function translateHandler(){
    var inputText = textInput.value;
    fetch(getServerLink(inputText))
    .then(response => response.json())
    .then(json => {
        var trans = json.contents.translated;
        output.innerText = trans;
    }).catch(errorHandler)
}

function clearHandler(){
    textInput.value = "";
    output.innerText = "";
    alert('console cleared');
}

btnTranslate.addEventListener('click' , translateHandler);
btnClear.addEventListener('click' , clearHandler);