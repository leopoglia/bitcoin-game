$(function () {
    var inimigos = document.getElementsByClassName('inimigos'), 
    pane = $('#pane'),
    box = $('#box'),
    personagem = document.querySelector("img"),
    wh = pane.width() - box.width(),
    wv = pane.height() - box.height(),
    d = {},
    x = 5;
    morte = false;

    function newh(v, a, b) {
        colisao();
        if (morte == false) {
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
        if (morte == false) {
            var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
            return n < 0 ? 0 : n > wv ? wv : n;
        }
    }

    function colisao() {
        for (let i = 0; i < inimigos.length; i++) {
            inimigo = inimigos[i].getBoundingClientRect();
            perso = personagem.getBoundingClientRect();

            if (perso.x < inimigo.x + inimigo.width &&
                perso.x + perso.width > inimigo.x &&
                perso.y < inimigo.y + inimigo.height &&
                perso.y + perso.height > inimigo.y) {
                document.querySelector("body");
                personagem.style = 'transform: rotate(-270deg)';
                document.querySelector("body > div.modal").style.display = "flex";
                morte = true;
            }
        }
    }

    $(window).keydown(function (e) {
        d[e.which] = true;
    });
    $(window).keyup(function (e) {
        if (morte == false) {
            d[e.which] = false;
        }
    });

    setInterval(function () {
        box.css({
            left: function (i, v) { return newh(v, 37, 39); },
            top: function (i, v) { return newv(v, 38, 40); }
        });
    }, 20);
});