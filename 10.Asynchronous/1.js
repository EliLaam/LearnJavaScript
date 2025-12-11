// CALLSTACK
const x = 1;
const y = x + 2;
console.log("Sum is", y);
/*
- This code gets wrapped in main() and main is added to Call Stack.
- log('Sum is 3') added to call stack.
- On console we would get 'Sum is 3'. Now log function is finished and gets removed from Call Stack.
- Now end of script, main function gets popped out of Call Stack.
*/

const listLocations = (locations) => {
	locations.forEach((location) => {
		console.log(location);
	});
};
const myLocation = ["VietNam", "TP.HCM"];
listLocations(myLocation);

// CALLBACK QUEUE
console.log("Starting Up!");

setTimeout(() => {
	console.log("Two Seconds!");
}, 2000);

setTimeout(() => {
	console.log("Zero Seconds!");
}, 0);

console.log("Finishing Up!");

// WEB API
const i = document.getElementById("demo");

function getLocation() {
	try {
		navigator.geolocation.getCurrentPosition(showPosition);
	} catch (err) {
		i.innerHTML = err;
	}
}

function showPosition(position) {
	i.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}
