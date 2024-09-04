const btn = document.querySelector('.icons')
let div = document.querySelector(".nevbarmenu")
let active = document.querySelector(".active")
let display = true;

function toggldiv (){

   if(display === true){
        div.style.visibility = "visible";
        display = false;
   }else{
    div.style.visibility = 'hidden'
      display = true;
   }
   
    
}

    
// function hide (){
//    div.style.visibility = 'hidden'
// }


btn.addEventListener("click", () => {
    
   toggldiv()
    
})

div.addEventListener('click', () => {
   div.style.visibility = 'hidden';
   display = true
});