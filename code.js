$(document).ready(function () {
    var summa = 0;
    var articles = 0;
    $(".fa-minus-circle").click(function () {
        var price = parseFloat($(this).parent().parent().find(".price").text());
        var cur_amount = parseInt($(this).parent().find("input").val());
        if (cur_amount != 0) {
            cur_amount--;
            articles--;
            $(this).parent().find("input").val(cur_amount);
            summa = summa - price;
            if (summa < 20) {
                $("#kauf_btn").removeClass("jetzt");
                $("#kauf_btn").addClass("initial").animate();
                $("#status").text("");
            }
        }
        $("#sum").text(Math.abs(summa.toFixed(2)).toString() + '\u20AC');
        $("#art").text("Warenkorb (" + articles + " Artikel)");
    });
    $(".fa-plus-circle").click(function () {
        var price = parseFloat($(this).parent().parent().find(".price").text());
        var cur_amount = parseInt($(this).parent().find("input").val());
        cur_amount++;
        articles++;
        $(this).parent().find("input").val(cur_amount);
        summa = summa + price;
        if (summa >= 20) {
            $("#kauf_btn").removeClass("initial");
            $("#kauf_btn").animate().addClass("jetzt");
            $("#status").text("Jetzt können Sie den Einkauf machen");
        }
        $("#sum").text(Math.abs(summa.toFixed(2)).toString() + '\u20AC');
        $("#art").text("Warenkorb (" + articles + " Artikel)");
    });
    $("#kauf_btn").click(function () {
        if (summa < 20) {
            $("#status").text("Es ist weniger als 20 Euro. Einkauf ist nicht möglich!");
        } else {
            $("#status").animate().text("Ausgewählte Artikel wurden gekauft!");
        }
    });

});