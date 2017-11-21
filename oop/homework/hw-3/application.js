CB.CloudApp.init('etyvvffumkpo', '1d5344ea-d92a-439c-ba53-879362c7354b');
var movieNames = [];
class Application {
  constructor() {
   this.movies = [];
  }
  getMovies() {
    var query = new CB.CloudQuery("Movie");
    query.find({
      success: (list) => {
        movieNames = list.map(function (el) {return el.name;});
        this.movies = list;
        this.listMovies();
      },
      error: (err) => {
        console.log("Sorry, we were not able to find your theater.");
      }
    })
  }
  listMovies() {
    for (var i = 0; i < movieNames.length; i++) {
      $("div").prepend("<p>" + movieNames[i] + "</p>");
    }
  }
}
const app = new Application;
app.getMovies();
app.listMovies();
