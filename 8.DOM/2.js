// II. Thay đổi Attribute

// 1. element.getAttribute("att") : Trả về pt có thuộc tính đó nhưng chỉ để xem
// Sử dụng querySelector để chọn thẻ a đầu tiên
const firstLink = document.querySelector("a");
console.log(firstLink);
// Kiểm tra xem có thẻ a được tìm thấy hay không
if (firstLink) {
	const linkHref = firstLink.getAttribute("href");
	console.log(linkHref);
} else {
	console.log("Không tìm thấy thẻ a");
}
// (Truthy Value) nếu tìm đc thẻ a sẽ là true, còn kh tìm đc là null, mà null là false

// 2. element.setAttribute("att","value") : Trả về pt có thuộc tính đó và có thể thêm thuộc tính
firstLink.setAttribute("target", "_blank"); // thêm thuộc tính target=_blank cho thẻ a

// Dùng cho thuộc tính có sẵn nhanh gọn
// firstLink.target = "_blank"

// Vì firstLink chỉ chọn thẻ a đầu tiên nên ta dùng All để chọn tất cả
// Sử dụng querySelectorAll để chọn tất cả các thẻ a trong ul
const links = document.querySelectorAll("ul a");
console.log(links);

// Lặp qua mỗi thẻ a và sử dụng setAttribute để thêm thuộc tính target="_blank"
links.forEach((singleLink) => {
	// forEach là lặp, singleLink là biến cho mỗi link đi qua, => là return
	singleLink.setAttribute("target", "_blank");
	console.log(singleLink);
});

// Phương thức forEach() của các phiên bản Mảng thực thi một hàm được cung cấp một lần cho mỗi phần tử mảng.
//array.forEach((element) => console.log(element));

// 3. element.hasAttribute() : Kiểm tra 1 pt có thuộc tính đó kh
const item1 = document.querySelector(".list");
// Kiểm tra xem thẻ mang id có thuộc tính style không?
const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style")); // true

// Kiểm tra danh sách mà mình đã setAttribute ở mục 3
const checkLinks = document.querySelectorAll("a");
checkLinks.forEach((singleCheck) => {
	console.log(singleCheck.hasAttribute("target"));
});

// 4. element.removeAttribute() : Loại bỏ 1 thuộc tính khỏi pt
item2.removeAttribute("style");

// Kiểm tra lại xem thuộc tính style đã bị loại bỏ hay chưa?
console.log(item2.hasAttribute("style")); // kh còn => false

// Bài tập: Xóa toàn bộ thuộc tính href trong các thẻ a nằm trong ul
// Chọn tất cả các thẻ a trong phần tử ul
const anchorTags = document.querySelectorAll("ul a");

// Lặp qua từng thẻ a và xóa thuộc tính href, dùng console xuất kq
anchorTags.forEach((anchor) => {
	anchor.removeAttribute("href");
});
