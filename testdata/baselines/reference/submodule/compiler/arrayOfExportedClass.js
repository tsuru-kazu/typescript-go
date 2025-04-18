//// [tests/cases/compiler/arrayOfExportedClass.ts] ////

//// [arrayOfExportedClass_0.ts]
class Car {
    foo: string;
}

export = Car;

//// [arrayOfExportedClass_1.ts]
///<reference path='arrayOfExportedClass_0.ts'/>
import Car = require('./arrayOfExportedClass_0');

class Road {

    public cars: Car[];

    public AddCars(cars: Car[]) {

        this.cars = cars;
    }
}

export = Road;


//// [arrayOfExportedClass_0.js]
"use strict";
class Car {
    foo;
}
module.exports = Car;
//// [arrayOfExportedClass_1.js]
"use strict";
class Road {
    cars;
    AddCars(cars) {
        this.cars = cars;
    }
}
module.exports = Road;
