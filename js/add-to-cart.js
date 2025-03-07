// Giỏ hàng
function getCart(){
	let data = window.localStorage.getItem("cart");
	if (data===null){
		data = [];
	    window.localStorage.setItem("cart", JSON.stringify(data));
		return data;
	} else {
		return JSON.parse(data);
	}
}
let popup = document.createElement("p");
function createPopup(text){
	popup.classList.add("popup");
	popup.innerHTML = `${text} <i class="icon i-tick-circle"></i>`;
	document.body.appendChild(popup);
}
function saveCart(data){
	window.localStorage.setItem("cart", JSON.stringify(data));
	popup.classList.remove('fade');

	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			popup.classList.add('fade');
		});
	});
}
let cart_data = getCart();
function addToCart(id){
	if (!cart_data.includes(id)){
		cart_data.push(id);
		saveCart(cart_data);
	}
}
function deleteFromCart(id){
	if (cart_data) {
		let index = cart_data.indexOf(id);
		cart_data.splice(index, 1);
		saveCart(cart_data);
	}
}
