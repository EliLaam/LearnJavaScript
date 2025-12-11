// CALLBACK FUNCTION - Hàm lồng hàm

// truyền hàm callback trong hàm getTodos
const getTodos = (callback) => {
	// callback ở đây không phải là một giá trị thông thường
	// mà nó là một hàm khác được truyền vào (hàm đợi sẵn bên ngoài)
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			// yêu cầu hàm truyền 2 đối số vào callback
			callback(undefined, request.responseText);
			// undefined và request.responseText là các giá trị/đối số (arguments)
		} else if (request.readyState === 4) {
			// yêu cầu hàm truyền 2 đối số vào callback
			callback("could not fetch the data!", undefined);
			// chuỗi giá trị và đối số
		}
	});

	request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
	request.send();
};

console.log(1); // được in ra trc
console.log(2);

// gọi hàm và truyền 2 tham số err và data cho hàm callback thông qua hàm getTodos
getTodos((err, data) => {
	console.log("callback fired"); // thực hiện dòng lệnh này trước kh điều kiện
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

console.log(3); // được in ra trc
console.log(4);

// EXPLAIN
/* Quá trình hàm getTodos làm là trong âm thầm, callback là hàm đợi sẵn bên ngoài chờ được thực thi
- Khi mình gọi hàm getTodos và đưa ra yêu cầu là in ra 2 tham số err và data, nó sẽ chạy hàm getTodos trước sau đó dựa trên cái yêu cầu để lấy kết quả nó nhận được trong getTodos. (callback)
1. Khi hàm getTodos đã hoàn thành và cho ra kết quả thì dev là người chọn lọc thông tin cần lấy, ở đây là cần lỗi và dữ liệu trả về (2 đối số/giá trị) ==> undefined,request.responseText
2. Lúc này mình yêu cầu getTodos truyền thẳng 2 đối số đó cùng với dữ liệu tìm thấy vào hàm callback (được gọi ngay trong hàm getTodos)
==> callback(undefined,request.responseText)
** mà err và data là tham số của callback nên nó sẽ nhận đc 2 kết quả đó ở bên ngoài với vai trò mới là tham số err và data
3. Sau đó mình dùng if để đưa ra thêm yêu cầu và sử dụng chính tham số err và data thay vì phải gọi lại hàm callback
// Trường hợp IF
    Trường hợp Thành Công:
Hàm getTodos gọi callback với callback(undefined, request.responseText).
Lúc này, biến err nhận giá trị là undefined.
Câu lệnh if sẽ kiểm tra: if (undefined).
Vì undefined là một giá trị Falsy, điều kiện sẽ là false.
Khối if bị bỏ qua, và khối else được thực thi -> console.log(data) được chạy.
    Trường hợp Thất Bại:
Hàm getTodos gọi callback với callback("could not fetch the data!", undefined).
Lúc này, biến err nhận giá trị là chuỗi "could not fetch the data!".
Câu lệnh if sẽ kiểm tra: if ("could not fetch the data!").
Vì đây là một chuỗi có nội dung, nó được coi là một giá trị Truthy.
Điều kiện sẽ là true.
Khối if được thực thi -> console.log(err) được chạy.
*/
