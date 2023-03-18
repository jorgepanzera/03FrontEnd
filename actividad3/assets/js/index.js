import { movies } from "./data.js";

const findMoviesByGenre = (genreKey) => {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes(genreKey)) {
      result.push(movies[i]);
    }
  }
  return result;
};

const generateMoviesTable = (filteredMovies, cantToFind) => {
  // Obtener titulos de las columnas
  let col = [];
  for (let i = 0; i < filteredMovies.length; i++) {
    for (let key in filteredMovies[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Crear Table
  const table = document.createElement("table");

  // Crear table header row usando los titulos obtenidos
  let tr = table.insertRow(-1); // table row.

  for (let i = 0; i < col.length; i++) {
    if (i !== 4) {
      let th = document.createElement("th"); // table header.
      th.innerHTML = col[i].toLocaleUpperCase();
      tr.appendChild(th);
    }
  }

  // Agregar rows con los datos de las peliculas
  // hasta la cantidad elegida, o todos
  let cantMovies = filteredMovies.length;
  if (cantToFind < 1000) {
    cantMovies = cantToFind;
  }

  for (let i = 0; i < cantMovies; i++) {
    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      if (j !== 4) {
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = filteredMovies[i][col[j]];
      }
    }
  }

  return table;
};

function wait(waitTime) {
  // implementa un wait

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // resolve the promise con el waitTime
    }, waitTime); // waitTime (miliseconds)
  });
}

const PlayWithElements = async (title, name) => {
  // ** IDEA  - que el titulo vaya cambiando de color/text
  // - We are searching your movies !! orange
  // - You take care of Popcorn !! yellow
  // - OK {name}, here it is !!  green like table ?

  console.log(title);

  title.innerHTML = "We are searching your movies...";

  await wait(1500);

  title.innerHTML = "You can take care of Popcorn !!";

  await wait(1500);

  title.innerHTML = `OK ${name}, enjoy !!`;
};


const cleanScreen = () => {
  divShowMovies.innerHTML = ""
  genreList.value = "Choose"
  cantMoviesWanted.value = "0"
  findButton.value = "Find Movies"
}

window.addEventListener("DOMContentLoaded", () => {
  // obtener elementos de la pantalla
  const genreList = document.getElementById("genreDataList");
  const findButton = document.querySelector("#find-movies");
  const divShowMovies = document.getElementById("movies-found");
  const mainTitle = document.getElementById("maintitle");
  const name = document.getElementById("name-input");
  const cantMoviesWanted = document.getElementById("countDataList");

  // FALTAN ****** Validaciones de los inputs

  // listener para el boton de findMovies
  findButton.addEventListener("click", async (event) => {
    event.preventDefault();

    divShowMovies.innerHTML = "";

    const genreToFind = genreList.value;
    const cantMoviesToFind = Number(cantMoviesWanted.value);

    console.log(cantMoviesToFind);

    await PlayWithElements(mainTitle, name.value);

    let moviesResult = findMoviesByGenre(genreToFind, cantMoviesToFind);

    // Agregar data al div container
    

    let moviesTable = generateMoviesTable(moviesResult, cantMoviesToFind);

    moviesTable.classList.add("movie-table"); // aspecto
    moviesTable.classList.add("mx-auto"); // margenes
    moviesTable.style.overflowX = "auto"; // responsive

    divShowMovies.appendChild(moviesTable);

  });

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
});
