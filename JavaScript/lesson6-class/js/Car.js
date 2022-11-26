class Car {
    constructor(brand, model, year) {
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
    }
    calculateSpeed(km,hour){
        return `${this.ibrand}'s speed is: ${km/hour}km/h`
    }
}
export {Car};