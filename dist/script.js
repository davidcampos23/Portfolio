let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 10000)

function nextImage(){
    count++
    if(count > 3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

// Script Footer
const linkCopy = document.querySelectorAll('.copy');

function Copiar(){   
    
    navigator.clipboard.writeText("davidcamposg23@gmail.com");
    alert("Email Copiado com Sucesso!");
}


linkCopy.forEach(link =>{
    link.addEventListener('click', Copiar);
});