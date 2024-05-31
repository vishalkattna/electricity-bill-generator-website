function check() {

    if (document.getElementById("at").value == -1) {
        document.getElementById("at").focus();
        document.getElementById("at").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("in").value == -1) {
        document.getElementById("in").focus();
        border();
        document.getElementById("in").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("in1").value == "") {
        document.getElementById("in1").focus();
        border();
        document.getElementById("in1").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("name").value == "") {
        document.getElementById("name").focus();
        border();
        document.getElementById("name").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("fname").value == "") {
        document.getElementById("fname").focus();
        border();
        document.getElementById("fname").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("id1").value == "") {
        document.getElementById("id1").focus();
        border();
        document.getElementById("id1").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("hno").value == "") {
        document.getElementById("hno").focus();
        border();
        document.getElementById("hno").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("al").value == "") {
        document.getElementById("al").focus();
        border();
        document.getElementById("al").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("Landmark").value == "") {
        document.getElementById("Landmark").focus();
        border();
        document.getElementById("Landmark").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("city").value == "") {
        document.getElementById("city").focus();
        border();
        document.getElementById("city").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("pincode").value == "") {
        document.getElementById("pincode").focus();
        border();
        document.getElementById("pincode").style.border = "3px solid red";
        return false;
    } else if (isNaN(document.getElementById("pincode").value)) {
        document.getElementById("pincode").focus();
        border();
        document.getElementById("pincode").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("pid").value == "") {
        document.getElementById("pid").focus();
        border();
        document.getElementById("pid").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("email1").value == "") {
        document.getElementById("email1").focus();
        border();
        document.getElementById("email1").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("fno").value == "") {
        document.getElementById("fno").focus();
        border();
        document.getElementById("fno").style.border = "3px solid red";
        return false;
    } else if (isNaN(document.getElementById("fno").value)) {
        document.getElementById("fno").focus();
        border();
        document.getElementById("fno").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("aadhar").value == "") {
        document.getElementById("aadhar").focus();
        border();
        document.getElementById("aadhar").style.border = "3px solid red";
        return false;
    } else if (isNaN(document.getElementById("aadhar").value)) {
        document.getElementById("aadhar").focus();
        border();
        document.getElementById("aadhar").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("aadhar").value.length != 12) {
        document.getElementById("aadhar").focus();
        border();
        document.getElementById("aadhar").style.border = "3px solid red";
        return false;
    } else if ((document.getElementById("ca").checked == true) && (document.getElementById("ca1").value != "")) {
        alert(" Provide one Correspondence Address ")
        border();
        return false;
    } else if (document.getElementById("ca").checked == false && document.getElementById("ca1").value == "") {
        alert(" Provide one Correspondence Address ")
        border();
        return false;
    } else if (document.getElementById("cl").value == "") {
        document.getElementById("cl").focus();
        border();
        document.getElementById("cl").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("cd").value == "") {
        document.getElementById("cd").focus();
        border();
        document.getElementById("cd").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("purpose").value == "") {
        document.getElementById("purpose").focus();
        border();
        document.getElementById("purpose").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("account").value == "") {
        document.getElementById("account").focus();
        border();
        document.getElementById("account").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("accountno").value == "") {
        document.getElementById("accountno").focus();
        border();
        document.getElementById("accountno").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("address").value == "") {
        document.getElementById("address").focus();
        border();
        document.getElementById("address").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("category").value == "") {
        document.getElementById("category").focus();
        border();
        document.getElementById("category").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("conload").value == "") {
        document.getElementById("conload").focus();
        border();
        document.getElementById("conload").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("contract").value == "") {
        document.getElementById("contract").focus();
        border();
        document.getElementById("contract").style.border = "3px solid red";
        return false;
    } else if (document.getElementById("t&c").checked == false) {
        document.getElementById("t&c").focus();
        border();
        document.getElementById("t&c").style.border = "3px solid red";
        return false;
    } else {
        open("home.html", "_self");
        alert("form Submitted successflly");
        return true;
    }


}

function border() {
    document.getElementById("at").style.border = "none";
    document.getElementById("in").style.border = "none";
    document.getElementById("in1").style.border = "none";
    document.getElementById("name").style.border = "none";
    document.getElementById("fname").style.border = "none";
    document.getElementById("id1").style.border = "none";
    document.getElementById("hno").style.border = "none";
    document.getElementById("al").style.border = "none";
    document.getElementById("Landmark").style.border = "none";
    document.getElementById("city").style.border = "none";
    document.getElementById("pincode").style.border = "none";
    document.getElementById("pid").style.border = "none";
    document.getElementById("email1").style.border = "none";
    document.getElementById("fno").style.border = "none";
    document.getElementById("aadhar").style.border = "none";
    document.getElementById("cl").style.border = "none";
    document.getElementById("cd").style.border = "none";
    document.getElementById("purpose").style.border = "none";
    document.getElementById("account").style.border = "none";
    document.getElementById("accountno").style.border = "none";
    document.getElementById("address").style.border = "none";
    document.getElementById("category").style.border = "none";
    document.getElementById("conload").style.border = "none";
    document.getElementById("contract").style.border = "none";
}