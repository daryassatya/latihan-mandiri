// untuk mendapatkan ?data dari url
// https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript

$('.search-button').on('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=e2e26a15&s='+$('.input-keyword').val(),
        success: results => {
            // console.log(results);
            const movies = results.Search;
            let cards = '';
            // console.log(movies)
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards)

            //Ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=e2e26a15&i=${$(this).data('imdbid')}`,
                    success: results => {
                        const modalBody = showDetails(results);
                        $('.modal-body').html(modalBody);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                })
            });
        },
        error: e => {
            console.log(e.responseText);
        }
    });
});


function showCards(m){
    return `<div class="col-md-4 my-3" id="content">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#moviewDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showDetails(r){
    return  `<div class="container-fluid"><div class="row">
                <div class="col-md-6 img-fluid container-fluid"><img src="${r.Poster}" class="card-img-top" alt=""></div>
                    <div class="col-md-6">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${r.Title} (${r.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${r.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${r.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${r.Writer}</li>
                            <li class="list-group-item"><strong>PQlot : </strong><br>${r.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}