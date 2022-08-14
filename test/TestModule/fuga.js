console.log("%cSuccess: Load at fuga.js","color:yellow");
document.getElementById("test").insertAdjacentHTML('beforeend', "Success: Load at fuga.js" + "<br>")

document.getElementById("test").insertAdjacentHTML('beforeend', "-----TEST START -----" + "<br>");
while (true){
    if (Hoge > 100){
        document.getElementById("test").insertAdjacentHTML('beforeend', "-----TEST END -----" + "<br>");
        break;
    }
    else {
        document.getElementById("test").insertAdjacentHTML('beforeend', String(Hoge) + "<br>")
        Hoge += 1;
    }
}