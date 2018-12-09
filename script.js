'use strict';
var preload = document.getElementById('preloader');
var preloadiamges = document.getElementById('images');
window.addEventListener('load', function() {
    setTimeout(function(){
        preload.style.display = 'none';
        preloadiamges.style.display = 'block';
    },600);
})
var script = document.createElement('SCRIPT');//Получаем доступ по API
script.src = "https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
    //console.log(result.response.items);
    var newObject = result;
    var pc = document.getElementById("images");
    var j = newObject.response.items;
    for (var i = 0; i < j.length; i++) {
        var pic = document.createElement("IMG");
        pic.src = newObject.response.items[i].sizes[8].url;
        pc.appendChild(pic);
    }

    var pc = document.getElementById("carousel");
    var j = newObject.response.items;
    for (i = 0; i < j.length; i++) {
        var pic = document.createElement("IMG");
        pic.src = newObject.response.items[i].sizes[8].url;
        pc.appendChild(pic);
        document.getElementById("sliderfoto").src = pic.src;
    }
}

var indexFoto = document.getElementById('images');
indexFoto.addEventListener("click", function (e) {
    document.getElementById("sliderfoto").src = e.target.src;
    var contentSlider = document.getElementById('slider');
    contentSlider.style.display = "block";
    var target = e.target || e.srcElement;
    for (var i = 0; i < indexFoto.children.length; i++) {
        if(indexFoto.children[i] == target) {
            x = i;
            break;
        };
    };
    caruselFoto.e.target.setAttribute('class','click');

});

var caruselFoto = document.getElementById('carousel');
caruselFoto.addEventListener("click", function (e) {
    document.getElementById("sliderfoto").src = e.target.src;
    var divs = document.querySelectorAll("#carousel img");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains("click")) {
            divs[i].setAttribute('class','');
        }
    }
    e.target.setAttribute('class','click');
        var target = e.target || e.srcElement;
        for (var i = 0; i < caruselFoto.children.length; i++) {
            if(caruselFoto.children[i] == target) {
                x = i;
                break;
            };
        };
});

var close = document.getElementsByClassName("close")[0];
close.onclick = function () {
    contentSlider.style.display = "none";
}

var contentSlider = document.getElementById("slider");
window.onclick = function (event) {
    if (event.target == contentSlider){
        contentSlider.style.display = "none";
    }
}

var x=0;
var prev = document.getElementById('prev');
prev.onclick = function () {
    var carouselImg = document.querySelectorAll('#carousel img');
    var sliderfoto = document.getElementById("sliderfoto");
    carouselImg[x].setAttribute('class','');
    x--;

    if (x < 0){
        x=carouselImg.length-1;
    }
    sliderfoto.src = carouselImg[x].src;
    carouselImg[x].setAttribute('class','click');
    document.getElementById('carousel').scrollLeft -= 75;
}

var next = document.getElementById('next');
next.onclick = function () {
    var carouselImg = document.querySelectorAll('#carousel img');
    var sliderfoto = document.getElementById("sliderfoto");
    carouselImg[x].setAttribute('class','');
    x++;
    if (x >= carouselImg.length){
        x=0;
    }
    sliderfoto.src = carouselImg[x].src;
    carouselImg[x].setAttribute('class','click');
    document.getElementById('carousel').scrollLeft += 75;
}