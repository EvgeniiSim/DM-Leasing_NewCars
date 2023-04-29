const tabItem = document.querySelectorAll('.options__list-tab');
const cars = document.querySelectorAll('.cars__cards-inner');
tabItem.forEach(function(element) {
    element.addEventListener('click', show);
});
function show(event) {
    const tabTagret = event.currentTarget;
    const content = tabTagret.dataset.content;

    tabItem.forEach(function(item) {
        item.classList.remove('options__list-tab-active');
    });
    tabTagret.classList.add('options__list-tab-active');
    cars.forEach(function(item) {
        item.classList.remove('cars__cards-inner-active')
    })
    cars.forEach(function(item) {
        console.log(item);
        console.log(tabTagret);
        if(item.classList.contains(content)) {
            item.classList.add('cars__cards-inner-active')
        }
    });
}
const menu = document.querySelector('.menu-icon');
menu.addEventListener('click', function () {
    this.classList.toggle('menu-icon-active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('body').classList.toggle('menu');
})