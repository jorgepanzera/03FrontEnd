import { movies } from "./data.js"

/*
let genreKey = 'Sci-Fi'

let result = []
for (let i=0; i < movies.length; i++){
  if ( movies[i].genre.includes(genreKey)  ) {
      result.push(movies[i])
  }
}

//let result = movies.find(o => o.genre.includes('Adventure'))
//let result = movies.includes('Adventure', 0)
*/

const findMoviesByGenre = (genreKey) => {
  let result = []
  for (let i=0; i < movies.length; i++){
    if ( movies[i].genre.includes(genreKey)  ) {
        result.push(movies[i])
    }
  }
  return result
}


window.addEventListener('DOMContentLoaded', () => {
  
  // obtener elementos de la pantalla
  const genreList = document.getElementById("genreDataList")
  const findButton = document.querySelector("#find-movies")
  const moviesFinded = document.getElementById("movies-found")

  // FALTAN ****** Validaciones de los inputs
  
  // listener para el boton de findMovies
  findButton.addEventListener('click', (event) => {
    event.preventDefault()

    const genreToFind = genreList.value
    
    let moviesResult = findMoviesByGenre(genreToFind)

    moviesFinded.innerHTML = moviesResult

  })

  /*
  const tweetButton = document.querySelector("#create-tweet-button")
  const titleInput = document.querySelector("#title-input")
  const descriptionInput = document.querySelector("#description-input")
  const tweetContainer = document.querySelector('.tweet-container')
  const allInputs = document.querySelectorAll('input')

  allInputs.forEach(input => {
    input.addEventListener('change', function(event) {
      if (event.target.value !== "") {
        input.classList.remove('is-invalid')
      }
    })
  })

  tweetButton.addEventListener('click', function(event) {
    event.preventDefault()

    const title = titleInput.value
    const description = descriptionInput.value

    if (title === "") {
      titleInput.classList.add('is-invalid')
    }

    if (description === "") {
      descriptionInput.classList.add('is-invalid')
    }

    if (title !== "" && description !== "") {
      titleInput.classList.remove('is-invalid')
      descriptionInput.classList.remove('is-invalid')

        tweetContainer.innerHTML = `
          <div class="title">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="tweet">
            <div class="info">
              <h4 id="tweet-title" class="name">${title}</h4>
              <p class="twitter-handle">@tweetoftheday</p>
            </div>
          </div>
          <div class="tweet">
            <p id="tweet-description">${description}</p>
          </div>
          <div class="time-and-date">
            <p>3:30 PM &middot; June 29, 2021 <span>Twitter for iPhone</span></p>
          </div>
          <div class="bottom-section d-flex justify-content-end">
            <div id="like-button" class="btn">Like <i class="fa fa-heart"></i></div>
          </div>
      `

      titleInput.value = ""
      descriptionInput.value = ""
      
    }
  })
  */
})
  
