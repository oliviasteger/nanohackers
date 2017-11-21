class Floor {
  constructor(num, elevatorAccess) {
    this._number = num;
    this._elevatorAccess = elevatorAccess;
    this._companies = [];
  }
  addCompany(co) {
    this.companies.push(co);
    return this.companies;
  }
}
