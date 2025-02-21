alert('movie');
document.body.style.backgroundColor = 'red';

const movies = [
    { title: "Baahubali: The Beginning", description: "A story of a prince who embarks on a journey to reclaim his rightful throne", Year: "2015" },
    { title: "RRR", description: "An epic action drama set in the 1920s about two revolutionaries", Year: "2022" },
    { title: "Mahanati", description: "A biographical film about the life of the legendary actress Savitri", Year: "2018" },
    { title: "Ala Vaikunthapurramuloo", description: "A family drama revolving around a man who is raised by a rich family, only to discover his true roots", Year: "2020" },
    { title: "Arjun Reddy", description: "A raw, intense love story of a troubled surgeon dealing with heartbreak", Year: "2017" },
    { title: "Eega", description: "A unique revenge tale where the protagonist is reincarnated as a housefly", Year: "2012" },
    { title: "Kshana Kshanam", description: "A thrilling action film that combines romance and suspense", Year: "1991" }
];

const movieContainer = document.getElementById('movie-container');

let movieHTML = "<ul>";
movies.forEach(movie => {
    movieHTML += `<li style="color: white; "><strong>${movie.title}</strong>: ${movie.description}, ${movie.Year}</li>`;
});
movieHTML += "</ul>";

movieContainer.innerHTML += movieHTML;
