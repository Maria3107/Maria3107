function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Clases'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = jsonObj['Tipos'];
    header.appendChild(myPara);
}
function Tipos(jsonObj) {
    var Bailes = jsonObj['Bailes'];

    for (var i = 0; i < Bailes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myImg = document.createElement('img');
        var myList = document.createElement('ul');
        myH2.textContent = Bailes[i].nombre;
        myPara1.textContent = 'Descripcion: ' + Bailes[i].descripcion;
        myImg.src = Bailes[i].imagenes;
        myImg.width = "300";
        myImg.height = "400"
        var Pasos = Bailes[i].imagenes;
        for (var j = 0; j < Bailes.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = Bailes[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myImg);
        section.appendChild(myArticle);
    }
}
var requestURL = 'Json/json.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var json = request.response;
    populateHeader(json);
    Tipos(json);
}