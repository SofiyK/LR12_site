document.addEventListener('DOMContentLoaded', function() {
    // Переменные для хранения выбранных значений
    let selectedSize = null;
    let selectedColor = 'black';
    
    // Элементы DOM
    const sizeElements = document.querySelectorAll('.size');
    const colorElements = document.querySelectorAll('.color');
    const mainImage = document.getElementById('main-image');
    const addToCartButton = document.querySelector('.add-to-cart');
    
    // Обработчики для размеров
    sizeElements.forEach(size => {
        size.addEventListener('click', function() {
            // Удаляем класс selected у всех размеров
            sizeElements.forEach(s => s.classList.remove('selected'));
            
            // Добавляем класс selected к выбранному размеру
            this.classList.add('selected');
            selectedSize = this.getAttribute('data-size');
        });
    });
    
    // Обработчики для цветов
    colorElements.forEach(color => {
        color.addEventListener('click', function() {
            // Удаляем класс active у всех цветов
            colorElements.forEach(c => c.classList.remove('active'));
            
            // Добавляем класс active к выбранному цвету
            this.classList.add('active');
            selectedColor = this.getAttribute('data-color');
            
            // Меняем изображение
            mainImage.src = `images/${selectedColor}.jpg`;
        });
    });
    
    // Обработчик для кнопки "Добавить в корзину"
    addToCartButton.addEventListener('click', function() {
        if (!selectedSize) {
            alert('Пожалуйста, выберите размер');
            return;
        }
        
        alert(`Товар добавлен в корзину!\nРазмер: ${selectedSize}\nЦвет: ${selectedColor}`);
        
        // Здесь можно добавить логику для реального добавления в корзину
        // Например, отправить данные на сервер или сохранить в localStorage
    });
});