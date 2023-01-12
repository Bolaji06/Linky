



const shortLinkBtn = document.querySelector('.short-btn');
const shortLinkGenerated = document.querySelector('.short-link-generated');
const shortnerContainer = document.querySelector('.link-short-container');
const errorMsg = document.querySelector('.error-msg');

const linkArray = [];

const savedLink1 = localStorage.getItem('link1') || [];
const savedLink2 = localStorage.getItem('link2') || [];

generateShortLink(savedLink1, savedLink2);


 

shortLinkBtn.addEventListener('click', ()=>{
   
   const inputLinkEl = document.querySelector('.input-link').value;
   const uri = ` https://api.shrtco.de/v2/shorten?url=${inputLinkEl}`;

   

    
    fetch(uri).then(response => response.json())
    
              .then((data) => {

                const {short_link2, original_link} = data.result;
                generateShortLink(short_link2, original_link);

                localStorage.setItem('link1', short_link2);
                localStorage.setItem('link2', original_link);

                console.log(data);

              }).catch((error) => {
                    console.error(error);
                    errorMsg.textContent = error;
                    errorMsg.style.color = 'red';
                    });
                    
});
//localStorage.clear();
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
    shortnerContainer.append(shortLinkGenerated);

    closeButton.addEventListener('click', (e) =>{
        console.log('click');
        localStorage.removeItem('link1');
        localStorage.removeItem('link2');

        shortLinkGenerated.remove();

       
    });
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




