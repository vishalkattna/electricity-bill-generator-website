function validation() {
    var loginid = document.getElementById("i1").value;
    var password = document.getElementById("i2").value;
    atpos = loginid.indexOf("@");
    dotpos = loginid.lastIndexOf(".");
    len = loginid.length;
    if (loginid == "") {

        alert("ENTER LOGIN ID");
        document.getElementById("i1").focus();
        return false;
    }
    if (atpos < 1 || (dotpos - atpos) < 3 || (len - dotpos) < 2) {
        alert("Wrong Login ID");
        document.getElementById("i1").focus();
        return false;
    }
    if (password == "") {
        alert("Enter Password")
        document.getElementById("i2").focus();
        return false;
    }
    if (password.length < 8) {
        alert("Wrong Password")
        document.getElementById("i2").focus();
        return false;
    }
    alert("Login Successfully")
    document.getElementById("i3").style.display = 'none';
    document.getElementById("block").style.display = "block";
    return (true);
}


function hide1() {
    hideall();
    document.getElementById("d1").style.display = "block";

}

function hide2() {
    hideall();
    document.getElementById("d2").style.display = "block";

}

function hide3() {
    hideall();
    document.getElementById("d3").style.display = "block";
}

function hide4() {
    hideall();
    document.getElementById("d4").style.display = "block";
}

function hide5() {
    hideall();
    document.getElementById("d5").style.display = "block";
}

function hide6() {
    hideall();
    document.getElementById("d6").style.display = "block";
}

function hide7() {
    hideall();
    document.getElementById("d7").style.display = "block";
}

function hide8() {
    hideall();
    document.getElementById("d8").style.display = "block";
}

function hide9() {
    hideall();
    document.getElementById("d9").style.display = "block";
}

function hideall() {
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "none";
    document.getElementById("d3").style.display = "none";
    document.getElementById("d4").style.display = "none";
    document.getElementById("d5").style.display = "none";
    document.getElementById("d6").style.display = "none";
    document.getElementById("d7").style.display = "none";
    document.getElementById("d8").style.display = "none";
    document.getElementById("d9").style.display = "none";

}