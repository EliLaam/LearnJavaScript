let elm = document.querySelector("#elm");

// 1. Truy cập phần tử mẹ (duy nhất)
console.log(elm.parentElement);

// Thay đổi nền cho pt mẹ
elm.parentElement.style.backgroundColor = "blue";

// 2. Truy cập phần tử con (có thể có nhiều)
console.log(elm.children);
//==>> HTMLCollection(3) [h2.child1, h2.child2, h2.child3]

// Thay đổi nền cho pt con
// elm.children.style.backgroundColor = "green";
// ==>> kh thể style vì phần tử con có nhiều nên trả về giá trị undefined

// truy cập theo index
console.log(elm.children[0]);
console.log(elm.children[1]);
console.log(elm.children[2]);

// 3. Truy cập phần tử anh em
console.log(elm.nextElementSibling); // thẻ anh em tiếp theo
console.log(elm.previousElementSibling); // thẻ anh em trước

// Có thể kết hợp
console.log(elm.children[1].nextElementSibling);
