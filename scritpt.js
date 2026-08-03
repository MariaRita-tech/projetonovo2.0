const botoes  = document.querySelector All ("button");

botoes.forEach(function(bortao)) {
    let curtiu = false;
    botao.addEventLIstener ("click", botaoClicado);
    function botaoClicado(){
        console.log ("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }    
};