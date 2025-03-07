const productList = document.getElementById("product-list");
const list = document.getElementById("added-product");
const cost = document.getElementById("cost");
const total = document.getElementById("total");
let product_cost = 0

function createCard(id, name, desc, cost, img){
	const card = document.createElement("div");
	card.classList.add("product-card");
	card.innerHTML = `
		<a href="product.html?id=${id}"><img src="${img}" alt="Ảnh mặt hàng"></a>
		<h1>${name}</h1>
		<p>${desc}</p>
		<hr>
		<p class="cost">${cost}</p>
		<div class="button-layout">
			<h3>Số lượng:</h3>
			<div class="count-field">
				<button>-</button>
				<input type="number" min="0" max="99" value="1">
				<button>+</button>
			</div>
		</div>
	`;
	let btn = document.createElement("button");
	btn.classList.add("default-btn");
	btn.innerHTML = 'Xoá <i class="icon i-trash"></i>'
	btn.addEventListener("click", function() {
		deleteFromCart(id);
		readCart();
	})
	card.appendChild(btn);
	return card;
};

function addProductList(name){
	let item = document.createElement("li");
	item.innerHTML = name;
	list.appendChild(item);
};

function addCost(c){
	cost.innerHTML = `
		<li>Tiền hàng: ${c}.000đ</li>
		<li>Phí ship: 100.000đ</li>
		<li>Phí dịch vụ khác: 100.000đ</li>`;
}

function readCart(){
	productList.replaceChildren();
	list.replaceChildren();
	product_cost = 0;
	for (id of cart_data) {
		let product = productData[id];
		let card = createCard(id, product.name, product.short_desc, product.cost, product.img);
		productList.appendChild(card);
		addProductList(product.name);
		product_cost += parseInt(product.cost.slice(0, -1));
	};
	addCost(product_cost);
}
function init(){
	createPopup("Đã xoá khỏi giỏ hàng!");
	readCart();
	addIntroCard(3);
}
init();