function CountDay() {
    let month = document.getElementById("month").value;
    switch (month) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "9":
        case "11":
            document.write('tháng này có 31 ngày');
            break;
        case "4":
        case "6":
        case "8":
        case "10":
        case "12":
            document.write('tháng này có 30 ngày ');
            break;
        case "2":
            document.write('tháng này có 28 hoặc 29 ngày');
    }

}