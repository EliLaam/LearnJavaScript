// IV. Thay đổi Style
// 1. element.style
//Chọn phần tử h1
let heading = document.querySelector("h1");
// Thay đổi style của h1 trên giao diện
// heading.style.backgroundColor = "cyan";
// heading.style.fontSize = "46px";
// heading.style.color = "red";

// Cách viết gọn nhiều thuộc tính
Object.assign(heading.style, {
	backgroundColor: "cyan",
	fontSize: "46px",
	color: "red",
});

// Phương thức tĩnh Object.assign(target, source1, source2, /* …, */ sourceN) sao chép tất cả các thuộc tính riêng có thể liệt kê từ một hoặc nhiều đối tượng nguồn sang một đối tượng đích. Nó trả về mục tiêu đã sửa đổi đối tượng.

// 2. element.classList
/*
classList.add() thêm một lớp mới vào phần tử.
classList.remove() xoá một lớp khỏi phần tử.
classList.toggle() loại bỏ một lớp nếu nó đã tồn tại và thêm nó nếu chưa có.
classList.replace() thay thế một lớp cũ bằng một lớp mới.
classList.contains() kiểm tra xem phần tử có chứa một lớp cụ thể không.
*/

// Lấy phần tử cần tương tác
let element = document.getElementById("myElement");

// a. Thêm một lớp mới vào phần tử
element.classList.add("newClass");

// b. Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("myClass"));

// c. Xoá một lớp khỏi phần tử
element.classList.remove("myClass");
//Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("myClass"));

// d. Thay thế một lớp cũ bằng một lớp mới
element.classList.replace("newClass", "abc");

// e.Nếu lớp đã tồn tại, loại bỏ nó, nếu không, thêm lớp vào phần tử
element.classList.toggle("toggleClass");

// f. Xem các class trong phần tử
console.log(element.classList);
