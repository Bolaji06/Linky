
const qrCodeImgEl = document.querySelector('.qr-image');
const qrCodeBtn = document.querySelector('.qr-btn');
const  marginOkBtn = document.querySelector('.margin-ok');
const uri = `http://api.qrserver.com/v1/create-qr-code/?data=`



function createQRCode(){
    qrCodeInput = document.querySelector('.qr-input').value;
    let qrCodeUri = `${uri}${qrCodeInput}&size=250x250`;

    //let uriWithMargin = qrCodeUri.concat('&margin=40', '&color=f00');
    qrCodeImgEl.src = qrCodeUri;
}

qrCodeBtn.addEventListener('click', () =>{
    createQRCode();
    
});
marginOkBtn.addEventListener('click', () =>{
    addingMarginParameter();
});
   

function addingMarginParameter(){
    const marginInput = document.querySelector('.margin-input').value;
    let marginParameter = `${uri}${qrCodeInput}&size=250x250&margin=${marginInput}`;
    qrCodeImgEl.src += marginParameter; 
}