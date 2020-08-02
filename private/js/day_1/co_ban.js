function reset() {
    var a = document.getElementById("varA").value;
    var b = document.getElementById("varB").value;
    var c = document.getElementById("varC").value;
    if (a != 0 && b != 0 && c != 0) {
        a == 0;
        b == 0;
        c == 0;
    }
}
function ptb2() {
    var a = document.getElementById("varA").value;
    var b = document.getElementById("varB").value;
    var c = document.getElementById("varC").value;
    if (a == 0) {
        if (b == 0) {
            if (c == 0)
                document.getElementById("ptb2").innerHTML = "Phương trình vô số nghiệm: ";
            else
                document.getElementById("ptb2").innerHTML = "Phương trình vô nghiệm";
        }
        else {
            document.getElementById("ptb2").innerHTML = "Phương trình có nghiệm" + -(c / b);
        }
    }
    else {
        const delta = b * b - 4 * a * c;
        if (delta > 0) {
            var x1 = (Math.sqrt(delta) + b) / (2 * a);
            var x2 = (b - Math.sqrt(delta)) / (2 * a);
            document.getElementById("ptb2").innerHTML = "Phương trình có hai nghiệm phân biệt </br> x1 = " + x1 + " x2 = " + x2;
        }
        else if (delta == 0) {
            document.getElementById("ptb2").innerHTML = "Phương trình có nghiệm kép: x1 = x2 = " + b / (2 * a);
        }
        else {
            document.getElementById("ptb2").innerHTML = "Phương trình vô nghiệm";
        }
    }
}
function getDate() {
    var a = document.getElementById("month").value;
    var b = document.getElementById("year").value;
    if (a <= 0 || a > 12 || b < 0) {
        document.getElementById("error").innerHTML = "Yêu cầu nhập lại tháng!";
    }
    
    else{
        document.getElementById("error").innerHTML = "";
        var luaChon = Number(a);
        switch(luaChon) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("date").innerHTML = "Tháng có 31 ngày.";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("date").innerHTML = "Tháng có 30 ngày.";
                break;
            default:
                if (b%4 == 0) {
                    document.getElementById("date").innerHTML = "Tháng có 29 ngày(năm nhuận).";
                    break;
                } else{
                    document.getElementById("date").innerHTML = "Tháng có 28 ngày.";
                    break;
                }
        }
    }
}
function test(i){
    var dem = 0;
    for(var j = 1; j <= i; j++){
        if(i % j == 0){
            dem++;
        }
    }
    if(dem == 2)
        return 1;
    return 0;
}
function printPrime(){
    var a = document.getElementById("numberN").value
    var b = parseInt(a);
    var p = [];
    if(b < 0){
        document.getElementById("errornum").innerHTML = "Vui lòng nhập lại! ";
    }else{
        document.getElementById("errornum").innerHTML = "";
        for(var i = 1; i <= b; i++){
            if(test(i) == 1){
                p.push(i);
            }
        }
    }
    document.getElementById("output").innerHTML = p;
}
//document.getElementById("output").innerHTML = document.write(" " + i);