
const qrCodeImgEl = document.querySelector('.qr-image');
const qrCodeBtn = document.querySelector('.qr-btn');
const marginOkBtn = document.querySelector('.margin-ok');
const inputColor = document.querySelector('#color-picker');
const uri = `http://api.qrserver.com/v1/create-qr-code/?data=`



function createQRCode(){
    qrCodeInput = document.querySelector('.qr-input').value;
    let qrCodeUri = `${uri}${qrCodeInput}&size=250x250`;

    //let uriWithMargin = qrCodeUri.concat('&margin=40', '&color=f00');
    qrCodeImgEl.src = qrCodeUri;
}

// if (qrCodeInput === ' '){
//     //qrCodeBtn.disable = true;
//     qrCodeBtn.style.backgroundColor = 'red';
// }

qrCodeBtn.addEventListener('click', createQRCode);
marginOkBtn.addEventListener('click', addingMarginParameter)

   

function addingMarginParameter(){
    const marginInput = document.querySelector('.margin-input').value;
    let marginParameter = `${uri}${qrCodeInput}&size=250x250&margin=${marginInput}`;
    qrCodeImgEl.src += marginParameter; 
}


function addingColorParameter(){
    inputColor.addEventListener('input', getChange);
    inputColor.addEventListener('change', getChange);
}
addingColorParameter();

function getChange(event){
    let getChangeColor = event.target.value;
    let removeHarsh = getChangeColor.slice(1);
    console.log(removeHarsh);
    let colorChange = `${uri}${qrCodeInput}&size=250x250&color=${removeHarsh}`;
    qrCodeImgEl.src += colorChange;
    console.log(getChangeColor); 
   
}

// let myName = 'BOLAJI';
// let remove = myName.slice(1);
// console.log(remove);