

document.addEventListener('DOMContentLoaded', function(){
    let acordion = document.getElementsByClassName('acordion-container')
    
    for(let i=0; i< acordion.length; i++){
    acordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    console.log(acordion);
      })
         }
    })   
    

//     let currentPage = 1
// let totalPages


// function getUsers(page) {
//     fetch('https://reqres.in/api/users?page=' +page,{
//         method:'GET'
//     })

//     .then(function(response){
//         if(response.status !==200){
//             throw response.status
//         }
//            return response.json()
           
           

//     })

//     .then(function(responseData){
        
//         let fragment = document.createDocumentFragment()
//         totalPages = responseData.total_pages
        
        
//         responseData.data.forEach(function(item){
//             let li = document.createElement('li')
//             li.textContent =item.email
//             let image = document.createElement('img')
//             image.src =item.avatar
//             fragment.appendChild(li)
//             fragment.appendChild(image)
            
//         })


//         document.getElementById('ul_list').innerHTML =''

//         document.getElementById('ul_list').appendChild(fragment)


//     })

//     .catch(function(){
//         let container = document.getElementById('container')
//         let p = document.createElement('p')
//         p.textContent = "server error 404"
//         container.appendChild(p)
//     })

    
    
// }

// document.getElementById('loadprev').addEventListener('click',function(){
//     if(currentPage == 1){
//         return
//     }
//     currentPage -=1
//     getUsers(currentPage)

// })

// document.getElementById('loadnext').addEventListener('click',function(){
//     if(currentPage == totalPages){
//         return
//     }
//     currentPage +=1
//     getUsers(currentPage)

// })


// getUsers(currentPage)

let currentPage = 1
let totalPages




function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData) {
        let fragment = document.createDocumentFragment();
        totalPages = responseData.total_pages;
        
        responseData.data.forEach(function(item) {
            let li = document.createElement('li');

            // სურათი
            let image = document.createElement('img');
            image.src = item.avatar;

            // მეილი
            let email = document.createElement('p');
            email.textContent = item.email;

            // ელემენტების ჩამატება li-ში
            li.appendChild(image);
            li.appendChild(email);
            
            // li-ს დამატება fragment-ში
            fragment.appendChild(li);
        });

        // გასუფთავება და განახლება
        document.getElementById('ul_list').innerHTML = '';
        document.getElementById('ul_list').appendChild(fragment);
    })
    .catch(function() {
        let container = document.getElementById('container');
        let p = document.createElement('p');
        p.textContent = "server error 404";
        container.appendChild(p);
    });
}
document.getElementById('loadprev').addEventListener('click',function(){
    if(currentPage == 1){
        return
    }
    currentPage -=1
    getUsers(currentPage)

})

document.getElementById('loadnext').addEventListener('click',function(){
    if(currentPage == totalPages){
        return
    }
    currentPage +=1
    getUsers(currentPage)

})


getUsers(currentPage)