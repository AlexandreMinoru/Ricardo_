const botaoOlhar = document.getElementsByClassName("Olhar");

botaoOlhar[0].addEventListener("click",olhar);

const botaoVirar = document.getElementsByClassName("Virar");

botaoVirar[0].addEventListener("click", virar)

const ricardo = document.getElementsByClassName("Ricardo");

ricardo[0].addEventListener("click", tocar)






function olhar(){
    let ricardo = document.getElementsByClassName("Ricardo");
    ricardo[0].src ="https://lastfm.freetls.fastly.net/i/u/ar0/9c388a8db4c08b9c92e6dedab9d6b41c.jpg";
}

function danca(){
    let ricardo = document.getElementsByClassName("Ricardo");
    ricardo[0].src ="https://steamuserimages-a.akamaihd.net/ugc/949596928134142092/4C0E46016EE7ABF8440FCA7B9B5AB60EF55AA969/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=fals";
}

function virar(){
    let ricardo = document.getElementsByClassName("Ricardo");
    ricardo[0].src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqVo7udgrdHjMy_hmPNHImvtu993aDzXgIw&usqp=CAU";
}

function tocar(){
    let audio = document.getElementsByClassName("audio");
    audio[0].volume = 0.2
    audio[0].play();
    let ricardo = document.getElementsByClassName("Ricardo");
    ricardo[0].src ="https://steamuserimages-a.akamaihd.net/ugc/949596928134142092/4C0E46016EE7ABF8440FCA7B9B5AB60EF55AA969/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
}