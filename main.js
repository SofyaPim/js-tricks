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


  function showRegForm() {
      let  elem = document.querySelector('.reg-auth__form');
elem.style.display = "block";

  }
  
  function SubmitForm() {
    let  elem = document.querySelector('.reg-auth__form');
    elem.style.display = "none";
  } 
  function CloseForm() {
    let  elem = document.querySelector('.reg-auth__form');
    elem.style.display = "none";
  }
  function buttonClick() {
    var input = document.getElementById('input');
    var number = Number(input.value);
    var square = number * number;
    alert(square);
}
 