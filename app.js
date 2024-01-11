// local reviews data
const reviews =[
    {
        id: 1,
        name: 'Stephanie Anthonia',
        job: 'full stack developer',
        img: './images/download (8).jpg',
        text: "I'm a frontend and backend developer. Developing a website is done using html, css, and javascript. We can also use frameworks such as react for web development. For the development of games and artificial intelligence(AI) python is the programming language used.",
    },

    {

        id: 2,
        name: 'Phoebe Harpman',
        job: 'UI/UX designer',
        img: './images/download 9.jpg',
        text: 'UX design focuses on creating a seamless and meaningful user experience by understanding user needs, conducting research, and designing intuitive interfaces, while UI design focuses on the visual, interactive elements of a product to create aesthetically-pleasing interfaces.',
    },

    {
        id: 3,
        name: 'Andrew Smith',
        job: 'App developer',
        img: './images/download 10.jpg',
        text: 'Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones. Such software applications are specifically designed to run on mobile devices, taking numerous hardware constraints into consideration.',
    },
    
    {
    id: 4,
    name: 'Philip Jep',
    job: 'CEO',
    img:'./images/download (7).jpg',
    text: 'Peptech was first created in the 2020, the company grew fast in advancement and technology which made it the award winning company in the year 2024. We teach students programming languages and we build softwares and AI applications. We are still a new company but we have achieved a lot in the last few years. For easy understanding of programming languages, apply to peptech now inorder to learn. ' ,
  },
];

//select items
const img = document.getElementById('person-img');
const author  = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

// show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
     currentItem++;
     if (currentItem > reviews.length - 1) {
        currentItem = 0;  
     }
     showPerson();
});

// show prev person

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
       currentItem = reviews.length - 1;  
    }
    showPerson();
});

// Show random person
randomBtn.addEventListener("click", function (e) {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});