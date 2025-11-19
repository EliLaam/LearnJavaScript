// 1. Tạo phần tử mới: createElement
// Syntax: document.createElement('element')
// element: tên thẻ cần tạo
const newText = document.createElement("p");

//kiểm tra toàn bộ thuộc tính và phương thức newText
console.dir(newText); //==> null hết

// Thay đổi nội dung
newText.textContent = "Xin chào, em đang học JS";

// 2. Thêm phần tử: append, prepend
// Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha

//   append: Thêm vào cuối pt mẹ
// a. Thêm vào cuối phần tử cha (trong trường hợp này là body)
document.body.append(newText);

// b. Thêm vào 1 phần tử khác
const p = document.querySelector(".container");
p.append("xin chào");

// c. Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới
let elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn văn mới thêm";

let elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

// Lấy phần tử cha
let container = document.querySelector(".container");

// Thêm nhiều phần tử mới vào cuối phần tử cha
container.append(elm1, elm2, "Some more text");

// prepend: Thêm vào đầu pt mẹ
container.prepend("Hi ! ");

console.log(container.prepend("Hi ! "));
