//============Viết Lại Bằng Arrow Function và Template Literals=============
// Hàm cũ
// function introduce(name, age) {
//   var greeting = "Xin chào, tôi là " + name + " và tôi " + age + " tuổi.";
//   return greeting;
// }
// console.log(introduce("Eli", 20));

let introduce = (name, age) => `Hello, I'm ${name} and ${age} years old`;

console.log(introduce("Eli", 19));

//===================Trích Xuất Thông Tin (Destructuring)===================
const user = {
	id: 1,
	fullName: "Raiden Ei",
	email: "ei@inazuma.com",
	details: {
		role: "Archon",
		nation: "Inazuma",
	},
};

// trích xuất trong 1 dòng code theo cặp thuộc tính (key: New variable)
const {
	fullName: fullName,
	email: email,
	details: { nation: nation },
} = user;
console.log(fullName);
console.log(email);
console.log(nation);

//==========Gộp Mảng và Sao Chép Đối Tượng (Spread Operator)===============

const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["NodeJS", "Express"];
const originalUser = { name: "Miko", age: 500 };

const fullstackSkills = [...frontendSkills, ...backendSkills];
console.log(fullstackSkills);

const updatedUser = { ...originalUser, role: "Guuji" };
console.log(updatedUser);
console.log(originalUser);
