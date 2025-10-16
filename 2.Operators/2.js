// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Toán tử gán
// Toán Tử Gán (=) Dùng để gán giá trị cho biến.
let x = 10; // Biến x được gán giá trị 10
let y = 5; // Biến y được gán giá trị 5
let z = x + y; // Biến z được gán giá trị là tổng của x và y
console.log(x);
console.log(y);
console.log(z);

// Gán +=, -= , *=, /= , %=
console.log("Kết quả gán +=, -= , *=, /= , %=");
let m = 10;
m += 5; // Tương đương với m = m + 5;
console.log(m);

let n = 8;
n -= 3; // Tương đương với n = n - 3;
console.log(n);

let p = 6;
p *= 2; // Tương đương với p = p * 2;
console.log(p);

let q = 9;
q /= 3; // Tương đương với q = q / 3;
console.log(q);

let r = 4;
r %= 3; // Tương đương với r = r % 3;
console.log(r);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Toán Tử Tăng/Giảm: Toán tử tiền tố hậu tố (++, --)
// ++: +1 | --: -1
// 1. Dùng để tăng hoặc giảm giá trị của biến một đơn vị.
let e = 99;
let f = 10;
let g = 77;
let h = 88;
e++; // tương đương với e = e + 1; --> 100
f--; // tương đương với f = f - 1; --> 9
++g; // tương đương vớg g = g + 1; --> 78
--h; // tương đương với h = h - 1; --> 87
console.log(e);
console.log(f);
console.log(g);
console.log(h);
// Phép tính đơn lẻ viết --, ++ trước hay sau biến đều được

// 2. Trường hợp biểu thức phức tạp nên tuân theo quy tắc
/*  a++, a-- (viết phía sau biến) => Postfix
++a, --a (viết trước biến) => Prefix 
Ưu tiên:
1.Prefix
2. Các phép toán còn lại
3. Gán giá trị cho biến ở bên trái dấu bằng
4. Postfix            */
let o = 1;
let s = 2;
let t = o++ - ++s + 1; // ++s => s=3 ; o=1, s=3 => 1-3+1=-1 ; t=-1 ; o++ => o=2
console.log(o); // 2
console.log(s); // 3
console.log(t); //-1
