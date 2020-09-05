let heading =  document.getElementById('heading');
let changeColorBtn = document.getElementById('changeColorBtn');
let colorInput = document.getElementById('colorInput');
// console.log(heading.textContent);



// heading.addEventListener(event,function);
// heading.addEventListener('click',function(){
//     heading.style.color = "blue";
// });

// changeColorBtn.addEventListener('click', function(){
//     heading.style.color = "red";
// })

changeColorBtn.addEventListener('click',function(){
    let val = colorInput.value;
    // heading.style.color = val;
    // heading.setAttribute("class",val);
});

