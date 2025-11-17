// Event - DOM Level 0 Event Handling
/*
DOM Level 0 Event Handling:  
Là phương pháp bắt sự kiện bằng cách gán trực tiếp một
HÀM JavaScript cho thuộc tính sự kiện của phần tử HTML   (on...)
*/

// Xác định phần tử có id là btn
const button1 = document.getElementById("btn");

// Cach 1. Gán sự kiện click cho btn, sử dụng function expression
// button1.onclick = function () {
//   alert("Bạn đã click vào button");
// };

// Cach 2. Dùng function declaration khai báo hàm, sau đó gán hàm đó cho sự kiện click
// function clickHandler() {
//   alert("Bạn đã click vào button");
// }

// button1.onclick = clickHandler;

// Cach 3. Dùng arrow function (nên dùng)
button1.onclick = () => {
	alert("Bạn đã click vào button");
};

// Sử dụng nhiều function:
function mouseOver() {
	document.getElementById("message").textContent = "Mouse is over the button";
}

function mouseOut() {
	document.getElementById("message").textContent = "Mouse left the button";
}

function setup() {
	var button = document.getElementById("btn2");
	button.onmouseover = mouseOver;
	button.onmouseout = mouseOut;
}

// setup();

/* Sự kiện onload của đối tượng window được kích hoạt khi toàn bộ
trang web đã tải xong, bao gồm tất cả các tài nguyên như hình ảnh,
script, và stylesheet. */
window.onload = setup;
