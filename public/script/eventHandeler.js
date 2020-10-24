function eventController(){
    var listOfClasses = {
        "header": {
            "hiragana": document.getElementsByClassName("headerHiragana").item(0),
            "katakana": document.getElementsByClassName("headerKatakana").item(0),
            "kanji": document.getElementsByClassName("headerKanji").item(0),
            "chart": document.getElementsByClassName("headerChart").item(0)},
        "workspace": {
            "input": document.getElementsByClassName("input-workspace"),
            "single": document.getElementsByClassName("single-workspace"),
            "chart": document.getElementsByClassName("chart")
        }
    }
    listOfClasses.header.hiragana.addEventListener("click", () => {    
        resetIdandVis();
        generateHiragana();
    });
    listOfClasses.header.katakana.addEventListener("click", () => {    
        resetIdandVis();
        generateKatakana();
    });
    listOfClasses.header.kanji.addEventListener("click", () => {    
        resetIdandVis();
        generateKanji();
    });
    listOfClasses.header.chart.addEventListener("click", generateChart);
    listOfClasses.header.chart.addEventListener("click", () => {
        hideWorkspace(listOfClasses.workspace.single)
        showWorkspace(listOfClasses.workspace.chart)});
    listOfClasses.header.hiragana.addEventListener("click", () => {
        hideWorkspace(listOfClasses.workspace.chart)});
    listOfClasses.header.katakana.addEventListener("click", () => {
        hideWorkspace(listOfClasses.workspace.chart)});
    listOfClasses.header.kanji.addEventListener("click", () => {
        hideWorkspace(listOfClasses.workspace.chart)});
    for(var i = 0 ; i < listOfClasses.workspace.input.length; i++){
        listOfClasses.workspace.input.item(i).addEventListener('keypress', function(e){
            if(e.keyCode == 13){
                checkEnter(this.id)
            }
        })
    }
    hideWorkspace(listOfClasses.workspace.single)
}

function hideWorkspace(a){
    for(var i = 0; i < a.length; i++){
        a.item(i).classList.add("notActive");
    }
}

function showWorkspace(a){
    for(var i = 0; i < a.length; i++){
        a.item(i).classList.remove("notActive");
    }
}

function resetIdandVis(){
    var targets = {
        "word": document.getElementsByClassName("sent-word"),
        "input": document.getElementsByClassName("input-workspace"),
        "button": document.getElementsByClassName("button-workspace"),
        "workspace":  document.getElementsByClassName("single-workspace")
    }
    for(var i = 0; i < targets.word.length; i++){
        targets.word.item(i).id = `word_` + i;
        targets.input.item(i).id = `input_` + i;
        targets.button.item(i).id = `button_` + i;
        showWorkspace( targets.workspace)
    }
}

