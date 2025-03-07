const container = document.getElementsByClassName("container")[0];
const title = document.getElementById("title");
const info = container.children[1];
const name = info.firstElementChild;
const desc = info.children[1];
const cost = document.getElementById("cost-label");
const star = document.getElementById("star");
const img = document.getElementById("product-img");
const addCartButton = document.getElementById("add-to-cart");
function setInfo(){
	const id = getParam("id");
	const star_count = productData[id].star
	name.innerHTML = productData[id].name;
	title.innerHTML = `${productData[id].name} | thiendev's Shop`
	desc.innerHTML = productData[id].detail_desc;
	cost.innerHTML = productData[id].cost;
	star.innerHTML = `<i>* ${star_count}/5 </i>`;
	for (let i = 0; i < 5; i++) {
		let star_icon = document.createElement("i");
		star_icon.classList.add("icon");
		star_icon.classList.add((i < star_count) ? "i-full-star" : "i-empty-star");
		star.appendChild(star_icon);
	};
	img.src = productData[id].img;
	addCartButton.addEventListener("click", function() {
		addToCart(id);
	})
};
createPopup("Đã thêm vào giỏ hàng!");
setInfo();
