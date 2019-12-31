// you should not use the any type if possible 
var n = 1;
n = 'robb';
var isWinter = false;
isWinter = 132;
var count = 5;
// not sure why it is telling me that name has already been delclared 
var name = 'Bran';
var names = ['john,shae,michael'];
var Starks;
(function (Starks) {
    Starks[Starks["john"] = 0] = "john";
    Starks[Starks["shae"] = 1] = "shae";
    Starks[Starks["michael"] = 2] = "michael";
})(Starks || (Starks = {}));
;
var cat = Starks.shae;
function getName() {
    return 'winter is coming';
}
