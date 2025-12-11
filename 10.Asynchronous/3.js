const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
	// console.log(request.readyState);
	if (request.readyState === 4 && request.status === 200) {
		// nếu request thay đổi lần thứ 4 và trạng thái là 200(ổn) :
		console.log(request.responseText);
	} else if (request.readyState === 4) {
		// nếu chỉ có thay đổi lần thứ 4 mà trạng thái kh ổn (404 err) :
		console.log("could not fetch the data!"); // kh thể tìm thấy data
	}
});
// thử chỉnh sai URL để thấy kq
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send(); // gửi yêu cầu nhà mạng

// Tai lieu tham khao: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
// 200 OK
// 404 error
