let btnGerar = document.querySelector("#gerar-qr")
let box = document.querySelector(".box")
let divQrcode = document.querySelector(".qr-code")

function gerarCodigoQr(){
 let campoQr = document.querySelector("#campo-qr").value;

 box.innerHTML = ""

 if(campoQr.trim() !=""){
     var qrcode = new QRCode(box, {
        text: campoQr,
        width: 300,
        height: 300,
        
     });
     divQrcode.classList.add("display-hidden")
    
   setTimeout(()=> {

      const img = box.querySelector("img")
     const dowload = document.querySelector("#dowload")

     dowload.href = img.src;
   }, 300);
    
    }else {
        divQrcode.classList.remove("display-hidden")
        alert("Campo vazio")
    }
}

btnGerar.addEventListener("click", gerarCodigoQr)