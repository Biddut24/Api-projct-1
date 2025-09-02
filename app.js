const output = document.getElementById("output");

// Show Users from Random User API
document.getElementById("usersBtn").addEventListener("click", () => {
  output.innerHTML = "<p>Loading users...</p>";
  fetch("https://randomuser.me/api/?results=12")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = data.results.map(user => `
        <div class="card">
          <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Gender: ${user.gender}</p>
          <img src="${user.picture.medium}" alt="User Image">
        </div>
      `).join("");
    })
    .catch(() => {
      output.innerHTML = "<p style='color:red;'>Failed to load users!</p>";
    });
});





// Show Countries from RestCountries API
document.getElementById("countryBtn").addEventListener("click", () => {
  output.innerHTML = "<p>Loading countries...</p>";
  fetch("https://restcountries.com/v3.1/independent?status=true")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = data.slice(0, 20).map(country => `
        <div class="card">
          <h3>${country.name.common}</h3>
          <p>Capital: ${country.capital ? country.capital[0] : "N/A"}</p>
          <p>Region: ${country.region}</p>
          <p>Population: ${country.population.toLocaleString()}</p>
          <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        </div>
      `).join("");
    })
    .catch(() => {
      output.innerHTML = "<p style='color:red;'>Failed to load countries!</p>";
    });
});
