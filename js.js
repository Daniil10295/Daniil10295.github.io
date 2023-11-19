var siteBlock = document.getElementById('site');
var waitBlock = document.getElementById('wait');

setTimeout(function() {
 siteBlock.classList.remove('hidden');
 waitBlock.classList.add('hidden')
}, 2000);
