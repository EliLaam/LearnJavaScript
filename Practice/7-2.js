// Dem so lan click
let click = document.getElementById("clickBtn");
let span = document.getElementById("count");
var count = 0;

click.addEventListener("click", () => {
	count++;
	span.textContent = count;
});

// Form dang ki don gian
let form = document.getElementById("register-form");
let userInput = document.getElementById("user-input");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
	event.preventDefault(); // ngan reload trang

	const username = userInput.value.trim();
	if (username === "" || username.length < 6) {
		message.textContent = "❌ Vui lòng nhập username! (6 ky tu tro len)";
		message.style.color = "red";
	} else {
		message.textContent = "✅ Đăng ký thành công cho user: " + username;
		message.style.color = "green";
		userInput.value = ""; // reset input
	}
});
