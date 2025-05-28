const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const liveprojectBtn = document.querySelector('.liveproject-link');
const websiteBtn = document.querySelector('.website-link');
const miniprojectBtn = document.querySelector('.miniproject-link');
const otherProjectBtn = document.querySelector('.other-link');
const contentLiveContainer = document.querySelector('.content-live');
const websiteContainer = document.querySelector ('.website-project');
const miniprojectContainer = document.querySelector('.mini-project');
const otherprojectContainer = document.querySelector('.other-project');






//Event Listener
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})


liveprojectBtn.addEventListener('click', liveproject);
websiteBtn.addEventListener('click', websiteproject);
miniprojectBtn.addEventListener('click', miniproject);
otherProjectBtn.addEventListener('click', otherproject);





//Function

function liveproject (a){
    websiteContainer.style.display = 'none';
    miniprojectContainer.style.display = 'none';
    otherprojectContainer.style.display = 'none';
    liveprojectBtn.style.color = '#4fb8dd' ;
    contentLiveContainer.style.display = 'flex';
    miniprojectBtn.style.color = 'white';
    websiteBtn.style.color = 'white';
    otherProjectBtn.style.color = 'white';

}



function websiteproject (b){
    
    websiteContainer.style.display = 'flex';
    miniprojectContainer.style.display = 'none';
    otherprojectContainer.style.display = 'none';
    contentLiveContainer.style.display = 'none';
    websiteBtn.style.color = '#4fb8dd';
    liveprojectBtn.style.color = 'white' ;
    miniprojectBtn.style.color = 'white';
    otherProjectBtn.style.color = 'white';
}


function miniproject (c) {
    websiteContainer.style.display = 'none';
    miniprojectContainer.style.display = 'flex';
    otherprojectContainer.style.display = 'none';
    contentLiveContainer.style.display = 'none';
    miniprojectBtn.style.color = '#4fb8dd';
    liveprojectBtn.style.color = 'white' ;
    websiteBtn.style.color = 'white';
    otherProjectBtn.style.color = 'white';
}


function otherproject (d) {

    websiteContainer.style.display = 'none';
    miniprojectContainer.style.display = 'none';
    otherprojectContainer.style.display = 'flex';
    contentLiveContainer.style.display = 'none';
    miniprojectBtn.style.color = 'white';
    liveprojectBtn.style.color = 'white' ;
    websiteBtn.style.color = 'white';  
    otherProjectBtn.style.color = '#4fb8dd';


}


    
