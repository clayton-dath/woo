// JavaScript source code
$("#window").click(function (e) {
    var topy = e.pageY - 50;
    var topx = e.pageX - 50;

    const animations = ['flyin', 'slide-left', 'slide-right', 'slide-up', 'slide-down', 'grow', 'w3-animate-opacity', 'w3-animate-zoom'];
    const random = Math.floor(Math.random() * animations.length);
    var animation_picked = animations[random];

    const spins = ['no-spin', 'no-spin', 'spin-left', 'spin-right', 'shake', 'w3-spin', 'stretch'];
    const random3 = Math.floor(Math.random() * spins.length);
    var spin_picked = spins[random3];

    var size = Math.floor(Math.random() * 250) + 50;

    var append_image = "<img class='woo_man " + spin_picked + " " + animation_picked + "' src='woo_man.PNG' style='top:" + topy + "px; left:" + topx + "px; height:" + size + "px'>";
    var element = $('#window').append(append_image);

    const woos = ['woo1.m4a', 'woo2.m4a', 'woo3.m4a', 'woo4.m4a', 'woo5.m4a', 'woo6.m4a', 'woo7.m4a', 'woo8.m4a'];
    const random1 = Math.floor(Math.random() * animations.length);

    var woo = woos[random1];

    var audio = new Audio(woo);
    audio.play();
});
