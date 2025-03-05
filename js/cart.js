const productList = document.getElementById("product-list");
const list = document.getElementById("added-product");
const cost = document.getElementById("cost");
const total = document.getElementById("total");
let product_cost = 0

function createCard(id, name, desc, cost){
	const card = document.createElement("div");
	card.classList.add("product-card");
	card.innerHTML = `
		<a href="product.html?id=${id}">Ảnh mặt hàng</a>
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
			<button class="default-btn">Xoá <i class="icon i-trash"></i></button>
		</div>
	`;
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

// for ([id, product] of Object.entries(productData)) {
// 	let card = createCard(id, product.name, product.short_desc, product.cost);
// 	productList.appendChild(card);
// 	addProductList(product.name);
// 	product_cost += parseInt(product.cost.slice(0, -1));
// };
addCost(product_cost);
addIntroCard(3);