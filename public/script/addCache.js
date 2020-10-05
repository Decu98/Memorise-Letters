async function addCache(url){
    const newCache = await caches.open('new-cache');
    newCache.add(url)
}

async function getCache(url){
    const newCache = await caches.open('new-cache');
    const response = await newCache.match(url);
    response.json().then(data => {
            var wordList = data.polish
            console.log(wordList.length)
    });
}