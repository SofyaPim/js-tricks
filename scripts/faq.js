function ready(){
    let quest =  document.querySelectorAll(".faq-quest");
  
 
    quest.forEach((item) => {
         item.addEventListener("click", (e) => {
           
             if(item.classList.contains("inactive-quest")){
                 
                 item.classList.toggle("active-quest");
                
                 item.nextElementSibling.classList.toggle("displayNone");
               
             }else {
                 item.classList.toggle("inactive-quest");
                 item.nextElementSibling.classList.toggle("displayNone");
                 
                 
             }
             
 
         })
 
     })
     return false;
 }
 
 
 if (document.readyState == 'loading') {
   
     document.addEventListener('DOMContentLoaded', ready);
   } else {
     
    ready();
   }
 