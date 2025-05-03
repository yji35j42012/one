var banner_item = document.querySelectorAll("[name='banner_item']");
var banner_txt = document.querySelectorAll("[name='banner_txt']")
var banner_item_count = 0;
console.log('banner_item', banner_item.length);

// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];

// }
var banner_item_timmer = setInterval(() => {
	banner_item[banner_item_count].classList.add("out");
	banner_txt[banner_item_count].classList.add("out");
	clearBanner(banner_item_count);
	banner_item_count++
	if (banner_item_count >= banner_item.length) {
		banner_item_count = 0
	}
	setTimeout(() => {
		banner_item[banner_item_count].classList.add("on");
		banner_txt[banner_item_count].classList.add("on");
	}, 1000);
	

}, 5000);

function clearBanner(i) {
	setTimeout(() => {
		banner_item[i].classList.remove("on");
		banner_item[i].classList.remove("out");
		banner_txt[i].classList.remove("on");
		banner_txt[i].classList.remove("out");
	}, 2500);
}