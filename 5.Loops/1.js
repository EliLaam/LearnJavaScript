// =-=-=-=-= JavaScript While Loop =-=-=-=-=----
let i = 1;
while (i <= 5) {
	console.log(i);
	i++; //i = i+1;
}

// ví dụ
let n = prompt("Nhập vào số nguyên n (1-99):");
console.log(n);

while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
	n = Number(prompt("Số bạn nhập không hợp lệ, vui lòng nhập lại n (1-99)"));
}
alert("Bạn đã nhập số n: " + n);

// =-=-=-=-= JavaScript Do-While Loop =-=-=-=-=---
let a = 7;
do {
	console.log(a);
	a++;
} while (a <= 5);

// =-=-=-=-= While True =-=-=-=-=-----
// Tăng n lên cho đến khi n=10
let u = 0;
while (true) {
	u++;
	alert(u);
	if (u === 10) {
		break;
	}
}
