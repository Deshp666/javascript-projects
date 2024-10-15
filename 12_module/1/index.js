const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/1.png"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/2.png"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/3.jpg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/4.jpg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/5.jpg"
    }
];



function showPopup() {

    const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];


    const popup = document.getElementById('popup');
    const giftTitle = document.getElementById('gift-title');
    const giftIcon = document.getElementById('gift-icon');
    
    giftTitle.textContent = randomGift.title;
    giftIcon.src = randomGift.icon;


    popup.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#close-btn');

    btn.addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    setTimeout(showPopup, 3000);
});
