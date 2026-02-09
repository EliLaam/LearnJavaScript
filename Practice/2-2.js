// Bài tập 3: Kiểm tra quyền truy cập
//  Chỉ những người dùng đã đăng nhập VÀ có vai trò là "admin" mới được in ra "Chào mừng admin!".
//  Các trường hợp còn lại, in ra "Bạn không có quyền truy cập."

let isLoginIn = true; // đã đăng nhập
let userRole = prompt("Nhập vai trò của bạn: admin, manage, user,...");

if (userRole === "admin" && isLoginIn) {
	console.log("Chào mừng admin!");
} else {
	console.log("Bạn không có quyền truy cập");
}

// Bài tập 4: Giải pt bậc 2
// Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c =0
// delta = b ** 2 - 4 * a * c;

let a = Number(prompt("Nhập số đi chung với x^2 "));
let b = Number(prompt("Nhập số đi chung với x "));
let c = Number(prompt("Nhập số còn lại "));
let delta = b ** 2 - 4 * a * c;

if (delta > 0) {
	console.log("Phương trình có 2 nghiệm pb");
	let x1 = (-b + Math.sqrt(delta)) / (2 * a);
	console.log("x1 có nghiệm là:", x1);
	let x2 = (-b - Math.sqrt(delta)) / (2 * a);
	console.log("x2 có nghiệm là:", x2);
} else if (delta === 0) {
	console.log("Phương trình có nghiệm kép");
	let x = -b / (2 * a);
	console.log("x có nghiệm là:", x);
} else {
	console.log("Phương trình vô nghiệm");
}
