// Tạo biến gán Http
const request = new XMLHttpRequest();

// HỌC THEO STT
//(3) Chúng ta sẽ không biết khi nào hoàn thành tiến trình nên hãy dùng addListener để theo dõi
// nên để trước các yêu cầu để lắng nghe toàn bộ
request.addEventListener("readystatechange", () => {
	// console.log(request, request.readyState); //(biến, trạng thái) theo dõi mỗi lần có thay đổi
	// chúng ta có thể tương tác với phần phản hồi
	if (request.readyState === 4) {
		// nếu request.trạng thái sẵn sàng là 4 thì:
		console.log(request.responseText); // trả về văn bản nhận được từ máy chủ theo yêu cầu
	}
});

//(1) Dùng .open(yêu cầu,URL) để LẤY DỮ LIỆU API từ web với đối số GET
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//(2) Dùng .send để gửi yêu cầu nhà mạng, vào tab network và chọn file todo., sang tab response để xem
request.send();

// Sau đó trong tab console sẽ cho ra 4 phần thông tin, nhưng chúng ta kh hiểu đc là gì
// Tìm hiểu ở đây: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
/*
Value	State	Description
0	UNSENT					Client has been created. open() not called yet.
1	OPENED					open() has been called.
2	HEADERS_RECEIVED		send() has been called, and headers and status are available.
3	LOADING					Downloading; responseText holds partial data.
4	DONE					The operation is complete.
*/
