let slider = document.getElementById('my-slider-id');
let price = document.getElementById('cost');
let views = document.getElementById('views-digit');

slider.oninput = function() {
    price.innerHTML = this.value;
    if (price.innerHTML == 8) {
        views.innerHTML = 10 + 'K';
    }
    if (price.innerHTML == 12) {
        views.innerHTML = 50 + 'K';
    }
    if (price.innerHTML == 16) {
        views.innerHTML = 100 + 'K';
    }
    if (price.innerHTML == 24) {
        views.innerHTML = 500 + 'K';
    }
    if (price.innerHTML == 36) {
        views.innerHTML = 1 + 'M';
    }
}

