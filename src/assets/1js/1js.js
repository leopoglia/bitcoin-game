$(function () {
    var inimigos = document.getElementsByClassName('inimigos'),
        bitcoin = document.getElementsByClassName('moeda'),
        pane = $('#pane'),
        box = $('#box'),
        personagem = document.querySelector("img"),
        wh = pane.width() - box.width(),
        wv = pane.height() - box.height(),
        d = {},
        x = 5,
        morte = false,
        venceu = false,
        moedas = 0,
        velocidade = 0;



    $(window).keydown(function (e) {
        d[e.which] = true;
    });
    $(window).keyup(function (e) {
        if (morte == false) {
            d[e.which] = false;
        }
    });

    animar();


    function newh(v, a, b) {
        colisao();
        colisaobitcoin();
        if (morte == false && venceu == false) {
            var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);

            if (d[a] == true) {
                personagem.style = 'transform: rotateX(360deg)';

            } else if (d[b] == true) {
                personagem.style = 'transform: scaleX(-1)';
            }

            return n < 0 ? 0 : n > wh ? wh : n;
        }
    }

    function newv(v, a, b) {
        if (morte == false && venceu == false) {
            var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
            return n < 0 ? 0 : n > wv ? wv : n;
        }
    }

    function animar() {
        for (let i = 0; i < bitcoin.length; i++) {
            margintop = Math.floor(Math.random() * 500);
            marginleft = Math.floor(Math.random() * 1200);
            bitcoin[i].style = `margin-bottom: ${margintop}px !important; margin-left: ${marginleft}px;`
        }

        for (let i = 0; i < inimigos.length; i++) {

            velocidade = Math.floor(Math.random() * 50);
            if (velocidade > 50) {
                inimigos[i].style = `animation: inimigos linear infinite ${velocidade}s; top: ${Math.floor(Math.random() * 400)}px;`;

            } else {
                inimigos[i].style = `animation: inimigos linear infinite ${velocidade + 10}s; top: ${Math.floor(Math.random() * 400)}px;`;
            }
        }
    }



    function colisao() {
        for (let i = 0; i < inimigos.length; i++) {
            inimigo = inimigos[i].getBoundingClientRect();
            perso = personagem.getBoundingClientRect();

            if (perso.x < inimigo.x + inimigo.width &&
                perso.x + perso.width > inimigo.x &&
                perso.y < inimigo.y + inimigo.height &&
                perso.y + perso.height > inimigo.y || (localStorage.getItem("morte") == "true")) {
                if (venceu == false) {
                    personagem.style = 'transform: rotate(-270deg)';
                    document.querySelector("body > div.modal").style.display = "flex";
                    morte = true;
                    localStorage.setItem("morte", morte);
                }

            }
        }
    }

    function colisaobitcoin() {

        for (let i = 0; i < bitcoin.length; i++) {
            moeda = bitcoin[i].getBoundingClientRect();


            if (perso.x < moeda.x + moeda.width &&
                perso.x + perso.width > moeda.x &&
                perso.y < moeda.y + moeda.height &&
                perso.y + perso.height > moeda.y) {
                moedas++;
                localStorage.setItem("moedas", moedas)
                bitcoin[i].style = "display: none"

                if (moedas == bitcoin.length) {
                    venceu = true;

                    setTimeout(function () {
                        document.querySelector("body > div.modalvenceu").style.display = "flex";
                        localStorage.setItem("morte", "true");
                    }, 500);
                }

            }
        }
    }

    setInterval(function () {
        box.css({
            left: function (i, v) { return newh(v, 37, 39); },
            top: function (i, v) { return newv(v, 38, 40); }
        });
    }, 20);
});