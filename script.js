

function printLoaded(message) {
  console.log(message);


}

printLoaded("Loaded")


function addParagraph(inputName) {
  
  var body = document.getElementsByTagName("BODY")[0];

  var para = document.createElement("p");

  var fnameNodes = document.getElementsByName(inputName);

  var firstInput = fnameNodes [0];
  
  var textNode = document.createTextNode(firstInput.value);

  var removeNameButton = document.createElement("BUTTON");

  removeNameButton.className = "removeClass"

  para.className = "name"

  removeNameButton.innerHTML = "Remove"

  removeNameButton.onclick = function () {
    
    var parentPara = removeNameButton.parentElement

    body.removeChild (parentPara)

    
  }

  

  para.appendChild(textNode);

  para.appendChild(removeNameButton);

  body.appendChild(para);

  //SEND name to server by calling 
  // "http://localhost/name/" + firstInput.value


}

