// Bài tập 1: TÍNH CHU VI VÀ DIỆN TÍCH CÁC HÌNH HỌC
// Lưu ý: Cẩn thận phép cộng với string

// Chu vi & Diện tích Hình vuông
let x = prompt("Nhập cạnh vuông vào đây");
console.log("Chu vi hình vuông là: " + x * 4);
console.log("Diện tích hình vuông là: " + (x ^ 2));

// Chu vi & Diện tích Hình chữ nhật
let y = prompt("Nhap chiều dài vao day");
let z = prompt("Nhap chiều rộng vao day");
console.log("Chu vi hình chữ nhật:", (y + z) * 2);
console.log("Diện tích hình chữ nhật:", y * z);

// Chu vi & Diện tích Hình tròn
let r = prompt("Nhap bán kính vao day");
let chuViTron = r * 2 * Math.PI;
let dienTichTron = r * r * Math.PI;
console.log(`Chu vi hình tròn: ${chuViTron.toFixed(2)}`);
console.log(`Diện tích hình tròn: ${dienTichTron.toFixed(2)}`);
// Math.PI: hàm toán học pi
// .toFixed(x): làm tròn còn x chữ số hàng đơn vị

// Chu vi & Diện tích Hình tam giác
let a = Number(prompt("Nhap canh tam giac 1"));
let b = Number(prompt("Nhap canh tam giac 2"));
let c = Number(prompt("Nhap canh tam giac 3"));
let h = Number(prompt("Nhap chieu cao tam giac"));
console.log("Chu vi tam giác là:", a + b + c);
console.log("Diện tích tam giác là:", (a * h) / 2);
// Number(prompt()): ép kiểu số vì hàm prompt là kiểu string, bị cộng chuỗi

// Bài tập 2: TÍNH ĐIỂM TRUNG BÌNH CUỐI NĂM HỌC
let HK1 = Number(prompt("Nhập điểm trung bình HK1"));
let HK2 = Number(prompt("Nhập điểm trung bình HK2"));
console.log("Điểm trung bình cuối năm học là", ((HK1 + HK2) / 2).toFixed(1));
// Phải ép kiểu Number cho prompt thì mới dùng được toFixed trực tiếp

// Bài tập 3: TÌM m,n KHI BIẾT TỔNG HIỆU
let tong = Number(prompt("Mời nhập tổng"));
let hieu = Number(prompt("Mời nhập hiệu"));
console.log("Ta có tong = m+n");
console.log("Ta có hieu = m-n");
console.log("Cộng 2 vế ta được 2m = tong + hieu");
// console.log(" Vậy m bằng:", (tong + hieu) / 2);
// console.log(" Vậy n bằng:", tong - (tong + hieu) / 2);
// hoặc
let m = (tong + hieu) / 2;
console.log(" Vậy m bằng:", m);
console.log(" Vậy n bằng:", tong - m);
