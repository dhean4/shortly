const shortening=document.getElementById('shorten-it');
const main=document.getElementById('main');
const base_api="https://api.shrtco.de/v2/shorten?url=";
let link;
async function getShorteningAPi(){
    link=(document.getElementById('shorten').value);
    console.log(link)
    const response=await fetch(base_api + link);
    const data=await response.json();
    console.log(data);
    displayLink(data);
}
function displayLink(link){
    main.innerHTML="";
    let currentResult=link.result.short_link;
    const displayResult=document.createElement('div');
    displayResult.classList.add('currentResult');
    displayResult.innerHTML=`
    <div class="display_link" id="display">
      <h2>Link Generated !</h2>
      <h2><a href="http://${currentResult}" target="_blank">${currentResult}</a></h2>
    </div> `
    main.appendChild(displayResult)
}
document.getElementById('shorten-it').addEventListener('click',getShorteningAPi,false);