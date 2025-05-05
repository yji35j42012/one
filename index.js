var banner_item = document.querySelectorAll("[name='banner_item']");
var banner_txt = document.querySelectorAll("[name='banner_txt']")
var banner_item_count = 0;
var normal_banner = document.querySelector("#normal_banner");
var normal_banner_img = document.querySelector("[name='banner_item'] .normal_banner_img");
console.log('banner_item', banner_item[0].offsetHeight);

normal_banner.style = `--normalH:${ normal_banner_img.offsetHeight }px`;

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

	for (let oo = 0; oo < banner_item.length; oo++) {
		banner_item[oo].style = `--normalH:${ banner_item[oo].offsetHeight * 2 }px`;
	}
}, 5000);

function clearBanner(i) {
	setTimeout(() => {
		banner_item[i].classList.remove("on");
		banner_item[i].classList.remove("out");
		banner_txt[i].classList.remove("on");
		banner_txt[i].classList.remove("out");
	}, 2500);
}





var swipper_easy_pic = document.querySelectorAll("#swipper_easy_pic > .normal_easy_pic");
var swipper_easy_dot = document.querySelector("#swipper_easy_dot");
var swipper_easy_count = 0;
var swipper_easy_x = 100
var swipper_easy_xx = 104
var easy_dot_item;
for (let i = 0; i < swipper_easy_pic.length; i++) {
	swipper_easy_dot.innerHTML += '<div class="normal_dot"></div>';
	if (i + 1 == swipper_easy_pic.length) {
		easy_dot_item = document.querySelectorAll("#swipper_easy_dot > .normal_dot");
		for (let r = 0; r < easy_dot_item.length; r++) {
			const element = easy_dot_item[r];
			element.onclick = function () {
				eadyDotHandler(r)
			}
		}
		swipper_easy_pic[swipper_easy_count].classList.add("on");
		easy_dot_item[swipper_easy_count].classList.add("on");

		let m = `calc(${ swipper_easy_x }% + ${ swipper_easy_xx }px)`;
		for (let j = 0; j < swipper_easy_pic.length; j++) {
			swipper_easy_pic[j].style = `transform: translateX(${ m });`;
		}
	}
}

// function set_easy_dot(num) {

// }

function eadyDotHandler(i) {
	swipper_easy_count = i
	let xp = swipper_easy_x - swipper_easy_x * swipper_easy_count;
	let xx = swipper_easy_xx - swipper_easy_xx * swipper_easy_count;
	let m = `calc(${ xp }% + ${ xx }px)`;
	for (let j = 0; j < swipper_easy_pic.length; j++) {
		swipper_easy_pic[j].style = `transform: translateX(${ m });`;
		swipper_easy_pic[j].classList.remove("on");
		easy_dot_item[j].classList.remove("on");
	}
	swipper_easy_pic[swipper_easy_count].classList.add("on");
	easy_dot_item[swipper_easy_count].classList.add("on");
	console.log('i', i);
}

// translateX(calc(50% - 388px - 38px))
var swipper_secret_group = document.querySelector("#swipper_secret_group");
var swipper_secret_item = document.querySelectorAll("#swipper_secret_group > .normal_secret_item");
var swipper_secret_dot = document.querySelector("#swipper_secret_dot");
var swipper_secret_count = 0;
var swipper_secret_w = swipper_secret_item[0].offsetWidth;
var swipper_secret_xx = 38
var swipper_secret_x = 50
for (let i = 0; i < swipper_secret_item.length; i++) {
	swipper_secret_dot.innerHTML += '<div class="normal_dot"></div>';
	if (i + 1 == swipper_secret_item.length) {
		secret_dot_item = document.querySelectorAll("#swipper_secret_dot > .normal_dot");
		for (let r = 0; r < secret_dot_item.length; r++) {
			const element = secret_dot_item[r];
			element.onclick = function () {
				secretDotHandler(r)
			}
		}
		swipper_secret_item[swipper_secret_count].classList.add("on");
		secret_dot_item[swipper_secret_count].classList.add("on");
		let m = `calc(${ swipper_secret_x }% - ${ swipper_secret_w }px - ${ swipper_secret_xx }px)`;
		swipper_secret_group.style = `transform: translateX(${ m });`;
	}
}
function secretDotHandler(i) {
	swipper_secret_count = i
	let w = swipper_secret_w + swipper_secret_w * swipper_secret_count
	let xx = swipper_secret_xx + swipper_secret_xx * swipper_secret_count
	let m = `calc(${ swipper_secret_x }% - ${ xx }px - ${ w }px)`;
	swipper_secret_group.style = `transform: translateX(${ m });`;
	for (let o = 0; o < swipper_secret_item.length; o++) {
		secret_dot_item[o].classList.remove("on");
	}
	secret_dot_item[swipper_secret_count].classList.add("on");
}


var normal_banner_bg1 = document.querySelector(".normal_banner_bg1");
var normal_stick = document.querySelector(".normal_stick");
window.addEventListener('scroll', () => {
	console.log('scroll', window.scrollY);
	// console.log('normal_stick', normal_stick.offsetTop);
	if (window.scrollY > normal_stick.offsetTop) {
		normal_stick.classList.add("active");
	}
});