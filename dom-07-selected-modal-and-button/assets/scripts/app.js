const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs =  addMovieModal.querySelectorAll('input');
movies = []

function toggleBackdrop() {
    backdrop.classList.toggle('visible')
};
function toggleMovieModal() { 
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
    
};

// function clearMovieInputs() {
//     for (userInput of userInputs){
//         userInput.value = ' ';
//     }
    
// }

function addMovieHandler(){
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (titleValue.trim() === " " &&
    imageUrlValue.trim() === " " &&
    ratingValue.trim() === " " &&
    +ratingValue < 1 &&
    +ratingValue > 5
   ){
    alert("Please enter valid values (rating between 1 and 5).");
    return;
   }
   const newMovie = {
    title  : titleValue,
    image : imageUrlValue,
    rating : ratingValue
   };

movies.push(newMovie)
console.log(movies)
toggleMovieModal();
clearMovieInputs();
}
function backdropClickHandler(){
    toggleMovieModal();
};
function cancleAddMovie() {
    toggleMovieModal(); 
}
startAddMovieButton.addEventListener('click',toggleMovieModal)
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancleAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler);