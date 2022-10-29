btn.onclick = function(){
    var timer = inpu.value;
    ID = setInterval(function(){timer--; sec.innerHTML=timer%60;min.innerHTML=parseInt(timer/60);},1000)
}