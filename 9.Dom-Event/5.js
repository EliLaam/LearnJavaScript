// Event Object
/*  Là một đối tượng chứa thông tin về một sự kiện cụ thể khi nó xảy ra. 
	Sự kiện này có thể là click chuột, nhấn phím, di chuyển chuột, tải trang,..   */

// Event Objects and Their Properties
/* 	Common Properties of Event Objects
- type: Indicates the type of event (e.g., "click", "keydown").
- target: Refers to the element that triggered the event.
- currentTarget: Refers to the element whose event listener is currently being executed.
...

	Common Methods of Event Objects
- preventDefault(): Cancels the event's default action if it is cancelable.
- stopPropagation(): Prevents the event from propagating further in the DOM hierarchy.
...

	Specialized Event Types
- MouseEvent includes properties like clientX and clientY for mouse coordinates.
- KeyboardEvent includes properties like key and code for key identification.
...  */

// Practical Usage
// Event objects are commonly used in conjunction with event listeners to handle user interactions.
// For example:
document.querySelector("button").addEventListener("click", function (event) {
	console.log("Event type:", event.type); // Outputs: "click"
	console.log("Triggered by:", event.target.tagName); // Outputs: "BUTTON"
	event.preventDefault(); // Prevents default button behavior
});

// Example 2:
const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function (e) {
//   console.log(e);
// });

inp.addEventListener("keydown", function (e) {
	console.log(e.key);
	console.log(e.code);
});

// Ví dụ, nếu người dùng bấm phím r thì thay đổi màu nền của trang web.
document.addEventListener("keydown", function (e) {
	if (e.code === "KeyR") {
		//đổi màu nền body
		document.body.style.backgroundColor = "cyan";
	}
});
