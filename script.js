document.addEventListener('DOMContentLoaded', function() {
    let selectedColor = 'white';
    
    const sizeElements = document.querySelectorAll('.size');
    const colorElements = document.querySelectorAll('.color');
    const mainImage = document.getElementById('main-image');
    sizeElements.forEach(size => {
        size.addEventListener('click', function() {
            sizeElements.forEach(s => s.classList.remove('selected'));

            this.classList.add('selected');
            selectedSize = this.getAttribute('data-size');
        });
    });
    
    colorElements.forEach(color => {
        color.addEventListener('click', function() {
            colorElements.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            selectedColor = this.getAttribute('data-color');
            mainImage.src = `images/${selectedColor}.png`;
        });
    });
});