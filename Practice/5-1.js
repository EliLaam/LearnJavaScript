// Bài tập 1: Viết code để tìm số lớn nhất trong một mảng cho trước
let arr = [4, 3, 7, 2, 9, 6];
let maxNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
	if (arr[i] > maxNumber) {
		maxNumber = arr[i];
	}
}
console.log(maxNumber);

// Bài tập 2: In Ra Các Món Yêu Thích
// Tạo một danh sách các món ăn yêu thích và in chúng ra màn hình.
let myFavFood = ["Bún Bò", "Phở", "Bánh Mì", "Mì Cay"];

for (let i = 0; i < myFavFood.length; i++) {
	console.log(`Các món ăn yêu thích là:`, myFavFood[i]);
}

// i < arr.length không nên có =
// vì với length là bắt đầu = 1
// array bắt đầu = index 0

// Bài tập 3: Thêm và Bớt Bạn Bè
// Mô phỏng việc quản lý một danh sách bạn bè.
let listFriend = ["Ei", "Yae", "Shogun"];

// Thêm vào cuối ds
listFriend.push("Miko");
console.log(listFriend);
// Xóa ở cuối ds
listFriend.pop();
console.log(listFriend);
// Thêm ở đầu ds
listFriend.unshift("Raiden");
console.log(listFriend);
// Xóa ở đầu ds
listFriend.shift();
console.log(listFriend);
