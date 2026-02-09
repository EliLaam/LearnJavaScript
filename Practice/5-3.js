// Đảo Ngược Mảng
// Viết một hàm nhận vào một mảng và trả về một mảng mới có thứ tự các phần tử bị đảo ngược, không được dùng phương thức .reverse() có sẵn.

let arr = [1, 5, 5, 2, 4, 6];

function iterateArrayReverse(arr) {
	// Kiểm tra arr có phải là mảng không
	if (!Array.isArray(arr)) {
		console.log("Giá trị truyền vào không phải là mảng!");
		return;
	}

	// Nếu mảng rỗng thì thông báo
	if (arr.length === 0) {
		console.log("Mảng rỗng.");
		return;
	}

	// Tạo mảng mới
	let newArr = [];

	// Duyệt từ phần tử cuối về đầu
	// arr.length - 1: Lấy chỉ số phần tử cuối cùng.
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]); // push pt hiện tại của arr vào newArr
	}
	return newArr;
}

console.log(iterateArrayReverse(arr));
