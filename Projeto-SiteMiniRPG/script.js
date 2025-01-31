const localiza = document.querySelectorAll('.b');

console.log('localiza', localiza);

localiza.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativa');

        var data = this.getAttribute('prox');

        const proxTela = data;

        atual.classList.remove('ativa');
        document.getElementById(proxTela).classList.add('ativa');
    })
})