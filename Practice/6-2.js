// Quản Lý Danh Bạ - Mảng chứa đối tượng (Array of Objects)
// Tạo một danh sách các liên hệ, mỗi liên hệ là một đối tượng chứa thông tin chi tiết.
let Eli = {
	name: "Eli",
	phone: "02040606",
};
let Lam = {
	name: "Lam",
	phone: "04060602",
};
let Annie = {
	name: "Annie",
	phone: "06060204",
};
let Dun = {
	name: "Dun",
	phone: "06020406",
};

// đặt tất cả đối tượng vào 1 mảng (Array of Objects)
let contacts = [Eli, Lam, Annie, Dun];

for (var i = 0; i < contacts.length; i++) {
	// lấy thuộc tính name trong đối tượng ở vị trí index i
	console.log("name:", contacts[i].name);
	// lấy thuộc tính phone trong đối tượng ở vị trí index i
	console.log("phone:", contacts[i].phone);
}
console.log("------------------");

// Thông Tin Bài Đăng - Mảng lồng trong đối tượng (Array inside Object)
// Tạo một đối tượng mô tả một bài đăng trên mạng xã hội, trong đó có một danh sách các bình luận.

let post = {
	title: "100 ways to successful!",
	author: "Eli",
	likes: "6",
	comment: ["Perfect", "Good", "Nice"], // array inside object
};

console.log(post["title"]);
// i < chiều dài mảng comment trong đối tượng post
for (var i = 0; i < post.comment.length; i++) {
	// truy cập giá trị ở vị trí index i của mảng comment trong đối tượng post
	console.log("Binh luan", i + 1, post.comment[i]);
}
