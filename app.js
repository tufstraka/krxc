//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const purchase = document.querySelector('.purchase button');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');

//Movement Animation Event
container.addEventListener('mousemove', (e) =>{
    
    let xAxis = (window.innerWidth/ 2 - e.pageX) / 18;
    let yAxis = (window.innerHeight/ 2 - e.pageY) / 18;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}); 
//Animate in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition='none';
    //popout
    title.style.transform = 'translateZ(160px)';
    sneaker.style.transform = 'translateZ(180px)';
    sizes.style.transform = 'translateZ(170px)';
    description.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(140px)';
})

//Animate Out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});