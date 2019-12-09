function Tipos(jsonObj) {
    var Bailes = jsonObj['Bailes'];
    for (var i = 0; i < Bailes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myImg = document.createElement('imagenes');
        var myList = document.createElement('ul');
        myH2.textContent = Bailes[i].name;
        myPara1.textContent = 'Descripcion' + Bailes[i].descripcion;
        myImg.src = Bailes[i].imagenes;
        myImg.width = "200";
        myImg.height = "300";
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
