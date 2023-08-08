const terminal = document.getElementById("terminal")
const home = document.getElementById("home")
const skills = document.getElementById("skillsbtn")
const cont = document.getElementById("contactbtn")
const cont2 = document.getElementById("contact2")
const luau = document.getElementById("luau")
const nodejs = document.getElementById("nodejs")
const py = document.getElementById("pybtn")
const express = document.getElementById("express")
const djs = document.getElementById("djsbtn")
const mail = document.getElementById("mail")
const gh = document.getElementById("github")
const cord = document.getElementById("discord")
const tele = document.getElementById("telegram")
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const elm = document.getElementById("skills")
const list = document.getElementsByClassName("progress-bar")
window.addEventListener('DOMContentLoaded', function() {
	Array.from(list).forEach(function (element) {
			let val = element.getAttribute("val")
    	element.style.width = `${val}%`
	});
  document.addEventListener('scroll', function() {
		if (isInViewport(elm)) {
				Array.from(list).forEach(function (element) {
						let val = element.getAttribute("val")
    				element.style.width = `${val}%`
				});
		} else {
				Array.from(list).forEach(function (element) {
						let val = element.getAttribute("val")
    				element.style.width = `0%`
				});
		}
	})
terminal.onclick = function() {
	window.open("/", "_self")
}
home.onclick = function() {
	window.open("#", "_self")
}
skills.onclick = function() {
	window.open("#skills", "_self")
}
cont.onclick = function() {
	window.open("#holder", "_self")
}
cont2.onclick = function() {
	window.open("#holder", "_self")
}
luau.onclick = function() {
	window.open("https://luau-lang.org", "_blank")
}
nodejs.onclick = function() {
	window.open("https://nodejs.org/en", "_blank")
}
py.onclick = function() {
	window.open("https://www.python.org", "_blank")
}
djs.onclick = function() {
	window.open("https://discord.js.org/#/", "_blank")
}
express.onclick = function() {
	window.open("https://expressjs.com", "_blank")
}
mail.onclick = function() {
	window.open("mailto:kweeper@protonmail.com", "_blank")
}
gh.onclick = function() {
	window.open("https://github.com/kweeperdotjs", "_blank")
}
cord.onclick = function() {
	window.open("https://feds.lol/KweeperDotJs", "_blank")
}
tele.onclick = function() {
	window.open("https://t.me/NotKweeper", "_blank")
}
});

