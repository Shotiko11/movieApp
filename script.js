// ჩვენ ამ საიტიდან წამოვიღეთ ფოტოები, შემდეგ ამ ფოტოებიდან ერთის ლინკი ამოვიღეთ(ჩვენივე საიიტიდან), და გავსტილეთ მხოლოდ ეს ერთი ფილმის სურათი თავის აღწერასთან და "იმდბ"-სთან ერთად


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('shotiko');


async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach((movie) => {
        const { poster_path, title, vote_average } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
        `;

        document.body.appendChild(movieEl);

    });

    return respData;

};



function getClassByRate(vote) {
    if(vote > 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else {
        return 'red'
    }
}



getMovies();


