window.addEventListener('DOMContentLoaded', function() {
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
})
