const botao = document.querySelectorAll('.dados')

botao.forEach(button => {
    button.addEventListener('click', function () {
        const botao = this.getAttribute('id')

        const D20 = Math.floor(Math.random() * 20) + 1;
        const D12 = Math.floor(Math.random() * 12) + 1;
        const D10 = Math.floor(Math.random() * 10) + 1;
        const D8 = Math.floor(Math.random() * 8) + 1;
        const D6 = Math.floor(Math.random() * 6) + 1;
        const D4 = Math.floor(Math.random() * 4) + 1;

        var numFormatado = botao.toString();

        if(botao == 'D20'){
            var numFormatado = D20.toString();
            console.log('dado d20', numFormatado); 
        }
        if(botao == 'D12'){
            var numFormatado = D12.toString();
            console.log('dado d12', D12);
        }
        if(botao == 'D10'){
            var numFormatado = D10.toString();
            console.log('dado 10', D10);
        }
        if(botao == 'D8'){
            var numFormatado = D8.toString();
            console.log('dado d8', D8);
        }
        if(botao == 'D6'){
            var numFormatado = D6.toString();
            console.log('dado d6', D6);
        }
        if(botao == 'D4'){
            var numFormatado = D4.toString();
            console.log('dado d4', D4);
        }

        document.getElementById('resultado').innerHTML = botao;
        document.getElementById('resultado').innerHTML = numFormatado;
    })
})