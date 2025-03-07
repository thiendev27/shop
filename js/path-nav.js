const pathNav = document.getElementById("path-nav");
let type = getParam("type");
let id = getParam("id");

let path = "";
switch (type){
	case "rau-cu":
		path = "Rau củ";
		break;
	case "trai-cay":
		path = "Trái cây";
		break;
	case "thuc-pham-khac":
		path = "Thực phẩm khác";
		break;
	default:
		path = "Tất cả sản phẩm";
		type = "tat-ca";
		break;
}

let a_type = document.createElement("a");
a_type.innerHTML = path;
a_type.href = `products.html?type=${type}`;
pathNav.appendChild(a_type);
if (id !== null) {
	let a_id = document.createElement("a");
	a_id.innerHTML = productData[id].name;
	a_id.href = `product.html?type=${type}&id=${id}`;
	pathNav.appendChild(a_id);
}

	
