// Bài tập 4: Tìm Kiếm Trong Danh Sách
// Viết một hàm để kiểm tra xem một loại thực phẩm có tồn tại trong một danh sách cho trước hay không
let groceryList = ["trứng", "thịt", "cá", "rau", "hải sản"];

// tạo hàm chứa tham số list(danh sách), item(vật phẩm)
function isInList(list, item) {
	for (let i = 0; i < groceryList.length; i++) {
		if (item === list[i]) {
			return true;
		}
	}
	return false;
	// để return false ra ngoài vì nếu nằm bên trong nó sẽ thoát vòng lặp ngay lập tức mà không chạy tiếp index
}

console.log(isInList(groceryList, "thịt"));
console.log(isInList(groceryList, "hoa"));

let checkList = prompt("Nhập món cần kiểm tra đã mua chưa");
console.log(isInList(groceryList, checkList));
