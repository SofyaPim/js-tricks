
const capture__wrap = document.querySelector('.capture__wrap');
const capture__wrap__div = document.querySelector('.capture__wrap__div');
const capture__wrap__div__ul = document.querySelector('.capture__wrap__div__ul');
const capture__wrap__div__li = document.querySelector('.capture__wrap__div__li');


const bubble__wrap = document.querySelector('.bubble__wrap');
const bubble__wrap__div = document.querySelector('.bubble__wrap__div');
const bubble__wrap__div__ul = document.querySelector('.bubble__wrap__div__ul');
const bubble__wrap__div__li = document.querySelector('.bubble__wrap__div__li');
  let pause = 300;

 //capture(погружение/захват)- первыми происходят внешние события
 capture__wrap.addEventListener('click', callback, true);
 capture__wrap__div.addEventListener('click', callback, true);
 capture__wrap__div__ul.addEventListener('click', callback, true);
 capture__wrap__div__li.addEventListener('click', callback, true);
//bubble (всплытие)- первыми происходят вложенные события, затем всплывают в направлении внешних элементов
bubble__wrap.addEventListener('click', callback, false);
bubble__wrap__div.addEventListener('click', callback, false);
bubble__wrap__div__ul.addEventListener('click', callback, false);
bubble__wrap__div__li.addEventListener('click', callback, false);
function callback(event) {
     var ms = (event.timeout = event.timeout + pause || 0);
    var target = event.currentTarget;
    setTimeout(function () {
        target.classList.add('highlight');
        setTimeout(function () {
            target.classList.remove('highlight');

        },pause)
        
    },ms)
    
}