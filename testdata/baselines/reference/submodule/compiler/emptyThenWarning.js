//// [tests/cases/compiler/emptyThenWarning.ts] ////

//// [emptyThenWarning.ts]
if(1);

let x = 0;
if (true === true); {  
    x = 1;
}

//// [emptyThenWarning.js]
if (1)
    ;
let x = 0;
if (true === true)
    ;
{
    x = 1;
}
