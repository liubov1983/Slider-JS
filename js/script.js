let data = [{
    city: 'Rostov-on-Don',
    name: 'LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    img: 'img/image1.jpg'
}, {
    city: 'Sochi',
    name: 'Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    img: 'img/image2.jpg'
}, {
    city: 'Rostov-on-Don',
    name: 'Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    img: 'img/image3.jpg'
}]

const prevArrow = document.querySelector('.nav-button-left');
const nextArrow = document.querySelector('.nav-button-right');
const image = document.querySelector('.project-img');
const sliderTabs = document.querySelectorAll('.project-link');
const sliderDots = document.querySelectorAll('.nav-dots');
const projectCity = document.querySelector('.project-city');
const projectName = document.querySelector('.project-name');
const projectArea = document.querySelector('.project-area');
const projectTime = document.querySelector('.project-time');
const projectCost = document.querySelector('.project-cost');

let currentIndex = 0;

function changeContent(index) {
    image.src = data[index].img;
    projectCity.textContent = data[index].city;
    projectName.textContent = data[index].name;
    projectArea.textContent = data[index].area;
    projectTime.textContent = data[index].time;
    projectCost.textContent = data[index].cost;
}

function showNextProject() {
    currentIndex++;
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }
    changeContent(currentIndex);
    changeDot(currentIndex);
    changeTab(currentIndex);
}

function showPrevProject() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = data.length - 1;
    }
    changeContent(currentIndex);
    changeDot(currentIndex);
    changeTab(currentIndex);
}

function changeDot(index) {
    sliderDots.forEach(dot => dot.classList.remove('active'));
    sliderDots[index].classList.add('active');
}

function changeTab(index) {
    sliderTabs.forEach(tab => tab.classList.remove('active'));
    sliderTabs[index].classList.add('active');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeContent(currentIndex);
        changeDot(currentIndex);
        changeTab(currentIndex);    
    })
})

sliderTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        currentIndex = index;
        changeContent(currentIndex);
        changeTab(currentIndex);
        changeDot(currentIndex);    
    })
})

changeContent(currentIndex);
nextArrow.addEventListener('click', showNextProject);
prevArrow.addEventListener('click', showPrevProject);
