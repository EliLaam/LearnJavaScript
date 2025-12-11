// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

// promise 1
function walkDog() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dogWalked = true;

			if (dogWalked) {
				resolve("You walk the dog 🐕");
			} else {
				reject("You DIDN'T walk the dog");
			}
		}, 1500);
	});
}

// promise 2
function cleanKitchen() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const kitchenCleaned = true;

			if (kitchenCleaned) {
				resolve("You clean the kitchen 🧹");
			} else {
				reject("You DIDN'T clean the kitchen");
			}
		}, 2500);
	});
}

// promise 3
function takeOutTrash() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const trashTakenOut = true;

			if (trashTakenOut) {
				resolve("You take out the trash ♻");
			} else {
				reject("You DIDN'T take out the trash");
			}
		}, 500);
	});
}

// await phải nằm trong hàm có keyword async
// thực hiện các promise từ trên xuống như các đoạn code đồng bộ
async function doChores() {
	// bắt lỗi bằng cách bọc trong try và catch
	try {
		// khi hàm resolve kích hoạt
		const walkDogResult = await walkDog(); // return promise 1
		console.log(walkDogResult);

		const cleanKitchenResult = await cleanKitchen(); // return promise 2
		console.log(cleanKitchenResult);

		const takeOutTrashResult = await takeOutTrash(); // return promise 3
		console.log(takeOutTrashResult);

		console.log("You finished all the chores!");
	} catch (error) {
		// khi hàm reject kích hoạt thì thực hiện đoạn catch
		console.error(error);
	}
}

// goi async
doChores();
