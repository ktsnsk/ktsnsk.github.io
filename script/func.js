$(window).scroll(function(){
    var scrolled = $(this).scrollTop();
    if( scrolled >= 107 ) {
        $('#scroll-head').css("display", "block");
        $('#scroll-head').css("opacity", "1");
    }
    if( scrolled <= 107 ) {
        $('#scroll-head').css("opacity", "0");
        $('#scroll-head').css("display", "none");
    }
});


$("#call-menu").children('div:first').css("left", "calc(50% - " + ($("#call-menu").children('div:first').width() / 2 + 30) + "px)");
$("#call-menu").children('div:first').css("top", "200px");
$("#call-menu").css("display", "none");
$("#call-menu").mouseup(function (e){ // событие клика по веб-документу
    var div = $("#call-menu div:first"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $("#call-menu").css("display", "none");
    }

});

let f = $('.form');
for (let i = 0; i < f.length; i++){
    $(f[i]).bind("click", function () {
        $("#call-menu").css("display", "block");
    });
}


var btns = $(".rbtn");
for (var i = 0; i < btns.length; i++) {
    $(btns[i]).bind("click", function () {
        for (var j = 0; j < btns.length; j++) {
            $(btns[j]).addClass("btn-nactive");
        }
        $(this).removeClass("btn-nactive");
        let x = $(this).index();
        switch (x) {
            case 0:
                $("#ex-1").css("display","grid");
                $("#ex-2").css("display","none");
                $("#ex-3").css("display","none");
                break;
            case 1:
                $("#ex-1").css("display","none");
                $("#ex-2").css("display","grid");
                $("#ex-3").css("display","none");
                break;
            case 2:
                $("#ex-1").css("display","none");
                $("#ex-2").css("display","none");
                $("#ex-3").css("display","grid");
                break;
        }
    });
}

function calc() {
    $("#ttype").text($('#ctype').val());
    $("#tgro").text($('#clength').val() * $('#cwidth').val());
    $("#tarea").text($('#clength').val() * $('#cwidth').val());

    switch ($('#ctype').val()) {
        case "Поликарбонат":
            $("#tsum").text(2600 * $('#clength').val() * $('#cwidth').val());
            $("#tnsum").text(2600 * $('#clength').val() * $('#cwidth').val() * 0.9);
            break;
        case "Черепица":
            $("#tsum").text(2600 * $('#clength').val() * $('#cwidth').val());
            $("#tnsum").text(2600 * $('#clength').val() * $('#cwidth').val() * 0.9);
            break;
        case "Мягкая кровля":
            $("#tsum").text(2700 * $('#clength').val() * $('#cwidth').val());
            $("#tnsum").text(2700 * $('#clength').val() * $('#cwidth').val() * 0.9);
            break;
        case "Металлочерепица":
            $("#tsum").text(2800 * $('#clength').val() * $('#cwidth').val());
            $("#tnsum").text(2800 * $('#clength').val() * $('#cwidth').val() * 0.9);
            break;
    }
}

function fcalc() {
    $("#ftlength").text($('#flength').val());
    $("#ftwidth").text($('#fwidth').val());
    $("#ftplace").text($('#flength').val() * $('#fwidth').val());
    $("#ftsum").text($('#flength').val() * $('#fwidth').val() * 1600);
    $("#ftnsum").text($('#flength').val() * $('#fwidth').val() * 1600 * 0.9);



}
