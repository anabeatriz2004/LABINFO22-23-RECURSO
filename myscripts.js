$(document).ready(function(){
    $("#quermesse").hide();

    if(estadoDeJogo=="inicio") {
        $("#ecraJogo").show();
    }
});

function jogar() {
    var random = Math.floor(Math.random() * 15) + 1;

    $("#num_sorteado").text(random);

    $("#ecraJogo").hide();
    $("#quermesse").show();
}