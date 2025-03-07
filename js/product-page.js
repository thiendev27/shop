const productList = document.getElementById("product-list");
const countLabel = document.getElementById("count-label");

// Mục điều hướng bên
const navButton = document.getElementsByClassName("item");
const heading = document.getElementsByClassName("heading")[0];

function createCard(id, name, desc, cost, img, type) {
	let card = document.createElement("div");
	card.classList.add("product-card");
	card.id = `${id}`;
	card.innerHTML = `
		<a href="product.html?type=${type}&id=${id}"><img src="${img}" alt="Ảnh mặt hàng"></a>
		<h1>${name}</h1>
		<p>${desc}</p>
		<hr>
		<p class="cost">Giá: ${cost}</p>
	`;
	let btn = document.createElement("button");
	btn.classList.add("default-btn");
	btn.innerHTML = 'Thêm vào giỏ <i class="icon i-shopping-cart-light">';
	btn.addEventListener("click", function() {
		addToCart(id);
	})
	card.appendChild(btn);
	return card;
};

// Phân loại sản phẩm
const category = document.getElementById("category");
const fruit = category.children[0].children[1]; // Lấy dropdown của từng mục
const vegetable = category.children[1].children[1];
const other = category.children[2].children[1];

function addProduct() {
	let count = 0;
	for (let [id, product] of Object.entries(productData)) {
		
		// điều hướng phân loại
		let a = document.createElement("a");
		a.innerHTML = product.name;
		a.href = `product.html?type=${product.type}&id=${id}`
		switch (product.type){
			case "trai-cay":
				fruit.appendChild(a);
				break;
			case "rau-cu":
				vegetable.appendChild(a);
				break;
			case "thuc-pham-khac":
				other.appendChild(a);
				break;
		}
		if (product.type == type || type=="tat-ca"){
			let productCard = createCard(id, product.name, product.short_desc, product.cost, product.img, product.type);
			productList.appendChild(productCard);
			count++;
		}
		
	};
	setCountLabel(count);
	

};


// Số lượng sản phẩm
function setCountLabel(count){
	countLabel.innerHTML = count;
}

// Thêm chức năng mở rộng cho mục điều hướng **thả xuống**
function toggleDropdown(dropdown) {
	dropdown.classList.toggle("show");
};

function addButtonFunc(btn, dropdown){
	btn.addEventListener("click", function() {
		toggleDropdown(dropdown);
	});
};
function sideNavSetup(){
	for (let item of navButton) {
		let btn = item.firstElementChild;
		let dropdown = item.lastElementChild;
		addButtonFunc(btn, dropdown);
	};
}

// Loại sản phẩm
function setHeading(){
	if (productNav.hasOwnProperty(type)){
		heading.firstElementChild.innerHTML = productNav[type].title;
		heading.lastElementChild.innerHTML = productNav[type].desc;
	} else {
		heading.firstElementChild.innerHTML = productNav["tat-ca"].title;
		heading.lastElementChild.innerHTML = productNav["tat-ca"].desc;
	};
}


// Thanh tìm kiếm
const searchBox = document.getElementById("search-box");
const searchAction = document.getElementById("search-action");
const searchForm = document.getElementById("search-form");

// Tính năng tìm kiếm
function getSearchInput(){
	return searchBox.value.toLowerCase();
}
function checkMatch(product_name, input){
	return product_name.toLowerCase().includes(input);
}

function search(){
	let input = getSearchInput();
	let matched = [];
	for (let [id, product] of Object.entries(productData)){
		if (checkMatch(product.name, input)){
			matched.push(id);
		}
	}
	return matched;
}

function searchResult(){
	let matched = search();
	setCountLabel(matched.length);
	for (let product of productList.children) {
		if (matched.includes(product.id)){
			product.classList.remove("hidden");
		} else {
			product.classList.add("hidden");
		}
	}
}



function init(){
	searchForm.addEventListener('submit', (event) => {
		event.preventDefault();
		searchResult();
	});
	createPopup("Đã thêm vào giỏ hàng!");
	setHeading();
	sideNavSetup();
	addProduct();
	
};

init();

