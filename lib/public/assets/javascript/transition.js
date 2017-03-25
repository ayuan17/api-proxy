var marginY = 0;
var destination = 0;
var speed = 12;
var toTopSpeed= 15;
var scroller = null;

function initScroll(elementId){
    destination = document.getElementById(elementId).offsetTop;
    //console.log(destination);
    scroller = setTimeout(function(){
        initScroll(elementId);

    }, 1);

    marginY = marginY + speed;

    if (marginY >= destination){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);

}

function toTop(){

    scroller = setTimeout(function(){
        toTop();

    }, 1);

    marginY = marginY - toTopSpeed;

    if (marginY <= 0){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);


}