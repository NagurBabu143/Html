const apiKey = "f9bc5cd7";
const searchBtn = document.getElementById("searchButton");
const movieInputField = document.getElementById("movieInput");
const movieInfo = document.getElementById("movieDetails");
const loadingIndicator = document.getElementById("loading");
const errorMessage = document.getElementById("error");

function showMovieDetails(movieData) {
    movieInfo.innerHTML = `
        <h2>${movieData.Title} (${movieData.Year})</h2>
        <p><strong>Genre:</strong> ${movieData.Genre}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
        <p><strong>Actors:</strong> ${movieData.Actors}</p>
    `;
    errorMessage.textContent = "";
}

function showError(message) {
    errorMessage.textContent = message;
    movieInfo.innerHTML = "";
}

async function fetchMovie(movieName) {
    loadingIndicator.style.display = "block";
    errorMessage.textContent = "";
    movieInfo.innerHTML = "";

    const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const movieData = await response.json();
    loadingIndicator.style.display = "none";

    if (movieData.Response === "True") {
        showMovieDetails(movieData);
    } else {
        showError("Movie not found. Please try again.");
    }
}


searchBtn.addEventListener("click", () => {
    const movieName = movieInputField.value.trim();
    if (movieName) {
        fetchMovie(movieName);
    } else {
        showError("Please enter a movie name.");
    }
});
