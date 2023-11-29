var siteBlock = document.getElementById('site');
var waitBlock = document.getElementById('wait');

setTimeout(function() {
 siteBlock.removeAttribute('hidden');
 waitBlock.setAttribute('hidden', '')
}, 2000);
