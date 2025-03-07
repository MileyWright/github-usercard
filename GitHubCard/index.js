/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
 

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function cardCreator(user) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const link = document.createElement('a');
  const profileAddress = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const graph = document.createElement('div')

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(profileAddress);
 
  cardInfo.appendChild(profileAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // graph.appendChild(card);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  graph.classList.add('.calendar');


  image.src = user.data.avatar_url;
  name.textContent = user.data.name;
  username.textContent = user.data.login;
  if (user.data.location) {
    location.textContent = `Location: ${user.data.location}`;
  }
  
  profileAddress.textContent = 'Profile: ';
  link.href = `${user.data.html_url}`;
  link.textContent = user.data.html_url;
  profileAddress.appendChild(link);

  followers.textContent = `Followers: ${user.data.followers}`
  following.textContent = `Following: ${user.data.following}`
   
  if (user.data.bio){
    bio.textContent = `Bio: ${user.data.bio}`
  }
  console.log (card);


 document.querySelector('.cards').appendChild(card)
 }
 axios.get('https://api.github.com/users/MileyWright')
 .then(response => {
    console.log(response)
    cardCreator(response)
     //Stretch Graph -- begin
     const calendarDiv = document.createElement("div");
     cards.appendChild(calendarDiv);
 
     calendarDiv.classList.add("calendar");
 
     new GitHubCalendar(".calendar", "MileyWright");
     //Stretch Graph -- end
 
  })
  .catch(response => {
    console.log( 'error!')
  })

  const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
  ];
  
  followersArray.forEach((user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(((result) => {
        cardCreator(result);
        
      }))
      .catch((error) => {
        console.log(error);
      });
  });
    
 



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
