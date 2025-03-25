

document.addEventListener('DOMContentLoaded', function(){
    let acordion = document.getElementsByClassName('acordion-container')
    
    for(let i=0; i< acordion.length; i++){
    acordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    console.log(acordion);
      })
         }
    })   
    