const container = document.getElementsByClassName("container")[0];
const info = container.children[1];
const name = info.firstElementChild;
const desc = info.children[1];
const cost = document.getElementById("cost-label");
function setInfo(){
	const id = getParam("id");
	name.innerHTML = productData[id].name;
	desc.innerHTML = productData[id].detail_desc;
	cost.innerHTML = productData[id].cost;
};
setInfo();