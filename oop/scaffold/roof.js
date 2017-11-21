class Roof extends Floor {
  constructor(num, isCovered) {
    super(num);
    this._isCovered = isCovered;
    this._plants = [];
  }
  addPlant(plant);
    this.plants.push(plant);
    return this.plants;
}
