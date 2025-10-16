// Bài tập 1: Bạn và bạn bè đi ăn tại một nhà hàng. Viết một đoạn code để tính tổng số tiền phải trả, bao gồm cả tiền tip.
/* 
    Tạo một biến billTotal (tổng hóa đơn) và gán cho nó một giá trị, ví dụ 250000.
    Tạo một biến tipPercentage (phần trăm tip) và gán cho nó một giá trị, ví dụ 10.
    Tính số tiền tip tipAmount dựa trên billTotal và tipPercentage.
    Tính tổng số tiền cuối cùng finalBill (hóa đơn + tip).
    In ra màn hình console một câu rõ ràng, ví dụ: "Tổng hóa đơn là 250000, tiền tip là 25000, tổng cộng phải trả: 275000".
*/

let billTotal = Number(prompt("Hãy nhập số tiền ăn vào đây"));
const tipPercentage = 10;
let tipAmount = (billTotal * tipPercentage) / 100;
let finalBill = billTotal + tipAmount;

// Lưu ý: Phải dung dấu nháy `` để hiểu được cú pháp ${...} để nhúng biến vào bên trong.
console.log(
	`Tổng hóa đơn là ${billTotal} tiền tip là ${tipAmount}, tổng cộng phải trả: ${finalBill}`
);

// Bài tập 2: Mô phỏng một nút "Like" đơn giản.
/* 
    Tạo một biến likeCount và khởi tạo giá trị là 100.
    In ra số lượt like ban đầu.
    Mô phỏng hành động "nhấn like": Tăng likeCount lên 1 đơn vị.
    In ra số lượt like mới.
    Mô phỏng hành động "bỏ like": Giảm likeCount xuống 1 đơn vị.
    In ra số lượt like sau khi bỏ.
*/
let likeCount = 100;
// Lượt like ban đầu
console.log("Số lượt like ban đầu là", likeCount);
// Tăng likeCount lên 1 đơn vị.
likeCount++;
console.log("Đã nhấn like", likeCount);
// Giảm likeCount xuống 1 đơn vị.
likeCount--;
console.log("Đã bỏ like", likeCount);
