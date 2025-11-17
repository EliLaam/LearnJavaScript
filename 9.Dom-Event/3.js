// Có rất nhiều loại event (the main sorts of events )
// Link tài liệu tham khảo : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events

// Tìm hiểu về Mouse event & Keyboard event (phổ biến)
/* Mouse events
- click
Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
- dblclick
Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
- mouseover
Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
...  */

// Use the event name in methods like addEventListener(), or set an event handler property.
Element.addEventListener("click", (event) => {});
element.onclick = (event) => {};

Element.addEventListener("dblclick", (event) => {});
element.ondblclick = (event) => {};

Element.addEventListener("mouseover", (event) => {});
element.onmouseover = (event) => {};

/* Keyboard events
- keydown
Fired when a key is pressed.
- keypress 
Fired when a key that produces a character value is pressed down.
- keyup
Fired when a key is released.  
...  */

// Use the event name in methods like addEventListener(), or set an event handler property.
addEventListener("keyup", (event) => {});
onkeyup = (event) => {};

// Ví dụ:
const inp = document.querySelector("#inp");
inp.addEventListener("keydown", function () {
	console.log("KEYDOWN!");
});

inp.addEventListener("keyup", function () {
	console.log("KEYUP!");
});
