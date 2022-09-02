/**
 * Helpers
 *
 */

const arrayToUnorderedList = function(list) {
	if (typeof list === 'undefined') list = [];
	return '<ul>' + list.map(item => `<li>${item}</li>`).join('') + '</ul>';
};

const undefinedNumberIsZero = num => {
	return typeof num === 'undefined'
		? 0
		: num;
};

const numberPrefix = function(num, prefix = '') {
	return '<p>' + prefix + undefinedNumberIsZero(num) + '</p>';
};

const numberSuffix = function(num, suffix = '') {
	return '<p>' + undefinedNumberIsZero(num) + suffix + '</p>';
};

const arrayLength = function(arr) {
	return typeof arr !== 'undefined'
		? arr.length
		: '-';
};

const stringFormatter = function(str, suffix = '') {
	return '<p>' + str + suffix + '</p>';
};

const setContent = (id, html) => {
	document.querySelector('#' + id).innerHTML = html;
};

const renderAnswer = (id, answer, renderer, args = []) => {
	const data = typeof answer === 'function'
		? answer()
		: answer;

	return typeof renderer !== 'undefined'
		? setContent('answer-' + id, renderer(data, args))
		: setContent('answer-' + id, data);
};

function animateCSS(element, animationName, callback) {
	const node = document.querySelector(element)
	node.classList.add('animated', animationName)

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName)
		node.removeEventListener('animationend', handleAnimationEnd)

		if (typeof callback === 'function') callback()
	}

	node.addEventListener('animationend', handleAnimationEnd)
}
