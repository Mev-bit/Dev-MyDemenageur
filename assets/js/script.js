const slidePage = document.querySelector('.slidepage');
const firstNextBtn = document.querySelector('.nextBtn');

const prevBtnSec = document.querySelector('.prev-2');
const nextBtnSec = document.querySelector('.next-2');

const prevBtnThr = document.querySelector('.prev-3');
const nextBtnThr = document.querySelector('.next-3');

const prevBtnFour = document.querySelector('.prev-4');
const submitBtn = document.querySelector('.submit');

const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');

let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function(){
    var Dem_Heure = document.getElementById("Dem_Heure"); 
    var Dem_Inv = document.getElementById("Dem_Inv"); 
    console.log(Dem_Heure.checked);
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current++;
})

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current++;
})
nextBtnThr.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current++;
})
submitBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current++;

})

prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current --;
    
})

prevBtnThr.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current --;
})

prevBtnFour.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current --;
})

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
