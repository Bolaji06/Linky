


const shortLinkBtn = document.querySelector('.short-btn');
const shortLinkGenerated = document.querySelector('.short-link-generated');
const shortnerContainer = document.querySelector('.link-short-container');
const errorMsg = document.querySelector('.error-msg');



//const links = JSON.parse(localStorage.getItem('links')) || [];


 

shortLinkBtn.addEventListener('click', ()=>{
   
   const inputLinkEl = document.querySelector('.input-link').value;
   const uri = ` https://api.shrtco.de/v2/shorten?url=${inputLinkEl}`;

   shortnerContainer.append(shortLinkGenerated);


    fetch(uri).then(response => response.json())
              .then((data) => {
                generateShortLink(data.result.short_link2, data.result.original_link);
                console.log(data.result)

              }).catch((error) => {
                    console.error(error);
                    errorMsg.textContent = error;
                    errorMsg.style.color = 'red';
                    });
});



function generateShortLink (dataShtLink, userLink){

    
    const shortGenRow = document.createElement('div');
    shortGenRow.className = 'short-gen-row';

    const userLinkEl = document.createElement('a');
    userLinkEl.className = 'user-link';
    userLinkEl.textContent = userLink;
    userLinkEl.setAttribute('href', userLink);

    const shortLinkAction = document.createElement('div');
    shortLinkAction.className = 'short-link-action';

    const shortLink = document.createElement('a');
    shortLink.className = 'short-link';
    shortLink.textContent = dataShtLink;
    shortLink.setAttribute('href', dataShtLink);

    const buttonCopy = document.createElement('button');
    buttonCopy.className = 'btn-copy';
    buttonCopy.textContent = 'Copy';

    const closeButton = document.createElement('img');
    closeButton.className = 'close-gen-link';
    closeButton.setAttribute('src', '/assets/close.svg');

    shortLinkAction.appendChild(shortLink);
    shortLinkAction.appendChild(buttonCopy);
    shortLinkAction.appendChild(closeButton);
    

    shortGenRow.appendChild(userLinkEl);
    shortGenRow.appendChild(shortLinkAction);

    shortLinkGenerated.appendChild(shortGenRow);

    closeButton.addEventListener('click', () =>{
        console.log('click');
        shortLinkGenerated.remove();

        
        if(shortLinkGenerated > 1){
            shortLinkGenerated.array.forEach(element => {
                shortLinkGenerated[element].remove();
                
            });
        }
        else{
            
        }
    })
    buttonCopy.addEventListener('click', ()=>{
        copyLinkToClipboard(dataShtLink);

        setTimeout(() =>{
            buttonCopy.style.backgroundColor = 'green';
            buttonCopy.textContent = 'Copied';
        }, 100)
        setTimeout(() =>{
            buttonCopy.style.backgroundColor = '#d04bf1';
            buttonCopy.textContent = 'Copy';
        }, 1000)
        

        
    })

}
/*
links.forEach(generateShortLink);
function copyLinkToClipboard(text, el){
    navigator.clipboard.writeText(text)
    console.log(text);
}*/



