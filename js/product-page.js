const productList = document.getElementById("product-list");
const countLabel = document.getElementById("count-label");

// Mục điều hướng bên
const navButton = document.getElementsByClassName("item");
const heading = document.getElementsByClassName("heading")[0];


function createCard(id, name, desc, cost) {
	let card = document.createElement("div");
	card.classList.add("product-card");
	card.innerHTML = `
		<a href="product.html?id=${id}">Ảnh mặt hàng</a>
		<h1>${name}</h1>
		<p>${desc}</p>
		<hr>
		<p class="cost">Giá: ${cost}</p>
		<button class="default-btn">Thêm vào giỏ <i class="icon i-shopping-cart-light"></i></button>
	`;
	return card;
};

function addProduct() {
	for (let [id, product] of Object.entries(productData)) {
		let productCard = createCard(id, product.name, product.short_desc, product.cost);
		productList.appendChild(productCard);
	};
};

// Thêm chức năng mở rộng cho mục điều hướng **thả xuống**
function toggleDropdown(dropdown) {
	dropdown.classList.toggle("show");
};

function addButtonFunc(){
	for (let item of navButton) {
		let btn = item.firstElementChild;
		let dropdown = item.lastElementChild;
		btn.addEventListener("click", function() {
			toggleDropdown(dropdown);
		});
	};
};

// Loại sản phẩm
function setHeading(){
	let type = getParam("type");
	if (productNav.hasOwnProperty(type)){
		heading.firstElementChild.innerHTML = productNav[type].title;
		heading.lastElementChild.innerHTML = productNav[type].desc;
	} else {
		heading.firstElementChild.innerHTML = productNav["tat-ca"].title;
		heading.lastElementChild.innerHTML = productNav["tat-ca"].desc;
	};
}

function init(){
	countLabel.innerHTML = Object.keys(productData).length;
	setHeading();
	addButtonFunc();
	addProduct();
};

init();