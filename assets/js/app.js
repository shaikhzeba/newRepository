let cl = console.log;

const addMovieModalbtn = document.getElementById("addmovieModalbtn");
const addModal = document.getElementById("add-modal");
const backDrop = document.getElementById("backdrop");
const myClose = Array.from(document.querySelectorAll(".myclose"));
const addMovie = document.getElementById("addmovie");
const title = document.getElementById("title");
const image = document.getElementById("image");
const rating = document.getElementById("rating");
const moviesInfo = document.getElementById("moviesInfo");

let movieArray = [];



const toggleBackdrop = () =>{
    backDrop.classList.toggle('visible')
}

const toggleMovieModal =() =>{
    addModal.classList.toggle('visible')
    toggleBackdrop()
}

const onAddMovieHandler = () =>{
   
    let movieObj = {
        title : title.value ,
        url : image.value ,
        rating : rating.value
    }
    movieArray.push(movieObj)
        cl("Movie added!!!" , movieObj)
        let template = '';
        movieArray.forEach((mov) => {
            template +=` 
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <figure>
                                     <img class="img-fluid" src="${mov.url}" alt="">
                                <figcaption>
                                    <p class="title">${mov.title}</p>
                                    <p class="rating">${mov.rating}</p>
                                </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>`
});
moviesInfo.innerHTML = template;
title.value=" ";
image.value=" ";
rating.value=" ";


}    

addMovieModalbtn.addEventListener('click',toggleMovieModal);
backDrop.addEventListener('click',toggleMovieModal);
myClose.forEach((close)=>{
    close.addEventListener('click',toggleMovieModal)
});
addMovie.addEventListener("click", onAddMovieHandler);