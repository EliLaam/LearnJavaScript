// III. Thay đổi Content
// Chọn đến phần tử có id là "demo"
let elm = document.getElementById("demo");

// Trong Console
// element.textContent : trả về giữ nguyên định dạng (khoảng cách, xuống dòng..)
console.log("textContent: ");
console.log(elm.textContent);

// element.innerText : trả về văn bản không có định dạng (khoảng cách, xuống dòng..)
console.log("innerText: ");
console.log(elm.innerText);

// element.innerHTML : trả về gốc HTML (giữ nguyên tag <p></p>)
console.log("innerHTML: ");
console.log(elm.innerHTML);

// Trên Web
// Chọn đến phần tử có id là "demo2"
let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>Tuhoc.cc</i> </p>"; // tự động định dạng css trên web
elm2.textContent = "<p><i>Tuhoc.cc</i> </p>"; // giữ nguyên văn bản trên web
