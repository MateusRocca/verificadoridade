//Exercicio onde a idade é inserida e o gênero é selecionado. Após as opções terem sido preenchidas corretamente, o sistema retorna uma mensagem com o seu gênero, idade e uma foto representando a sua faixa etária.

function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtn');
    let res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        //Se ano for igual a o ou ano for maior que o ano atual, vai retornar esse alerta.
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('opcao');
        let idade = ano - Number(fano.value); //Para verificar a idade. (ano digitado na caixa menos o ano atual).
        let genero = ''
        //ABAIXO A VARIÁVEL COM O ELEMENTO CRIADO PELO HTML E ESTILIZADO PELO CSS
        let imagem = document.getElementById('img');

        //ABAIXO, EM COMENTÁRIO, FEITO COM O ELEMENTO CRIADO E EDITADO DIRETAMENTE NO JAVASCRIPT
        
        /*var img = document.createElement('img'); //Cria um elemento img, como se estivesse criando em HTML.
        img.setAttribute('id', 'foto'); //Cria um id para o elemento img com o nome 'foto'.
        img.style.borderRadius = '50%'; //Editando a tag 'img' para a imagem ficar redonda.*/
        

        //Se o botão fsex no indice 0, que no caso é o primeiro botão, estiver selecionado, retorna 'Homem'.
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.src = 'assets/criança.h.jpg'; //Chama as img da pasta assets.
            } else if ( idade < 21) {
                //Jovem
                img.src = 'assets/jovem.h.jpg';
            } else if (idade < 50) {
                //Adulto
                img.src = 'assets/adulto.h.jpg';
            } else {
                //Idoso
                img.src = 'assets/idoso.h.jpg';
            }
        //Se o botão fsex no indice 1, que no caso é o segundo botão, estiver selecionado, retorna 'Mulher'.    
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.src = 'assets/criança.m.jpg';
            } else if ( idade < 21) {
                //Jovem
                img.src = 'assets/jovem.m.jpg';
            } else if (idade < 50) {
                //Adulto
                img.src = 'assets/adulto.m.jpg';
            } else {
                //Idoso
                img.src = 'assets/idoso.m.jpg';
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       // res.appendChild(img); //Vai chamar as img na página.
    }

}