// Thao Tác Với DOM (DOM Manipulation)

// BT1: Chào Mừng Người Dùng
let userName = prompt("Nhập tên bạn vào đây");
let greeting = document.getElementById("greeting");
greeting.textContent = "Xin Chào " + userName;

// BT2: Bật/Tắt Đèn (Làm việc với Class)
let btn = document.getElementById("btn");

//  dùng querySelector để kh bị mắc lỗi elements
let element = document.querySelector(".light-bulb");

btn.addEventListener("click", () => {
	element.classList.toggle("on");
});

// BT3: Tạo Danh Sách Động
let arr = ["Học", "Ăn", "Ngủ"];
let myUl = document.querySelector("#my-ul");
for (var i = 0; i < arr.length; i++) {
	let newLi = document.createElement("LI");
	newLi.textContent = arr[i];
	myUl.appendChild(newLi);
}

// getElementById('id') -> Trả về 1 phần tử.
// querySelector('selector') -> Trả về 1 phần tử (phần tử đầu tiên khớp).
// getElementsByClassName('class') -> Trả về danh sách các phần tử.
// getElementsByTagName('tag') -> Trả về danh sách các phần tử.
// querySelectorAll('selector') -> Trả về danh sách các phần tử.
