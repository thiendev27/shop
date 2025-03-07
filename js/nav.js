let cart_dat = window.localStorage.getItem("cart");
let count = 0;
if (!(cart_dat===null)){
	count = JSON.parse(cart_dat).length;
}

const userInfo = document.getElementsByClassName("user-info")[0];
const cart = userInfo.firstElementChild;


cart.style.setProperty("--count", `"${count}"`);
if (count == 0){
	cart.style.setProperty("--show", "none");
} else {
	cart.style.setProperty("--show", "block");
}
let money = 860;
const moneyLabel = userInfo.lastElementChild;
moneyLabel.innerHTML = `<i class="icon i-user"></i>Số dư: ${money}.000đ`;


// Lưu ý
const _search = document.getElementsByClassName("manager")[0].firstElementChild.firstElementChild;
_search.placeholder = "Tìm kiếm(Chỉ hoạt động ở trang Sản phẩm)";