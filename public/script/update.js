

function showQuestion(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var wordsList = JSON.parse(xhttp.responseText);
        console.log(wordsList.japanese)
        var temp = [];
        for(var i = 0; i < 10; i++){
            var getPlace = document.getElementById(`word_${i}`);
            var place = getRandomInt(0, wordsList.japanese.length);
            while(temp.includes(place)){
                place =  getRandomInt(0, wordsList.japanese.length);
            }
            temp.push(place)
            var getButton = document.getElementById(`button_${i}`);
            var getInput = document.getElementById(`input_${i}`);
            getPlace.innerText = wordsList.japanese[place];
            getPlace.id = `word${place}`;
            getInput.id = `input${place}`
            getButton.id = `button${place}`
        }

    }
    xhttp.open('GET', '/Japanese', true);
    xhttp.send();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function checkAnwser(i){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            i = i.slice(6);
            var anwser = document.getElementById(`input${i}`).value;
            var anwserList = JSON.parse(xhttp.responseText);
            if(anwser == anwserList.polish[i]){
                document.getElementById(`word${i}`).style.backgroundColor = "green";
            }else
                document.getElementById(`word${i}`).style.backgroundColor = "red" 
        }
      };
    xhttp.open('GET', '/Anwser', true);
    xhttp.send();
}