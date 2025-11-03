// I. Khai báo đối tượng - literal syntax {}
let student = {
	//key + value
	//THUỘC TÍNH (đặc điểm của đối tượng)
	firstName: "Eli",
	lastName: "Lam",
	address: {
		city: "Ho Chi Minh",
		country: "Việt Nam",
	},
	scores: [8, 9, 10],

	//PHƯƠNG THỨC
	getAge: function () {
		return 2024 - this.birthYear;
	},

	// Phương thức được viết lại, để trả về 1 thuộc tính
	getAge2: function () {
		this.age = 2024 - this.birthYear;
		return this.age; //age là thuộc tính mới
	},

	diemTrungBinh: function () {
		// Tính tổng điểm
		sumScores = this.scores.reduce((a, b) => a + b, 0);
		// Trả về dtb
		return sumScores / 3;
	},
};

// Tên đối tượng và value được phép vi phạm quy tắc đặt tên nhưng cần đặt trong ""
let teacher = {
	"1 fullName": "Jacob",
	"@address": {
		city: "Hanoi",
		country: "VietNam",
	},
};

// II. Truy Cập Thuộc Tính : Dot Notation . và Bracket Notation []
// Sử dụng dot (.) - Dot Notation - key.value
console.log(student.fullName);
console.log(student.address);
console.log(student.scores);

// Sử dụng [] - Bracket Notation - Truyền vào giá trị của key - key["value"]
// Bracket Notation dùng khi key đặc biệt - có khoảng trắng, vi phạm quy tắc đặt tên biến....
console.log(teacher["1 fullName"]);
console.log(student["address"]);

// Linh động sử dụng [] với biến
let inputKey = prompt("Mời nhập key: (address,scores )");
console.log("Truy xuất đến key dùng với tên biến inputKey: ");
console.log(student[inputKey]);

// Nếu truy xuất đến 1 key không tồn tại sẽ trả về undefined
// console.log(student.job);  --> undefined

// Ví dụ : Kiểm tra xem nếu nhập key không tồn tại thì báo lỗi
// Xem bài Truthy and Falsy Values
console.log(student[inputKey]); // nhập Job
console.log(Boolean(student[inputKey])); // --> False

if (student[inputKey]) {
	console.log(student[inputKey]); // Nếu đk đúng
} else {
	console.log("Key bạn nhập không tồn tại"); //Nếu đk sai
}

// III. Truy Cập Phương Thức - key.function
console.log(student.getAge());
console.log(student.diemTrungBinh());

/*
Vấn đề : (Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge 
--> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
*/
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());

// Gọi phương thức getAge2
student.getAge2();

// Xuất thử tuổi thông qua thuộc tính age mới được thêm từ phương thức getAge2
console.log(student.age);

// IV. Thêm, sửa, xóa thuộc tính (thêm cặp key value)
student.email = "tuhoc.cc@gmail.com"; // Thêm mới thuộc tính
student["website"] = "http://tuhoc.cc"; // Thêm mới thuộc tính

// Xuất đối tượng để xem
console.log(student);
console.log(student.email);
console.log(student.website);

// Xóa bỏ thuộc tính
delete student.email;
console.log(student); //đã mất thuộc tính email

// Sửa thuộc tính
student.website = "giá trị đã bị sửa";
console.log(student);
