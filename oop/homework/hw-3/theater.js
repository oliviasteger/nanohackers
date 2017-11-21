CB.CloudApp.init('etyvvffumkpo', '1d5344ea-d92a-439c-ba53-879362c7354b');
class Theater {
  constructor(name) {
    const cloudObject = new CB.CloudObject("Theater");
    this.cloudObject = cloudObject;
    this.name = name;
    cloudObject.set("name", this.name);
    this.movies = [];
  }
  save() {
    this.cloudObject.save({
      success: (obj) => {
        console.log(obj);
      },
      error: (err) => {
        console.log("We were not able to save your theater. Sorry!")
      }
    });
  }
  addMovie(name, price) {
    let movie = new Movie(name, price, this.cloudObject);
    movie.save();
    this.movies.push(movie);
  }
}
