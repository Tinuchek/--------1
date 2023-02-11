const index = localStorage.getItem('on');
const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${index}`
const q = document.querySelector('.q')
async function getFilms(){
    try{
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': 'a8d18728-9ac6-4a16-a82f-a2536681b359',
                'Content-Type': 'application/json',
                },   
        })
        const films = await response.json(); 
        console.log(films)
        // kinoFilms(films.items);
    } catch(error){
        console.error(error)
    }

}

async function kinoFilms(films){
    console.log(films)
    q.innerHTML += `
        <div style="width: 25%; margin-bottom: 20px;">
            <img src="${films[films].posterUrl}" style="height: 300px; width: 300x;">
            <div>
            <p>Название</p>
            ${films.nameOriginal}
            </div>
            <div>
            <p>Год выпуска</p>
            ${films.year}
            </div>
            <div>
            <p>Рейтинг</p>
            ${films.ratingImdb}
            </div>
            <button onclick="on(${films[i].kinopoiskId})">Подробнее</button>
        </div>
    
    `
}
kinoFilms()
