$(function() {
    var inimigos = document.getElementsByClassName('inimigos');
    var pane = $('#pane'),
        box = $('#box'),
        personagem = document.querySelector("img"),
        wh = pane.width() - box.width(),
        wv = pane.height() - box.height(),
        d = {},
        x = 5;
        fim = 0;

    function newh(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);


        if(v.slice(0,4) == wh){
            localStorage.setItem('ganhou', 1);
        }


        if (d[a] == true) {
            personagem.style = 'transform: rotateX(360deg)';

        } else if (d[b] == true) {
            personagem.style = 'transform: scaleX(-1)';
        }
        return n < 0 ? 0 : n > wh ? wh : n;
    }

    function newv(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > wv ? wv : n;
    }



    $(window).keydown(function(e) { d[e.which] = true; });
    $(window).keyup(function(e) { d[e.which] = false; });

    setInterval(function() {
        box.css({
            left: function(i, v) { return newh(v, 37, 39); },
            top: function(i, v) { return newv(v, 38, 40); }
        });
    }, 20);
});