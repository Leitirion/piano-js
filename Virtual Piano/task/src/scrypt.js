function auidoAfunc() {
    let audioA = document.createElement("AUDIO");
    audioA.setAttribute("src","music/A.mp3");
    audioA.play();
}
function auidoSfunc() {
    let audioS = document.createElement("AUDIO");
    audioS.setAttribute("src","music/S.mp3");
    audioS.play();
}
function auidoDfunc() {
    let audioD = document.createElement("AUDIO");
    audioD.setAttribute("src","music/D.mp3");
    audioD.play();
}
function auidoFfunc() {
    let audioF = document.createElement("AUDIO");
    audioF.setAttribute("src","music/F.mp3");
    audioF.play();
}
function auidoGfunc() {
    let audioG = document.createElement("AUDIO");
    audioG.setAttribute("src","music/G.mp3");
    audioG.play();
}
function auidoHfunc() {
    let audioH = document.createElement("AUDIO");
    audioH.setAttribute("src","music/H.mp3");
    audioH.play();
}
function auidoJfunc() {
    let audioJ = document.createElement("AUDIO");
    audioJ.setAttribute("src","music/J.mp3");
    audioJ.play();
}
function auidoWfunc() {
    let audioW = document.createElement("AUDIO");
    audioW.setAttribute("src","music/W.mp3");
    audioW.play();
}
function auidoEfunc() {
    let audioE = document.createElement("AUDIO");
    audioE.setAttribute("src","music/E.mp3");
    audioE.play();
}
function auidoTfunc() {
    let audioT = document.createElement("AUDIO");
    audioT.setAttribute("src","music/T.mp3");
    audioT.play();
}
function auidoYfunc() {
    let audioY = document.createElement("AUDIO");
    audioY.setAttribute("src","music/Y.mp3");
    audioY.play();
}
function auidoUfunc() {
    let audioU = document.createElement("AUDIO");
    audioU.setAttribute("src","music/U.mp3");
    audioU.play();
}

//document.getElementById("A").style.backgroundColor="gray"; //change background color forever
document.addEventListener("keypress",function(event) {
    if (event.key === "A" || event.key === "a") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoAfunc();
        document.getElementById("A").style.backgroundColor = 'dimgray';}
        else if (event.key === "S" || event.key === "s") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoSfunc();}
        else if (event.key === "D" || event.key === "d") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoDfunc();}
        else if (event.key === "F" || event.key === "f") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoFfunc();}
        else if (event.key === "G" || event.key === "g") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoGfunc();}
        else if (event.key === "H" || event.key === "h") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoHfunc();}
        else if (event.key === "J" || event.key === "j") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoJfunc();}
        else if (event.key === "W" || event.key === "w") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoWfunc();}
        else if (event.key === "E" || event.key === "e") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoEfunc();}
        else if (event.key === "T" || event.key === "t") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoTfunc();}
        else if (event.key === "Y" || event.key === "y") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoYfunc();}
        else if (event.key === "U" || event.key === "u") {
        console.log("The '"+ event.key +"' key is pressed.");
        return auidoUfunc();}
    else {
        console.log("This is wrong button");
    }

});

document.getElementById("A").addEventListener("click", function () {
        console.log("The 'A' key is pressed.");
        return auidoAfunc();
    });
document.getElementById("S").addEventListener("click", function () {
    console.log("The 'S' key is pressed.");
    return auidoSfunc();
});
document.getElementById("D").addEventListener("click", function () {
    console.log("The 'D' key is pressed.");
    return auidoDfunc();
});
document.getElementById("F").addEventListener("click", function () {
    console.log("The 'F' key is pressed.");
    return auidoFfunc();
});
document.getElementById("G").addEventListener("click", function () {
    console.log("The 'G' key is pressed.");
    return auidoGfunc();
});
document.getElementById("H").addEventListener("click", function () {
    console.log("The 'H' key is pressed.");
    return auidoHfunc();
});
document.getElementById("J").addEventListener("click", function () {
    console.log("The 'J' key is pressed.");
    return auidoJfunc();
});
document.getElementById("W").addEventListener("click", function () {
    console.log("The 'W' key is pressed.");
    return auidoWfunc();
});
document.getElementById("E").addEventListener("click", function () {
    console.log("The 'E' key is pressed.");
    return auidoEfunc();
});
document.getElementById("T").addEventListener("click", function () {
    console.log("The 'T' key is pressed.");
    return auidoTfunc();
});
document.getElementById("Y").addEventListener("click", function () {
    console.log("The 'Y' key is pressed.");
    return auidoYfunc();
});
document.getElementById("U").addEventListener("click", function () {
    console.log("The 'U' key is pressed.");
    return auidoUfunc();
});
