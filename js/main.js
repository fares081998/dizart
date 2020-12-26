var text = ["Developement des apps mobile", " Developement Des Sites Web", "UI / UX Design","Graphique Design"];
var counter = 0;
var elem = $(".data_toggle");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}