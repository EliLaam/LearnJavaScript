// Bài tập 4: CHIA KẸO
let totalCandies = parseInt(prompt("Số lượng kẹo bạn có"));
let numberOfFriend = parseInt(prompt("Sô lượng người cần chia"));
let candiesPerFriend = totalCandies / numberOfFriend;
let remainingCandies = totalCandies % numberOfFriend;
console.log(" Số lượng kẹo mỗi người có là", Math.floor(candiesPerFriend));
console.log(" Số lượng kẹo còn dư là", remainingCandies);
// Math.round(): Làm tròn về số nguyên gần nhất. (>=0.5 lên, <0.5 xuống)
// Math.floor(): Luôn làm tròn xuống số nguyên nhỏ hơn hoặc bằng.
// Math.ceil(): Luôn làm tròn lên số nguyên lớn hơn hoặc bằng.

// Bài tập 5: CỘNG ĐIỂM
let score = 50;
console.log("Số điểm hiện tại là", score);
console.log("bạn đã thắng trò chơi, số điểm hiện tại là", (score += 10));
console.log("bạn đã thua trò chơi, số điểm hiện tại là", (score -= 5));

// cách khác
let scores = 50;
let win = (scores += 10);
let lose = (scores -= 10);
console.log("Số điểm hiện tại là", scores);
console.log("bạn đã thắng trò chơi, số điểm hiện tại là", win);
console.log("bạn đã thua trò chơi, số điểm hiện tại là", lose);
