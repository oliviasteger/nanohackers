/*exported Building */
class Building {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.floors = [];
  }

  constructFloor(number) {
    const floor = new Floor(number);
    this.floors[number] = floor;
    return floor;
  }

  toString() {
    console.log(`${this.name} is located at ${this.address}.`);
    console.log(`This building has ${this.floors.length - 1} floors constructed.`);

    for (const floor of this.floors) {
      if (floor) {
        console.log(`Floor: ${floor.number}`);
        for (const company of floor.companies) {
          console.log(`Company: ${company.name}`);
          console.log(`         ${company.description || "N/A"}`);
        }
      }
    }
  }
}
