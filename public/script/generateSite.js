
function generateDiv(value){
    var newDiv = document.createElement("div");
    var mainBody = document.getElementById("main")
    newDiv.setAttribute("class", value);
    mainBody.insertAdjacentElement('beforeend',newDiv);
    insertToDiv();
}


function insertToDiv(){
    var elements = [
        h1 = document.createElement("h1"),
        input = document.createElement("input"),
        button = document.createElement("a"),
        div = document.createElement("div"),
    ]
    elements[0].setAttribute("class", "sent-word");
    var input_att = ["class", "autocomplete", "type"]
    var input_val = ["input-workspace", "off", "text"]
    for(var i = 0; i < input_att.length; i++){
        elements[1].setAttribute(input_att[i], input_val[i]);
    }
    var button_att = ["class", "onclick"]
    var button_val = ["button-workspace", `checkAnwser(this.id)`]
    for(var i = 0; i < button_att.length; i++){
        elements[2].setAttribute(button_att[i], button_val[i]);
    }
    elements[2].innerText = "Apply";
    elements[3].setAttribute("class", "show-workspace")
    var placeToSingle = document.getElementsByClassName("single-workspace");
    for(var i = 0; i < placeToSingle.length; i++){
        placeToSingle.item(i).insertAdjacentElement('beforeend', elements[3])
    }
    var divToPlace = document.getElementsByClassName("show-workspace");
    for(var i = 0; i < divToPlace.length; i++){
        divToPlace.item(i).insertAdjacentElement('beforeend', elements[0]);
        elements[0].setAttribute("id", `word_` + i);
        divToPlace.item(i).insertAdjacentElement('beforeend', elements[1]);
        elements[1].setAttribute("id", `input_` + i);
        divToPlace.item(i).insertAdjacentElement('beforeend', elements[2]);
        elements[2].setAttribute("id", `button_` + i);
    }
}

function checkEnter(id){
    id = "button" + id.slice(5)
    checkAnwser(id)
}

function renderCharts(){
    var checkIfIs = document.getElementsByClassName("chart").length
    if(checkIfIs == 0){
        var mainBody = document.getElementById("main");
        var newImg = [
            katakana = document.createElement("img"),
            hiragana =document.createElement("img")
        ]
        newImg[0].setAttribute("src","/static/img/katakana.jpg");
        newImg[0].setAttribute("class","chart");
        newImg[1].setAttribute("src","/static/img/hiragana.jpg");
        newImg[1].setAttribute("class","chart");
        mainBody.insertAdjacentElement('afterbegin',newImg[0]);
        mainBody.insertAdjacentElement('afterbegin',newImg[1]);
    }
}