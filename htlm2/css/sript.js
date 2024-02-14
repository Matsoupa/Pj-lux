const allhoverimages = document.querySelectorAll('.hover-container div img')
const imgcontainer = document.querySelector('img-container');

window.addEventListener('DOMContentLoaded', () =>{ allhoverimages [0].parentElement.classList.add('active');
});

allhoverimages.forEach((Image) => {
   Image.addEventListener('mouseover', () => {
    imgcontainer.querySelector('img').src = Image.src;
    resetActiveimg();
    Image.parentElement.classList.add('active');
   });
});

function resetActiveimg(){
    allhoverimages.forEach((img) => {
        img.parentElement.classList.remove()

    })
}

