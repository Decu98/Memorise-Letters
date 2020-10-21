var globalChoese = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

async function showQuestion(url,option){
    const newCache = await caches.open('new-cache');
    const response = await newCache.match(url);
    response.json().then(data => {
        switch(parseInt(option)){
            case 0:
                var wordsList = data.hiragana;
                break;
            case 1: 
                var wordsList = data.katakana
                break;
            case 2: 
                var wordsList = data.kanji
                break;

        }
        var temp = [];
        for(var i = 0; i < wordsList.length-1; i++){
            
            var getPlace = document.getElementById(`word_${i}`);
            var place = getRandomInt(0, wordsList.length);
            while(temp.includes(place)){
                place =  getRandomInt(0, wordsList.length);
            }
            temp.push(place)
            var getButton = document.getElementById(`button_${i}`);
            var getInput = document.getElementById(`input_${i}`);
            getPlace.innerText = wordsList[place];
            getPlace.id = `word${place}`;
            getInput.id = `input${place}`
            getButton.id = `button${place}`
        }
    })
}

async function checkAnwser(i){
    const newCache = await caches.open('new-cache');
    const response = await newCache.match('Anwser');
    response.json().then(data => {
            i = i.slice(6);
            var option = globalChoese;
            var anwser = document.getElementById(`input${i}`).value;
            switch(parseInt(option)){
                case 0:
                    var anwserList = data.polish;
                    break;
                case 1: 
                    var anwserList = data.polish;
                    break;
                case 2: 
                    var anwserList = data.kanji;
                    break;
    
            }
            if(anwser == anwserList[i]){
                document.getElementById(`word${i}`).style.backgroundColor = "rgba(0, 128, 0, 0.3)";
            }else
                document.getElementById(`word${i}`).style.backgroundColor = "rgba(128, 0, 0, 0.3)" 
      });
}

function generateHiragana(){
    document.getElementById("main").innerHTML = "";
    for(var i = 0; i < 45; i++){ 
        generateDiv("single-workspace")
    }
    globalChoese = 0;
    showQuestion('Japanese',0);
}

function generateKatakana(){
    document.getElementById("main").innerHTML = "";
    for(var i = 0; i < 45; i++){ 
        generateDiv("single-workspace")
    }
    globalChoese = 1;
    showQuestion('Japanese',1);
}

function generateKanji(){
    document.getElementById("main").innerHTML = "";
    for(var i = 0; i < 10; i++){ 
        generateDiv("single-workspace")
    }
    globalChoese = 2;
    showQuestion('Japanese',2)
}

function generateChart(){
    document.getElementById("main").innerHTML = "";
    renderCharts();
}