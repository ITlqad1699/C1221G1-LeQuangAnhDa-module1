let inputphysic = prompt("enter physic") ;
let inputmath = prompt("enter math") ;
let inputchemistry = prompt("enter chemistry");
let a = parseInt(inputphysic);
let b = parseInt(inputmath);
let c = parseInt(inputchemistry);
let avr = (a+b+c)/3;
let inputdoC;
inputdoC = prompt("nhập vào độ C:  " );
celci = parseInt(inputdoC);
let fara = (celci*9)/5+32;
document.write(" điểm trung bình môn là:" +avr);
document.write('<br/>');
document.write("chuyển đổi độ C sang độ F: " +fara);
let inputR = prompt("nhập vào bán kính hình tròn");
let R = parseInt(inputR);
let S = 3.1415*R*R;
let D = 2*R*3.1415;
document.write("<br/>");
document.write("diện tích hình tròn là: "+S);
document.write("<br/>");
document.write("chu vi hình tròn là: " +D);


