// DOM (Document Object Model)
// I. Chọn phần tử

// 1. document.getElementsByTagName() : Chọn tất cả phần tử theo tên, trả về mảng
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li");
console.log(li_item); // trả về mảng các phần tử li

// Chúng ta có thể kiểm tra xem mảng có ? phần tử (.length)
console.log(li_item.length);

// Truy xuất và thay đổi 1 phần tử theo vị trí index (.innerHTML)
li_item[1].innerHTML = "Phần tử li index 1 đã thay đổi";

// 2. document.getElementsByClassName() : Chọn tất cả phần tử theo class, trả về mảng
console.log("getElementsByClassName: ");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item); // trả về mảng các phần tử li

li_class_item[1].innerHTML = "Phần tử li index 1 đã thay đổi lần 2";

// 3. document.getElementById() : Chọn phần tử theo id(duy nhất), trả về chính pt đó
let el = document.getElementById("list_about");
console.log(el); // trả về phần tử li có id list_about

el.innerHTML = "Something about me"; // không có index vì id là duy nhất

// =-=-=-=-=-= Tóm lại =-=-=-=-=-=
// 1 và 2 Chọn TẤT CẢ các phần tử có element và class theo mong muốn
// Sử dụng [index].innerHTML để thay đổi nd theo vị trí index (list pt)
// 3 sẽ chỉ trả về 1 phần tử vì id là duy nhất
// Sử dụng .innerHTML để thay đổi nd của phần tử đó (only) + Có thể sử dụng cho 1 và 2 (only)

// 4. document.querySelector() : Chọn phần tử đầu tiên theo tên, id, class, bộ chọn kết hợp,..
// Chọn phần tử có id là "heading_title" và thay đổi nội dung của nó (#)
let title = document.querySelector("#heading_title"); // bên CSS id là #
console.log(title);
title.innerHTML = "New Title"; // dùng innerHTML thay đổi nội dung

// Chọn phần tử đầu tiên có class là "list" và thay đổi nội dung (.)
let firstListItem = document.querySelector(".list"); // bên CSS class là .
// firstListItem.innerHTML = "Trang Chủ";  // thay đổi thẻ li sẽ kh còn thẻ a nữa

// Quan trọng, querySelector có thể chọn css kết hợp
let firstLinkInList = document.querySelector("ul a"); // thẻ a con của ul
console.log(firstLinkInList); // Trả về thẻ a đầu tiên là con của ul
// Một khi đã thay đổi thẻ cha thì thẻ con cũng biến mất hoặc thay đổi theo => thẻ li kh chứa thẻ a nữa

// Chọn phần tử input checkbox và đặt thuộc tính checked cho nó
let checkbox = document.querySelector("input");
checkbox.checked = true;

// 5. document.querySelectorAll() : Chọn tất cả các pt theo tên, id, class, bộ chọn kết hợp,.. trả về mảng
let list_item = document.querySelectorAll("li"); // chọn tất cả thẻ li
console.log(list_item);

list_item[1].innerHTML = "Liên hệ với chúng tôi";

// =-=-=-=-=-= Tóm lại =-=-=-=-=-=
// 4 và 5 đều có thể chọn theo name, pt, class, id, bộ chọn kết hợp,...
// 4 thì chỉ chọn pt ĐẦU TIÊN theo bộ chọn (có nhiều thẻ a nhưng chỉ chọn thẻ a đầu tiên)
// 5 thì chọn TẤT CẢ pt theo bộ chọn (trả về mảng nên dùng index để thay đổi)
