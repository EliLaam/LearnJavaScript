/* Mục Tiêu Cuối Cùng
Chúng ta sẽ xây dựng một "ứng dụng" nhỏ trong console có 3 chức năng chính:
Lưu trữ một danh sách các công việc cần làm.
Hiển thị toàn bộ danh sách công việc đó ra màn hình.
Thêm một công việc mới vào danh sách. */
// Cập nhật kiến thức: Mảng có thể lồng đối tượng, đối tượng có thể lồng đối tượng

// Thiết Kế "Cơ Sở Dữ Liệu"
const todos = [
	{
		content: "Học tiếng Anh",
		completed: true,
	},
	{
		content: "Học javaScript",
		completed: true,
	},
	{
		content: "Luyện code",
		completed: false,
	},
];

// Xây Dựng Chức Năng "Hiển Thị Danh Sách"
function displayTodos() {
	console.log("Danh sách nhiệm vụ");
	for (let i = 0; i < todos.length; i++) {
		let todo = todos[i];
		let status = todo.completed ? "[x]" : "[ ]"; // Dùng toán tử ba ngôi cho ngắn gọn
		console.log(`${status} ${todo.content}`);
	}
}

// Xây Dựng Chức Năng "Thêm Công Việc Mới"
function addTodo(todoText) {
	const newTodo = {
		content: todoText,
		completed: false,
	};
	todos.push(newTodo);
	console.log("Nhiệm vụ mới: " + todoText);
}

// Test
// Hiển thị danh sách ban đầu
displayTodos();

// Thêm nv mới
addTodo("Làm dự án");

// Hiển thị lại danh sách
displayTodos();
