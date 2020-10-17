
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
        for(var i = 0; i < 30; i++){
            
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
            var option = document.getElementById("target").value;
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
                document.getElementById(`word${i}`).style.backgroundColor = "green";
            }else
                document.getElementById(`word${i}`).style.backgroundColor = "red" 
      });
}

function selectTarget(){
    var userChange = document.getElementById("target").value;
    document.getElementById("main").innerHTML = "";
    switch(parseInt(userChange)){
        case 0:
            //showQuestion('Japanese',0);
            for(var i = 0; i < 30; i++){ 
                generateDiv("single-workspace")
            }
            showQuestion('Japanese',0);
            break;
        case 1:
            //showQuestion('Japanese',1);
            for(var i = 0; i < 30; i++){ 
                generateDiv("single-workspace")
            }
            showQuestion('Japanese',1)
            break;
        case 2:
            //showQuestion('Japanese',1);
            for(var i = 0; i < 30; i++){ 
                generateDiv("single-workspace")
            }
            showQuestion('Japanese',2)
            break;
        case 99:
            renderCharts();
            break;
    }
}

function countAnwsers(){
    var wordsClass = document.getElementsByClassName("sent-word");
    var goodAnwser = 0;
    for(var i = 0; i < wordsClass.length; i++){
        var color = wordsClass.item(i).style.backgroundColor
        if(color == "green"){
            goodAnwser++;
            if(goodAnwser == 10){
                alert("Completed")
            }
        }
        else{
            var badAnwser = 10 - goodAnwser;
            alert(`There are ${badAnwser} not correct anwser`);
            return 0;
        } 
    }
}