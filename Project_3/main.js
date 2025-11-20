// Gọi phần tử mẹ
const parentElm = document.getElementById("container");

// Tạo link chung
let baseURL =
	"https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

// Bài tập 1: Thêm phần tử con vào pt mẹ
// // Tạo phần tử con
// const newImg = document.createElement("img");
// // Thêm thuộc tính src
// newImg.src = `${baseURL}1.png`;
// // Thêm phần tử con
// parentElm.appendChild(newImg);

// Bài tập 2: Thêm nhiều phần tử con (for)
// for (let i = 1; i <= 150; i++) {
// 	// Tạo phần tử con
// 	const newImg = document.createElement("img");
// 	// Thêm thuộc tính src tại i
// 	newImg.src = `${baseURL}${i}.png`;
// 	// Thêm phần tử con
// 	parentElm.appendChild(newImg);
// }

// Bài tập 3: Thêm nhiều phần tử con vào các khối riêng biệt
for (let i = 1; i <= 150; i++) {
	// Tạo khối div để chứa ảnh và stt
	const newDiv = document.createElement("div");
	// Thêm khối div vào cuối container và lấy node mới tạo gán vào parentDiv
	const parentDiv = container.appendChild(newDiv);
	// Tạo phần tử con
	const newImg = document.createElement("img");
	// Thêm thuộc tính src tại i
	newImg.src = `${baseURL}${i}.png`;
	// Thêm phần tử con
	parentDiv.appendChild(newImg);
	// Tạo thẻ span chứa stt
	const newSpan = document.createElement("span");
	newSpan.innerText = `#${i}`;
	// Thêm thẻ span vào khối div
	parentDiv.appendChild(newSpan);
}
