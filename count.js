function getSquere() {
    var input = document.getElementById('input');
    var number = Number(input.value);
    var square = number * number;
     var res = document.querySelector(".res");
     res.textContent = square;
    
}
 

