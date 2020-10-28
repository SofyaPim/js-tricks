function go(){
    elem = document.getElementById('theme');
    // elem.className = (elem.className == 'Background' ? 'newBackground' : 'Background');
    // the code above  rewrite classList, but we need only add
   if(elem.classList.contains('Background')){
    elem.classList.remove('Background');
    elem.classList.add('newBackground');
   }else{
    elem.classList.remove('newBackground');
    elem.classList.add('Background');
   }

    
}
