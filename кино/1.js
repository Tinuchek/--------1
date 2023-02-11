const kino = document.querySelector('.b')
const q = document.querySelector('.q')
async function getFilms(){
    try{
        const url ='https://kinopoiskapiunofficial.tech/api/v2.2/films';
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': 'a8d18728-9ac6-4a16-a82f-a2536681b359',
                'Content-Type': 'application/json',
                },   
        })
        const films = await response.json(); 
        kinoFilms(films.items);
    } catch(error){
        console.error(error)
    }

}

async function kinoFilms(films){
    console.log(films)
    for (let i =0 ; i<films.length;i++){
        kino.innerHTML += `
            <div style="width: 25%; margin-bottom: 20px;">
              <img src="${films[i].posterUrl}" style="height: 300px; width: 300x;">
              <div>
              <p>Название</p>
              ${films[i].nameOriginal}
              </div>
              <div>
              <p>Год выпуска</p>
              ${films[i].year}
              </div>
              <div>
              <p>Рейтинг</p>
              ${films[i].ratingImdb}
              </div>
              <button onclick="on(${films[i].kinopoiskId})">Подробнее</button>
            </div>
        
        `
    } 
}
function on(index){
    localStorage.setItem('on', index)
    window.open('./2.html')
}
getFilms();



