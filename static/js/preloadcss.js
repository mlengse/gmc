document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('link[rel="preload"][as="style"]').forEach(e => {
		e.rel = 'stylesheet';
	});
});