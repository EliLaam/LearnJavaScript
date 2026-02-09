// Viết lại bài tập trên bằng cú pháp async/await hiện đại và sạch sẽ hơn để lấy thông tin của một bài đăng cụ thể.
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

async function getPost() {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const post = await response.json();
		console.log(post);

		console.log(`Title: ${post.title}, Body: ${post.body}`);
	} catch (error) {
		console.error("Lỗi khi fetch dữ liệu:", error.message);
	}
}

getPost();
