/**
 * Scope
 */
var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}
// levelOne();

function levelOne(){
    var numberOne = 40;

    console.log(numberOne)
}
// levelOne();

console.log(numberOne);

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}
levelOne();
console.log(numberOne);
// console.log(numberTwo); // numberTwo is not defined

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * <-> Dynamic Scope (실행한 위치가 상위 스코프를 정한다.)
 */
var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}
// 선언된 곳이 글로벌 바로 밑이므로 글로벌 스코프인 3을 가져옴
function functionTwo(){
    console.log(numberThree);
}
functionTwo(); // 3


var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
// var 키워드는 함수에서만 스코프를 만듦
console.log(`i in global scope : ${i}`); // 10

i = 999;
// let, const는 함수 뿐만아니라 for, if 등에서도 스코프를 가짐
// block level 스코프라 한다.
for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`); // 999


/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */