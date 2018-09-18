


// Show and Hide Mobile Nav

var headerNav = document.getElementsByClassName('Header__nav')[0];
var mobileBars = document.getElementsByClassName('Header__nav-mobile-open')[0];
var mobileTimes = document.getElementsByClassName('Header__nav-mobile-close')[0];

function showMobileNav() {
	headerNav.classList.add('nav--open');
}

function hideMobileNav() {
	headerNav.classList.remove('nav--open');
}

mobileBars.onclick = showMobileNav;
mobileTimes.onclick = hideMobileNav;
