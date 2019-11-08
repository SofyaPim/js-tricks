//смена картинки
function go(){
    elem = document.getElementById('test');
    if(elem.src = 'math-dog.jpg'){
        elem.src = 'math-math-dog.jpg';
    
    }
}

//добавления параграфа
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'Ой, кто это?!';
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }