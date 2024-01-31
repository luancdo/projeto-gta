/*Dicas e observações: 

1°- console.log(elementoPlataformas);     /// com o console.log você consegue ver o que vocês esta pegendo com o JS e tudo que você consegue fazer com ele, basta colocar ele logo a pós o objeto e subistituir o nome do obejeto do exemplo e apertar F12 na pagina web do site. 
*/

/*
Obejetivo 1 - Quando o usuario clicar no botão de seleção de plataformas deve abrir a uma caixa com os botões de seleção de plataformas.

    1.1 - Pegar o botão de seleção da plataforma no js para poder verificar quando o usuário clicar em cima dele.
    1.2 - Pegar o elemento do conteudo que precisa ser mostrado. 
    1.3 - Pegar o clique do usuario no JS
    1.4 - Criar uma elemento para o if ou else, para que ele execute a ação ou não. 
    1.5 - Quando o usuário clicar adicionar a classe ATIVO no botão pra que o conteúdo dele no botão apareça.

Obejetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteudo deve ser escondido.

    2.2 - Verificar se p botão já foi ativado pelo usuário, se SIM, devemos remover a classe ATIVO  para que ele esconda o conteúdo novamente.
*/

//1.1 - Pegar o botão de seleção da plataforma no js para poder verificar quando o usuário clicar em cima dele.
const botao = document.querySelector(".btn-plataforma");

//1.2 - Pegar o elemento do conteudo que precisa ser mostrado.
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//1.3 - Pegar o clique do usuario no JS
botao.addEventListener("click", () => {
    //1.4 - Criar uma elemento para o if ou else, para que ele execute a ação ou não. 
    const botaoAbertoFechado = elementoPlataformas.classList.contains("ativo");
    //1.5 - Quando o usuário clicar adicionar a classe ATIVO no botão pra que o conteúdo dele no botão apareça.
    if (botaoAbertoFechado) {
        elementoPlataformas.classList.remove("ativo");
    }
    //2.2 - Verificar se p botão já foi ativado pelo usuário, se SIM, devemos remover a classe ATIVO  para que ele esconda o conteúdo novamente.
    else {
        elementoPlataformas.classList.add("ativo");
    }
    /* 
    elementoPlataformas.classList.toggle("ativo");     =  Este metodo voce consegue ter a mesma função que todo o codigo acima apenas com uma linha.
    */
});
