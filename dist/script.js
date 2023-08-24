const copy = document.getElementById("CopyMail");
const linkCopy = document.querySelectorAll('.copy');

function Copiar(){   
    
    navigator.clipboard.writeText(copy.innerText);
    console.log("Copiado");
}


linkCopy.forEach(link =>{
    link.addEventListener('click', Copiar);
});