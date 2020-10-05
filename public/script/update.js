
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

async function showQuestion(url){
    const newCache = await caches.open('new-cache');
    const response = await newCache.match(url);
    response.json().then(data => {
        var wordsList = data.japanese;
        var temp = [];
        for(var i = 0; i < 10; i++){
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
            var anwser = document.getElementById(`input${i}`).value;
            var anwserList = data.polish
            if(anwser == anwserList[i]){
                document.getElementById(`word${i}`).style.backgroundColor = "green";
            }else
                document.getElementById(`word${i}`).style.backgroundColor = "red" 
      });
}

function selectTarget(){
    var userChange = document.getElementById("target").value;
    switch(parseInt(userChange)){
        case 0:
            showQuestion('Japanese');
            break;
    }
    for(var i = 0; i < 1000; i++){
        if(document.getElementById(`word${i}`) == null){
            i++;
        }
        else{
        document.getElementById(`word${i}`).style.backgroundColor = "whitesmoke";
        }
    }
}