const countField = document.getElementsByClassName("count-field");


function clamp(number, min, max) {
	return Math.max(min, Math.min(number, max));
}
function bindCounter(input, minus, add){
	minus.addEventListener("click", function(){
		input.value = clamp(parseInt(input.value) - 1, 0, 99);
	});
	add.addEventListener("click", function(){
		input.value = clamp(parseInt(input.value) + 1, 0, 99);
	});
}
function readField(){
	for (field of countField){
		let minus = field.children[0];
		let input = field.children[1];
		let add = field.children[2];
		bindCounter(input, minus, add);
	}
}

readField();
