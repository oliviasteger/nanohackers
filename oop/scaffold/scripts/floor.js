 /*exported Floor */
class Floor {
  constructor(number) {
    this.number = number;
    this.companies = [];
  }

  addCompany(company) {
    this.companies.push(company);
  }
}
