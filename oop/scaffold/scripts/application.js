$(document).ready(() => {
  const building = new Building("598 Broadway", "598 Broadway");
  const floor = building.constructFloor(15);
  const thoughtWorks = new Company("ThoughtWorks");
  floor.addCompany(thoughtWorks);

  console.log(building.toString());
});
