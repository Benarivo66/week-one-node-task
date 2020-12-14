function main(){
    const url = "https://swapi.dev/api/people";

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        displayPeople(data["results"]);
    })
}

function displayPeople(stars) {
	const rootDiv = document.getElementById('root');
	const starsDiv = document.createElement('div');
  starsDiv.className = 'star-list';
  

  for (let star of stars) {
    const starDiv = document.createElement('div');
    starDiv.className = 'star-list-item';

    const starImage = document.createElement('img');
    starImage.src = `${star.gender === 'n/a' ? 'robot' : star.gender}.jpg`;
    starImage.alt = star.name;
    starDiv.appendChild(starImage);
    
    const button = document.createElement('button');
    button.textContent = star.name;
    button.addEventListener('click', () => displayStarDetails(star))
    starDiv.appendChild(button);
    
   	starsDiv.appendChild(starDiv);
  }
  
  rootDiv.innerHTML = '';
  rootDiv.appendChild(starsDiv);

}

function displayStarDetails(star){
    const rootDiv = document.getElementById('root');
      const detailDiv = document.createElement('div');
    detailDiv.className = 'star-details';
    
    
    detailDiv.innerHTML = `
          <img src=${star.gender === 'n/a' ? 'robot' : star.gender}.jpg alt=${star.name} />
          <div>
              <p>Name: ${star.name}</p>
        <p>Gender: ${star.gender}</p>
        <p>Skin Color: ${star.skin_color}</p>
        <p>Height: ${star.height}cm</p>
        <p>Mass: ${star.mass}kg</p>
          </div>
      `;
    
    
    const button = document.createElement('button');
    button.textContent = 'Back to people list';
    button.addEventListener('click', () => main())
    detailDiv.appendChild(button);
    
    rootDiv.innerHTML = '';
    
       rootDiv.appendChild(detailDiv);
    //console.log(star)
  }
  
main();

module.exports = {main}