
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