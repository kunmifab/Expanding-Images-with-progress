
const allLabels = document.querySelectorAll(".label");


//for clicking on the image to change
// allLabels.forEach(function(singleLabel){
//     singleLabel.addEventListener('click', function(){
//         removeOtherActiveClasses();
//         singleLabel.classList.add('active');
//     })
// })

function removeOtherActiveClasses() {
    allLabels.forEach(function(singleLabel){
    singleLabel.classList.remove('active');
})
}

//for the steps progress bar
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const eachLoad = document.querySelectorAll('.loading');
const progress = document.querySelector('.moving')
let currentActiveLoad = 1;


nextBtn.addEventListener('click', function(){
    currentActiveLoad++
    if(currentActiveLoad > eachLoad.length){
        currentActiveLoad = eachLoad.length;
    } else if(currentActiveLoad > allLabels.length){
        currentActiveLoad = allLabels.length;
    } 

    
   

    
    
update()


    

})


prevBtn.addEventListener('click', function(){
    currentActiveLoad--
    if(currentActiveLoad < 1){
        currentActiveLoad = 1;
    }

    update()


})

function update() {
eachLoad.forEach(function(each, idx){
    if (idx < currentActiveLoad){
    each.classList.add('active');
    
   } else {
       each.classList.remove('active');
   }
})

allLabels.forEach(function(singleLabel, idx){
    if (idx < currentActiveLoad){
        removeOtherActiveClasses();
    singleLabel.classList.add('active');
    
   } else {
       singleLabel.classList.remove('active');
   }
})

const allActives =document.querySelectorAll('.active');
progress.style.width = (allActives.length - 2) / (eachLoad.length - 1) * 100 + '%'



if (currentActiveLoad === 1){
    prevBtn.disabled = true;
} else if (currentActiveLoad === eachLoad.length) {
    nextBtn.disabled = true;
}
else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}


};





