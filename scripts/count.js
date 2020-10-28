var count = document.querySelector(".countButton");
count.addEventListener("click",function () {
    var input = document.getElementById('input');
    var number = Number(input.value);
    var square = number * number;
     var res = document.querySelector(".res");
     res.textContent = square;
     res.classList.add("")
});

 

