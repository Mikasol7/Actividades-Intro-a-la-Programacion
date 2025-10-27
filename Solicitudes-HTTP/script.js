fetch(`https://ghibliapi.vercel.app/films`)
  .then(response => response.json())
  .then(data => {
    const listaPelis = document.getElementById("movie-list");
    listaPelis.innerHTML = "";

    data.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Año:</strong> ${movie.release_date}</p>
        <p>${movie.description.substring(0, 200)}...</p>
      `;
      listaPelis.appendChild(card);
    });
  })

  
