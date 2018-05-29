/*A função validaBusca verifica se o id=q (campo de busca) está vazio,
se estiver mostramos um alert e abortamos a submissão do formulario com false  */

function validaBusca(){
if(document.querySelector('#q').value == ''){
alert("Preencha o campo!!!!");
document.querySelector('#form-busca').style.background="red";
document.querySelector('#q').style.borderColor="red";
return false;
}
document.querySelector('#q').onfocus;
}
//O proprio navegador pode chamar a função com um evento.A função e disparada quando
//o usuario dispara o evento de enviar o formulario (onsubmit)
document.querySelector('#form-busca').onsubmit=validaBusca;


//array que guarda as imagens para fazer um banner rotativo
var banners=["img/destaque-home.png","img/destaque-home-2.png"];
var bannerAtual=0;

//Essa função faz a troca das imagens utilizando as posições do array para isso,atraves do resto obtido do modulo do bannerAtual
function trocaBanner(){
bannerAtual=(bannerAtual + 1)% 2;
document.querySelector('.destaque img').src=banners[bannerAtual];
}
//A cada 4 segundos a função trocaBanner é chamada
setInterval(trocaBanner,4000);