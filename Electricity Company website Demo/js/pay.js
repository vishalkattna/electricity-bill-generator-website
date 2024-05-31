function validation() {
    var acc = document.getElementById("accountno");
    var mob = document.getElementById("mobile");
    var ema = document.getElementById("email");
    var amo = document.getElementById("amount");
    if (acc.value == "") {
        acc.focus();
        return false;
    } else if (mob.value == "") {
        mob.focus();
        return false;
    } else if (ema.value == "") {
        ema.focus();
        return false;
    } else if (amo.value == "") {
        amo.focus();
        return false;
    } else {
        open("home.html", "_self");
    }
}