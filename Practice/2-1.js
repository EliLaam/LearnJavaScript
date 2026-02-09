// Bài tập 1: Tính BMI
// BMI<15: Thân hình quá gầy
// BMI>=15 and BMI<16: Thân hình gầy
// BMI>=16 and BMI<18.5: Thân hình hơi gầy
// BMI>=18.5 and BMI<25:Thân hình bình thường
// BMI>=25 and BMI < 30:Thân hình hơi béo
// BMI >=30 and BMI<35:Thân hình béo
// BMI >=35:Thân hình quá béo
// BMI=canNang/(chieuCao ^2)

let weight = Number(prompt("Nhập cân nặng vào đây(kg)"));
let height = Number(prompt("Nhập chiều cao vào đây(m)"));

let bmi = weight / (height ^ 2);

if (bmi < 15) {
	console.log(bmi);
	console.log("Thân hình quá gầy!!");
} else if (bmi >= 15 && bmi < 16) {
	console.log(bmi);
	console.log("Thân hình gầy!");
} else if (bmi >= 16 && bmi < 18.5) {
	console.log(bmi);
	console.log("Thân hình hơi gầy");
} else if (bmi >= 18.5 && bmi < 23) {
	console.log(bmi);
	console.log("Thân hình bình thường");
} else if (bmi >= 23 && bmi < 25) {
	console.log(bmi);
	console.log("Thân hình béo!");
} else {
	console.log(bmi);
	console.log("Thân hình quá béo!!");
}

// Bài tập 2: Kiểm Tra tháng đó có bao nhiêu ngày
// Nếu là tháng 1,3,5,7,8,10,12 thì có 31 ngày
// Nếu là tháng  4,6,9,11  thì có 30 ngày

// Nếu là tháng 2 thì kiểm tra xem phải năm nhuận kh
// ((nam %4 ===0) && (nam %100 !==0)) || ( nam %400 ===0)
// (chia hết cho 4, và không chia hết cho 100) hoặc ( chia hết cho 400)

// nếu năm nhuận thì tháng 2 có 29 ngày
// năm không  nhuận thì tháng 2 có 28 ngày

let month = Number(prompt("Nhập tháng vào đây!"));
if (
	month === 1 ||
	month === 3 ||
	month === 5 ||
	month === 7 ||
	month === 8 ||
	month === 10 ||
	month === 12
) {
	console.log("Tháng này có 31 ngày");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
	console.log("Tháng này có 30 ngày");
} else if (month === 2) {
	let year = prompt("Vui lòng nhập thêm năm!");
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		console.log("Tháng này có 29 ngày");
	} else {
		console.log("Tháng này có 28 ngày");
	}
} else {
	console.log("Nhập cái đéo gì đấy?!");
}

// Cách viết sai
// if (month === 1 || 3 || 5 || 7 || 8 || 10 || 12) { ... }
// máy sẽ ngầm định là
/*
	Vế đầu tiên: month === 1
- Giả sử bạn nhập month là 6.
- Phép so sánh 6 === 1 trả về false.
	Vế thứ hai: || 3
- Đây chính là mấu chốt của vấn đề. Bạn nghĩ rằng máy tính sẽ hiểu là "hoặc month === 3".
- Nhưng thực tế, máy tính chỉ thấy || 3. Nó sẽ thực hiện cơ chế "Truthy/Falsy" mà chúng ta đã nói đến.
- Nó kiểm tra giá trị 3. Số 3 có phải là 0, null, undefined, false, "", hay NaN không? -> Không.
- Vì vậy, số 3 được coi là một giá trị Truthy.
	Kết hợp lại: Câu lệnh if bây giờ trở thành if (false || true || true || true ...)
- Trong một chuỗi các phép toán || (HOẶC), chỉ cần một vế là true (hoặc Truthy), toàn bộ biểu thức sẽ ngay lập tức được coi là true.
- Vì 3 là Truthy, nên toàn bộ điều kiện if của bạn sẽ LUÔN LUÔN ĐÚNG, bất kể bạn nhập month là bao nhiêu (trừ khi bạn nhập một giá trị Falsy như 0). */
