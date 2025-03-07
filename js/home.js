function introCard(id, name, img){
	const card = document.createElement("div");
	card.classList.add("product-card");
	card.innerHTML = `
	<a href="product.html?id=${id}"><img src="${img}" alt="Ảnh mặt hàng"></a>
	<h1>#${id}<br>${name}</h1>
	`;
	return card;
};
function addIntroCard(count){
	const slideShow = document.getElementsByClassName("product-slideshow")[0];
	for (let i=1; i <= count; i++) {
		let product = productData[i];
		let card = introCard(i, product.name, product.img);
		slideShow.appendChild(card);
	};
}