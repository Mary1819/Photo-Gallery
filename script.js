$(".reset").hide();

let movies = ["https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "https://img.cinemablend.com/quill/f/7/2/6/3/5/f726355dced6867069a8f2ef2ed5239c50d8c5f8.jpg", "https://www.criticsinc.com/photos/movieposters/m/monsterhunter.jpg"];

for (let movie of movies) {
    $(".gallery").append("<img src=" + movie + ">");
}

$(".add").click(function() {
    let url = $(".picture-url").val();
    movies.push(url);
    $(".gallery").append("<img src=" + url + ">");
    $(".reset").show();
    $(".reset").click(function() {
        location.reload();
    });
});