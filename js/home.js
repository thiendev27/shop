function introCard(id, name){
	const card = document.createElement("div");
	card.classList.add("product-card");
	card.innerHTML = `
	<a href="product.html?id=${id}">Ảnh mặt hàng</a>
	<h1>#${id}<br>${name}</h1>
	`;
	return card;
};
function addIntroCard(count){
	const slideShow = document.getElementsByClassName("product-slideshow")[0];
	for (let i=1; i <= count; i++) {
		let data = productData[i];
		let card = introCard(i, data.name);
		slideShow.appendChild(card);
	};
}