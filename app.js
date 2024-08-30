const btn = document.querySelector('.icons')
let div = document.querySelector(".nevbarmenu")
let active = document.querySelector(".active")
let display = 0;

function toggldiv (){

   if(display === 1){
        div.style.visibility = "visible";
        display = 0;
   }else{
    div.style.visibility = 'hidden'
      display = 1;
   }


    
}

    


btn.addEventListener("click", () => {
    console.log("hi");
    
   toggldiv()
    
})