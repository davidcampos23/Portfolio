function ativarTitulo(element)
{
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';

    arrText.forEach((letra, i)=> {
        setTimeout(()=>{
            element.innerHTML += letra;
        }, 75 * i)
    })
}

const titulo = document.querySelector('#digitando');
ativarTitulo(titulo);
