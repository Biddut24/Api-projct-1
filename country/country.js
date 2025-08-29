const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/independent?status=true")
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};

// call the function
loadCountries();

const displayCounties = (countries) => {
    const countriesDiv = document.getElementById('countries')

    countries.forEach(country=>{
        const div = document.createElement('div')
         div.classList.add('country')
        div.innerHTML = `
        <img src="${country?.flags?.png}" alt="">
        <h2>Name: ${country?.name?.official} </h2>
        <p>population: ${country.population}</p>
        <p>Area: ${country?.area}</p>
        <p>Capital: ${country.capital}</p>
        <p>Languages: ${country?.languages?.eng}</p>
        <p class="region">Region: ${country.region}</p>
        <button>See More</button>
        `
     countriesDiv.appendChild(div)
     
     


    })
    
}