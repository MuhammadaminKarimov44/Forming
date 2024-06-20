function shape() {
    let width = document.getElementById('width');
    let height = document.getElementById('height');
    let color = document.getElementById('color');
    let bradius = document.getElementById('bradius');
    let result = document.querySelector('.result');
    let tezlik = document.getElementById('tezlik');

    if (width.value > 600 || height.value > 500) {
        alert("Kichikroq son kiriting")
    } else {
        result.style.background = color.value;
        result.style.width = width.value + 'px';
        result.style.height = height.value + 'px';
        result.style.borderRadius = bradius.value;
        result.style.tezlik = tezlik.value;
        result.style.transition = tezlik.value
    }
}
