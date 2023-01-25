
// http(s)://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]

const qrCodeImgEl = document.querySelector('.qr-image');
const qrCodeBtn = document.querySelector('.qr-btn');
const marginOkBtn = document.querySelector('.margin-ok');
const inputColor = document.querySelector('#color-picker');
const fileTypeSelect = document.querySelector('#file-type');
const downloadBtn = document.querySelector('.download-btn');


let uri = `http://api.qrserver.com/v1/create-qr-code/?data=`

let featureList = []; // Features List to store all features parameter

function createQRCode(){
    qrCodeInput = document.querySelector('.qr-input').value; // Get data from the user to code as QR Code
    let qrCodeUri = `${uri}${qrCodeInput}&size=250x250`;

    featureList.push(qrCodeInput); // Adding data into the feature list

    //let uriWithMargin = qrCodeUri.concat('&margin=40', '&color=f00');
    qrCodeImgEl.src = qrCodeUri; // Generating QR Code Image 
}



qrCodeBtn.addEventListener('click', createQRCode);
marginOkBtn.addEventListener('click', addingMarginParameter)
 
   
// Margin Feature
function addingMarginParameter(){
    const marginInput = document.querySelector('.margin-input').value; //Get margin input
    let marginParam = '&margin=' + marginInput;
    featureList.push(marginParam); //Add margin feature to the list
    let marginParameter = `${uri}${qrCodeInput}&size=250x250&margin=${marginInput}`; // Adding margin feature value into the link api
    qrCodeImgEl.src += marginParameter; // Settimg the image src with the margin parameter link
}

// Generate color input
function addingColorParameter(){
    inputColor.addEventListener('input', InputColor);
    inputColor.addEventListener('change', ChangeColor);
}
addingColorParameter(); // Change the color of the QR-Code image

// Change the color of the QR image when user click 'OK' from the color palette
function ChangeColor(event){
    let getChangeColor = event.target.value; // This get the value of the color 'e.g #00000'
    let removeHarsh = getChangeColor.slice(1); // Remove the '#' sign from yhe color value
    let colorParameter = '&color=' + removeHarsh;
    featureList.push(colorParameter); // Add the color value into the feature list
    let colorChange = `${uri}${qrCodeInput}&size=250x250&color=${removeHarsh}`; // Adding color value to the API link as parameter
    qrCodeImgEl.src += colorChange; // Set the color of the QR Code image
}
// Instantly change the color of the image when clicking on any color from the palette
function InputColor(event){
    let getChangeColor = event.target.value; // Get the color value 
    let removeHarsh = getChangeColor.slice(1); // Remove the '#' sign from the color value
    let colorChange = `${uri}${qrCodeInput}&size=250x250&color=${removeHarsh}`; // Instantly change the color of the QR image
    qrCodeImgEl.src += colorChange; // Set the QR Code image color immediately when color is selected from the color palette
}

// Select what type of file format the QR Code image should be saved with
fileTypeSelect.addEventListener('click', (e)=>{
    
    const fileType = e.target.value;
    if (fileType === 'png' || 'jpeg' || 'svg'){
        console.log(fileType);
        featureList.push(fileType); // Add selected file format into the feature list
    }
})
downloadBtn.addEventListener('click', ()=>{
    featureList.map((feature) =>{
    uri += feature;
    })
    console.log(uri);
    download('QR-code', uri);
 
    featureList = [];
    console.log(featureList);
})

// Download QR Image function
function download(fileName, text){
    const linkEl = document.createElement('a');
    linkEl.className = 'download-link';
    linkEl.setAttribute('href',  text);
    linkEl.setAttribute('download', fileName);

    downloadBtn.appendChild(linkEl);
}



