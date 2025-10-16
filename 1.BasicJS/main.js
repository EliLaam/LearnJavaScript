// Cách Cmt: Ctrl + /
// Lưu ý: Phải có dấu ";" cuối mỗi dòng lệnh
// Phải dùng " " cho văn bản
// Kiểm tra Js bằng cách F12 trình duyệt, chuyển sang phần Console

// ==-==-==-==-==-==-==-==-==-==
/* Hàm console.log();  
    Là một hàm dùng để xuất thông tin ra màn hình điều khiển (console) của trình duyệt 
    Không hiển thị trên màn hình người dùng
    Sử dụng để hiển thị thông tin debug, giúp phát hiện và sửa lỗi trong mã nguồn    */
console.log("Đây là hàm console.log");

// ==-==-==-==-==-==-==-==-==-==
/* Hàm alert();
    Là một hàm được sử dụng để hiển thị một thông báo dạng Popup trên trình duyệt của người dùng */
alert("Đây là hàm alert dùng để thông báo dạng popup");

// ==-==-==-==-==-==-==-==-==-==
/* Hàm prompt();
    Được sử dụng để hiển thị hộp thoại nhập liệu trên trình duyệt và chờ người dùng nhập một giá trị */
prompt("Hãy nhập tên vào đây");
// Lưu ý: Dữ liệu mà bạn nhập vào sẽ biến mất, không lưu trữ vào bộ nhớ. Vì vậy chúng ta cần phải có Biến để lưu dữ liệu ng dùng đã nhập

// ==-==-==-==-==-==-==-==-==-==
/* Biến (Variables): var tên-biến [=giá-trị]
    Biến là một ô nhớ trong bộ nhớ được đặt tên và sử dụng để lưu trữ giá trị
    let: Khai báo biến có thể thay đổi giá trị.
    const: Khai báo hằng số, không thể thay đổi giá trị (nên ưu tiên dùng const khi có thể).
    var: được ra trước let (nhưng hạn chế dùng trong code hiện đại).    */

// Khai báo biến
var yourName;
let userName;
// const hangSo;
// Lưu ý: Vì const là hằng số nên phải khởi tạo biến, khai báo sẽ gây lỗi

// Khởi tạo biến (có thêm giá trị)
var diemToan = 8;
let firstName = "Eli";
const diemSo = 10;

// Xuất giá trị của biến
console.log(diemToan);
console.log(diemSo);
console.log("Tên của bạn là " + firstName);
console.log("Điểm toán của bạn là: " + diemSo + " điểm");

// Thử thay đổi giá trị của biến
diemToan = 5;
console.log("điểm toán đã thay đổi: " + diemToan + " điểm");
firstName = "Lam";
console.log(firstName);

// Thử gán lại biến hằng số
// diemSo = 8;
// console.log(diemSo);
// Kiểm tra trình duyệt bạn sẽ thấy báo lỗi, vì const là hằng số kh đổi
// => Nên tạo biến hằng số khác

/* Quy tắc đặt tên biến 
    Tên có thể bắt đầu bằng chữ cái, dấu gạch dưới _ hoặc dấu $
    JS không phân biệt chữ hoa và chữ thường, nên Name và name khác nhau 
    Không trùng với các từ khóa của JS: Tránh sử dụng các từ có sẵn của JS như var, let, const....
    Tuân theo quy ước đặt tên biến theo kiểu camelCase:
    Chữ cái đầu của từ thứ 2 trở đi viết Hoa, còn lại viết thường  */
// Ví dụ :
var Name = "Park";
var name = "Park";
let _name = "Park";
let $name = "Park";
let namSinh = 1990;
const diemTrungBinh = 9.5;

// Những trường hợp sau đây là sai :
// let !name;
// let 1name;
// let let;
// let var;

// ==-==-==-==-==-==-==-==-==-==
/* Các Kiểu Dữ Liệu Cơ Bản (Primitive Types):
String (Chuỗi ký tự): "Hello World"
Number (Số, bao gồm số nguyên và số thực): 10, 3.14
Boolean (Luận lý): true hoặc false
Undefined (Biến chưa được gán giá trị): UndefinedVariable
Null (Thường dùng để reset biến, gán giá trị mặc định): null  */
// Kiểu chuỗi
let loiChao = "Xin chào";

// Kiểu Number
let soNguyen = 2;
let soThuc = 2.5;

// Kiểu Boolean
let cau1 = true;
let cau2 = false;

// Kiểu Undefined
let ketQua;

// Kiểu Null
let connect = null;

// Xuất giá trị của biến
console.log(loiChao);
console.log(typeof loiChao);
console.log(soNguyen);
console.log(typeof soNguyen);
console.log(soThuc);
console.log(typeof soThuc);
console.log(cau1);
console.log(typeof cau1);
console.log(cau2);
console.log(typeof cau2);
console.log(typeof ketQua);
console.log(typeof connect);

// Số nguyên an toàn tối đa, tối thiểu
console.log("Số nguyên an toàn tối đa " + Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối thiểu " + Number.MIN_SAFE_INTEGER);

// ==-==-==-==-==-==-==-==-==-==
// Các cách xuất dữ liệu với biến
let soA = 25;
let soB = 5;

// Cách 1: Dễ sai vì phải nhập khoảng cách (+)
console.log("Căn bậc hai của " + soA + " là " + soB);

// Cách 2: Dễ sử dụng vì không cần nhập khoảng cách (,)
console.log("Căn bậc hai của", soA, "là", soB);

// Cách 3: Biến sẽ được truyền vào ${}. Dấu nằm dưới nút Esc
console.log(`Căn bậc hai của ${soA} là ${soB}`);

// Cách 4: soA sẽ thế vào %s thứ nhất, soB sẽ được thế vào %s thứ hai
console.log(`Căn bậc hai của %s là %s`, soA, soB);

// Luyện tập
let a = 10,
	b = 5,
	c = a + b;

// Cách 1:
console.log("Tổng " + a + " với " + b + " là " + c);

// Cách 2:
console.log("Tổng ", a, " với ", b, " là ", c);

// Cách 3:
console.log("Tổng ${a} với ${b} là ${c}");

// Cách 4:
console.log("Tổng $s với $s là $c ", a, b, c);
