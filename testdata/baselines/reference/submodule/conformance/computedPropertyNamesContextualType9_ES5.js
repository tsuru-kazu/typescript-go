//// [tests/cases/conformance/es6/computedProperties/computedPropertyNamesContextualType9_ES5.ts] ////

//// [computedPropertyNamesContextualType9_ES5.ts]
interface I {
    [s: string]: boolean;
    [s: number]: boolean;
}

var o: I = {
    [+"foo"]: "",
    [+"bar"]: 0
}

//// [computedPropertyNamesContextualType9_ES5.js]
var o = {
    [+"foo"]: "",
    [+"bar"]: 0
};
