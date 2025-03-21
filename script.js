"use strict"

let navigation = document.getElementById('navigation')
let burger =document.getElementById('burger')
burger.addEventListener('click', function(){
    if(navigation.classList.contains('activeNavigation')){
        navigation.classList.remove('activeNavigation')
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>'

    }else{
         navigation.classList.add('activeNavigation')
        burger.innerHTML = '<i class="fas fa-times"></i>'

    }
})



let data = [
    {
        id: 1,
        title:'my school',
        imageUrl: 'http://salibauri2.edu.ge/images/pansioni/1.JPG'
    },
    {
        id: 2,
        title:'School alley',
        imageUrl: 'https://salibauri2.edu.ge/cache/widgetkit/gallery/1/544e8f8950b34-b5b9104b2e.jpg',
        
    },
    {
        id: 3,
        title:'Winners of the Battle of Brains',
        imageUrl: 'https://www.etaloni.ge/gallery/ertretyr.jpg',
        
    },
    {
        id:4,
        title:'Winner of the Educational-Creative Conferenceflower',
        imageUrl:'https://www.etaloni.ge/gallery/88309salibaurismeoreeeee.jpg'

    }

    
   
];
let sliderContainer = document.getElementById('slider')
let arrowLeftBtn =document.getElementById('arrow-left')
let arrowRightBtn=document.getElementById('arrow-right')

let sliderIndex = 0

function createImg (item){
    sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
    sliderContainer.style.backgroundRepeat= 'no-repeat'
    sliderContainer.style.backgroundSize= 'cover'
 }
 
function createH2tag(item){
    let h2tag = document.createElement('h2')
    h2tag.innerText =item.title
    h2tag.classList.add('slider-title')
    return h2tag

}


function setSlider(){
    sliderContainer.innerText=''
     createImg(data[sliderIndex])
    let title= createH2tag(data[sliderIndex])
    let dots = createDots()

    sliderContainer.appendChild(title)
    sliderContainer.appendChild(dots)
    let dotElements = dots.querySelectorAll('.dot')

    dotElements[sliderIndex].classList.add('active') 
}

function arrowLeft(){
    if(sliderIndex === 0){
        sliderIndex = data.length-1
    }else{
        sliderIndex --
    }
    setSlider()
}

function arrowRight(){
    if(sliderIndex === data.length-1){
        sliderIndex = 0
    }else{
        sliderIndex ++
    }
    setSlider()
}
arrowLeftBtn.addEventListener('click',arrowLeft)
arrowRightBtn.addEventListener('click',arrowRight)

  setInterval(()=>{
    arrowRight()
   },3000)

function createDots(){
    let dots =document.createElement('div')
    dots.classList.add('dots')
    data.forEach((element)=>{
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dot.setAttribute('data-id',element.id-1)
        
        dot.onclick= function(event){
           let id = event.target.getAttribute('data-id')
           sliderIndex = id
           setSlider()
        }
        dots.appendChild(dot)

    })

    return dots

}

setSlider()



document.addEventListener('DOMContentLoaded', function(){
    let acordion = document.getElementsByClassName('acordion-container')
    
    for(let i=0; i< acordion.length; i++){
    acordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    console.log(acordion);
      })
         }
    })   
    




//     let currentPage = 1;
// let totalPagesAp;

// function getUsers(page) {
//     let requist = new XMLHttpRequest();
//     requist.addEventListener('load', render);
//     requist.addEventListener('error', errorRender);

//     requist.open('GET', 'https://reqres.in/api/users?page=2' + page);

//     requist.send();
// }


// function render() {
//     let response = this.responseText;
//     let responseData = JSON.parse(response);
//     let fragment = document.createDocumentFragment();

//     responseData.data.forEach(item => {
//         let li = document.createElement('li');
//         li.classList.add('liInfo');
//         let pEmail=document.createElement('p');
//         pEmail.textContent= item.email;

//         let imgUser = document.createElement('img');
//         imgUser.src = item.avatar;
//         imgUser.classList.add('image-block');

//         li.appendChild(imgUser);
//         li.appendChild(pEmail);
//         li.classList.add('li-item');
//         fragment.appendChild(li);
    
// });

// document.getElementById('ul-list').innerHTML = ' '; 
//        document.getElementById('ul-list').appendChild(fragment);
//        totalPagesAp=responseData.total_pages;

//     }

//     function errorRender(){
//         let p = document.createElement('p');
//         p.textContent = 'server error';
//         document.getElementById('user-email').appendChild(p);
//     }

//     document.getElementById('loadPrev').addEventListener('click', function(){
//         if(currentPage == 1){
//             return;
//         }
//         currentPage -=1;
//         getUsers(currentPage);
        
//     });

//     document.getElementById('loadNext').addEventListener('click', function(){
//         if(currentPage == totalPagesAp){
//             return;
//         }
//         currentPage +=1;
//         getUsers(currentPage);
//     });

// getUsers(currentPage);