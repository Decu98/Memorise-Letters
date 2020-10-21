function eventController(){
    var classList = {
        "header": {
            "hiragana": document.getElementsByClassName("headerHiragana").item(0),
            "katakana": document.getElementsByClassName("headerKatakana").item(0),
            "kanji": document.getElementsByClassName("headerKanji").item(0),
            "chart": document.getElementsByClassName("headerChart").item(0)},
        "workspace": {
            "input": document.getElementsByClassName("input-workspace")
        }
    }
    classList.header.hiragana.addEventListener("click", generateHiragana);
    classList.header.katakana.addEventListener("click", generateKatakana);
    classList.header.kanji.addEventListener("click", generateKanji);
    classList.header.chart.addEventListener("click", generateChart)
    for(var i = 0 ; i < classList.workspace.input.length; i++){
        classList.workspace.input.item(i).addEventListener('keypress', function(e){
            if(e.keyCode == 13){
                checkEnter(this.id)
            }
        })
    }
}

