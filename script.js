let Botao = document.querySelector("#Botao");
Botao.style.background="blue";
let estaQuebrado=false;

Botao.addEventListener("mouseover",e =>{
    if(estaQuebrado===false)
      Botao.style.background="green";
});
Botao.addEventListener("mouseout",e =>{
    if(estaQuebrado===false)
      Botao.style.background="blue";
});
Botao.addEventListener("click",e =>{
    Botao.style.background="red";
    Botao.innerHTML="quebrei";
    estaQuebrado=true;
});