class Movie {
  constructor(name, price, theater) {
    const CloudObject = new CB.CloudObject("Movie");
    this.CloudObject = CloudObject;
    this.name = name;
    CloudObject.set("name", this.name);
    this.price = price;
    CloudObject.set("price", this.price);
    this.theater = theater;
    CloudObject.set("theater", this.theater);
    this.comments = [];
  }
  save() {
    this.cloudObject.save({
      success: (obj) => {
        console.log(obj);
      },
      error: (err) => {
        console.log("We were not able to save your movie. Sorry!")
      }
    });
  }

}
