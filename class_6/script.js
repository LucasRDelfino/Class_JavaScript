document.querySelector("button").addEventListener("click",function(){
    var room = document.getElementById("room").value;
    var weapon = document.getElementById("weapon").value;
    var suspect;
    var suspectImage;

    if (room === "Potion Room" && weapon === "Silver Knife"){
        suspect = "Gerald de Rivia";
        suspectImage = "img/geralt.png";
    }else if (room === "Mystic Library" && weapon === "Ghoul Trophy"){
        suspect = "Yennefer de Vengerberg";
        suspectImage = "img/yennefer.jpg";
    }else if (room === "Observatory Room" && weapon === "Steel Sword"){
        suspect = "Zoltan Chivay";
        suspectImage = "img/Zoltan.jpg";
    }else if (room === "Training Hall" && weapon === "Poison Flask"){
        suspect = "Cirilla";
        suspectImage = "img/cirilla.jpg";
    }else {
        suspect = "Inconclusivo";
        suspectImage = "img/inconclusivo.jpg";
    }
    document.getElementById("suspectText").innerText = "O suspeito é "+ suspect;
    var imgElement = document.getElementById("suspectImage");
    imgElement.src = suspectImage;
    imgElement.alt = "Imagem de +" + suspect;
    imgElement.style.display = "block";
});