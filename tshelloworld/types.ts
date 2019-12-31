// you should not use the any type if possible 
var n : any = 1;
n = 'robb';
var isWinter : boolean = false;
isWinter = true;

var count :Number =5;
// not sure why it is telling me that name has already been delclared 
// var name : String = 'Bran';


var names : string[] = ['john,shae,michael'];

enum Starks {john, shae ,michael};


var cat : Starks = Starks.shae;

// getting this error message Duplicate function implementation.ts(2393)
// function getName() : string{
//     return 'winter is coming';

// }


