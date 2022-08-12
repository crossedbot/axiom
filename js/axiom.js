'use strict';

window.onload = () => {
  let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  console.log("Page load time: " + loadTime / 1000 + " ms");
}

function docReady(fn) {
	let readyState = document.readyState;
	if (readyState === 'complete' || readyState === 'interactive') {
		setTimeout(fn, 1);
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function handleModal(modal, openBtn, closeBtn) {
  openBtn.onclick = function() {
    modal.style.display = 'flex';
  }
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

function displayAlert(type, msg, parentId) {
	let alert = document.createElement('div');
  type = type.toLowerCase();
	alert.innerHTML = msg;
  alert.classList.add('alert');
  switch (type) {
    case 'info':
    case 'danger':
    case 'success':
    case 'warning':
      alert.classList.add(`alert--${type}`);
      break;
  }
  parent = document.getElementById(parentId);
  for(;parent.firstChild !== null;) {
    parent.removeChild(parent.firstChild);
  }
  parent.appendChild(alert);
}
