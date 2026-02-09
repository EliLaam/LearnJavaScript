// In bảng cửu chương 7

for (let i = 0; i <= 10; i++) {
	console.log("7x" + i + "=" + 7 * i);
}

// Tinh tong cac so chan tu 1-20
let sum = 0;

for (let i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}

console.log(sum);

// Tính tổng các số chẵn từ 1 - ?
let num = Number(prompt("Nhập số a"));
// Kiểm tra a có phải số nguyên kh
while (!Number.isInteger(num)) {
	//  không phải là số nguyên (! phủ định)
	num = Number(prompt(" Nhập lại a, a phải là số nguyên"));
}

let even = 0;
let odd = 0;
for (let i = 0; i <= num; i++) {
	if (i % 2 === 0) {
		even += i;
	} else {
		odd += i;
	}
}
console.log("Tổng các số chẵn là", even);
console.log("Tổng các số lẻ là", odd);
