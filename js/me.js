//-------------------------------------

var qqqq = document.getElementById('first');
var aaaaa = document.getElementById('secend');
var zzzzz = document.getElementById('therd');

var serchinput = document.getElementById('serchinput');
// var serchinputtow = document.getElementById('serchinputtow');



let allmovie = [];
let allTvtop = [];
let allTrending = [];

//     //
apipizz()
async function apipizz(aaa) {
    let movie = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=c332d393b3245f8f41ce72e6380062aa&language=en-US&page=${aaa}`)
    let Tvtop = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=c332d393b3245f8f41ce72e6380062aa&language=en-US&page=1`)
    let Trending = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=c332d393b3245f8f41ce72e6380062aa`)


    let moviejason = await movie.json()
    allmovie = moviejason.results;
    console.log(allmovie)

    let Tvtopjson = await Tvtop.json()
    allTvtop = Tvtopjson.results;
    console.log(allTvtop)

    let Trendingjson = await Trending.json()
    allTrending = Trendingjson.results;
    console.log(allTrending)

    showimg2(allmovie)
    showimg(allTvtop)
    showimg3(allTrending)


}





//  show imag 
function showimg2(allmovie) {
    let cartona = ` `;
    let zz = 12
    for (let i = 0; i < 10; i++) {
        zz++;
        cartona += `
       
        <div class="card style_1">
        <div class="image">
            <div class="wrapper">
                <a class="image" href="/tv/82856" title="The Mandalorian">
                    <img loading="lazy" class="poster" src="https://image.tmdb.org/t/p/w300${allmovie[i].poster_path}" srcset="http://image.tmdb.org/t/p/w220_and_h330_face/${allmovie[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${allmovie[i].poster_path} 2x"
                        alt="">
                </a>
            </div>
            <div class="options" data-id="82856" data-object-id="5bb6f5970e0a26338e01fb97" data-media-type="tv" data-role="tooltip">
                <a class="no_click" href="#">
                    <div class="glyphicons_v2 circle-more white"></div>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="consensus tight">
                <div class="outer_ring">
                    <div class="user_score_chart 5bb6f5970e0a26338e01fb97" data-percent="85.0" data-track-color="#204529" data-bar-color="#21d07a">
                        <div class="percent">
                            <span class="icon icon-r${zz}"></span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                    </div>
                </div>
            </div>
            <h2><a href="/tv/82856" title="The Mandalorian">${allmovie[i].name}</a></h2>
            <p>${allmovie[i].first_air_date}</p>
        </div>
        <div class="hover 82856"></div>
    </div> 
            `
    }
    // console.log("in function ")
    qqqq.innerHTML = cartona;
} // end show pizza 


function test(allmovie) {

    let cartona = ` `;
    let zz = 12
    for (let i = 10; i < 19; i++) {
        zz++;
        cartona += `
       
        <div class="card style_1">
        <div class="image">
            <div class="wrapper">
                <a class="image" href="/tv/82856" title="The Mandalorian">
                    <img loading="lazy" class="poster" src="https://image.tmdb.org/t/p/w300${allmovie[i].poster_path}" srcset="http://image.tmdb.org/t/p/w220_and_h330_face/${allmovie[i].poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${allmovie[i].poster_path} 2x"
                        alt="">
                </a>
            </div>
            <div class="options" data-id="82856" data-object-id="5bb6f5970e0a26338e01fb97" data-media-type="tv" data-role="tooltip">
                <a class="no_click" href="#">
                    <div class="glyphicons_v2 circle-more white"></div>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="consensus tight">
                <div class="outer_ring">
                    <div class="user_score_chart 5bb6f5970e0a26338e01fb97" data-percent="85.0" data-track-color="#204529" data-bar-color="#21d07a">
                        <div class="percent">
                            <span class="icon icon-r${zz}"></span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                    </div>
                </div>
            </div>
            <h2><a href="/tv/82856" title="The Mandalorian">${allmovie[i].name}</a></h2>
            <p>${allmovie[i].first_air_date}</p>
        </div>
        <div class="hover 82856"></div>
    </div> 
            `
    }
    // console.log("in function ")
    qqqq.innerHTML = cartona;
}

//      //show imag 
function showimg(allTvtop) {
    let cartona = ` `;
    for (let i = 1; i < 10; i++) {
        cartona += `
          
         <div class="card video style_2 true" data-bg-image="//image.tmdb.org/t/p/w1920_and_h427_multi_faces/${allTvtop[i].backdrop_path}">
         <div class="image">
             <div class="wrapper">
                 <a class="image play_trailer" data-id="jOAxchyLZ00" data-title="30 Coins: Official Trailer | HBO" href="/tv/89844" title="30 Coins">


                     <img loading="lazy" class="backdrop" src="//image.tmdb.org/t/p/w355_and_h200_multi_faces/${allTvtop[i].backdrop_path}" srcset="http://image.tmdb.org/t/p/w355_and_h200_multi_faces/${allTvtop[i].backdrop_path} 1x, //image.tmdb.org/t/p/w710_and_h400_multi_faces/${allTvtop[i].backdrop_path} 2x"
                         alt="">



                     <div class="play">
                         <span class="glyphicons_v2 play invert svg"></span>
                     </div>
                 </a>
             </div>

             <div class="options" data-id="89844" data-object-id="5cefb83e925141449ab8bdbd" data-media-type="tv" data-role="tooltip">
                 <a class="no_click" href="#">
                     <div class="glyphicons_v2 circle-more white"></div>
                 </a>
             </div>
         </div>
         <div class="content">
             <h2><a href="/tv/89844"  title="${allTvtop[i].name}">${allTvtop[i].name}</a></h2>
             <h3 >${allTvtop[i].name}: Official Trailer | HBO</h3>
         </div>
     </div> `
    }
    // console.log("in function ")
    aaaaa.innerHTML = cartona;
} // end show pizza 


function showimg3(allTrending) {
    let cartona = ` `;
    for (let i = 1; i < 10; i++) {
        cartona += `

        <div class="card style_1">
        <div class="image">
            <div class="wrapper">
                <a class="image" href="/movie/577922" title="Tenet">


                    <img loading="lazy" class="poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${allTrending[i].poster_path}" srcset="http://image.tmdb.org/t/p/w220_and_h330_face/${allTrending[i].poster_path} 1x, //image.tmdb.org/t/p/w440_and_h660_face/${allTrending[i].poster_path} 2x"
                        alt="">

                </a>
            </div>
            <div class="options" data-id="577922" data-object-id="5c4ba73b0e0a26494dd175a8" data-media-type="movie" data-role="tooltip">
                <a class="no_click" href="#">
                    <div class="glyphicons_v2 circle-more white"></div>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="consensus tight">
                <div class="outer_ring">
                    <div class="user_score_chart 5c4ba73b0e0a26494dd175a8" data-percent="74.0" data-track-color="#204529" data-bar-color="#21d07a">
                        <div class="percent">

                            <span class="icon icon-r74"></span>

                        </div>
                        <canvas height="34" width="34"></canvas>
                    </div>
                </div>
            </div>

            <h2><a href="/movie/577922" title="${allTrending[i].title}">${allTrending[i].name || allTrending[i].title}</a></h2>
            <p>${allTrending[i].release_date || allTrending[i].first_air_date}</p>
        </div>

        <div class="hover 577922"></div>
    </div>
          
         >`
    }
    // console.log("in function ")
    zzzzz.innerHTML = cartona;
} // end show pi




function showsearch(allmovejson) {
    let cartona = ` `;
    let zz = 12
    for (let i = 0; i < 10; i++) {
        zz++;
        cartona += `
       
        <div class="card style_1">
        <div class="image">
            <div class="wrapper">
                <a class="image" href="/tv/82856" title="The Mandalorian">
                    <img loading="lazy" class="poster" src="https://image.tmdb.org/t/p/w300${allmovejson[i].poster_path || allmovejson[i].backdrop_path}" srcset="http://image.tmdb.org/t/p/w220_and_h330_face/${allmovejson[i].poster_path || allmovejson[i].backdrop_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${allmovejson[i].poster_path || allmovejson[i].backdrop_path} 2x"
                        alt="">
                </a>
            </div>
            <div class="options" data-id="82856" data-object-id="5bb6f5970e0a26338e01fb97" data-media-type="tv" data-role="tooltip">
                <a class="no_click" href="#">
                    <div class="glyphicons_v2 circle-more white"></div>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="consensus tight">
                <div class="outer_ring">
                    <div class="user_score_chart 5bb6f5970e0a26338e01fb97" data-percent="85.0" data-track-color="#204529" data-bar-color="#21d07a">
                        <div class="percent">
                            <span class="icon icon-r${zz}"></span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                    </div>
                </div>
            </div>
            <h2><a href="/tv/82856" title="The Mandalorian">${allmovejson[i].title}</a></h2>
            <p>${allmovejson[i].release_date}</p>
        </div>
        <div class="hover 82856"></div>
    </div> 
            `
    }
    // console.log("in function ")
    qqqq.innerHTML = cartona;
}

serchinput.addEventListener("keyup", function() {
    moveall(serchinput.value)
})
let movejson = [];
async function moveall(aaa) {
    let move = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c332d393b3245f8f41ce72e6380062aa&language=en-US&query=${aaa}&page=1&include_adult=false`)
    let movejson = await move.json()
    allmovejson = movejson.results;
    console.log(allmovejson)

    if (serchinput.value == "") {
        showimg2(allmovie)
    } else {
        showsearch(allmovejson)

    }
}
















$(document).ready(function() {
    //  $(".skitter-large").skitter({

    // });

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    //particlesJS.load('particles-js', 'js/particles.json', function() {
    //     console.log('callback - particles.js config loaded');
    //  });

    //  $('.owl-carousel').owlCarousel({
    //      margin: 50,
    //      loop: true,
    //      center: true,
    //  });

    //  var typed = new Typed('.element', {
    //      strings: ['This is a JavaScript library', 'This is an ES6 module'],
    //      smartBackspace: true,
    //     loop: true,
    //      backDelay: 700, // Default value
    //   });

});