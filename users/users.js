function loadUesers() {
  fetch("https://randomuser.me/api/?results=200")
    .then((res) => res.json())
    .then((data) => showUserDetails(data?.results));
}

loadUesers();

function showUserDetails(users) {
  const uiDiv = document.getElementById("Users");
  for (const user of users){
    console.log(user);
    
    const div = document.createElement("div");
    div.classList.add('user')
    div.innerHTML = `
       <h3>Name:${user?.name?.title}: ${user?.name?.first} ${user?.name?.last}</h3>
       <p>Email: ${user?.email}</p>
       <P>Phone: ${user?.phone}</p>
       <P>Gender: ${user?.gender}</p>
       <p>Location: ${user?.location?.state} City:${user.location.city}</p>
       <img src="${user?.picture?.large}" alt="">
        `;
        uiDiv.appendChild(div)

       
      
  }
}