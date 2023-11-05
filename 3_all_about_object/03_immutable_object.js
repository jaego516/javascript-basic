/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/** 
 * Extensible : 확장 가능한지 여부
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal'; // 프로퍼티 추가가 가능

console.log(yuJin);


Object.preventExtensions(yuJin); // Extensible을 false

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin); // 출력에는 문제가 없으나 groupName이란 프로퍼티는 추가되지 않는다.

delete yuJin['position'];
console.log(yuJin); // 프로퍼티 삭제는 가능하다

/**
 * Seal
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2); // 봉인

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브'; // 추가도 불가(에러는 안남)
console.log(yuJin2);

delete yuJin2['name']; // 삭제도 불가(에러는 안남)
console.log(yuJin2);

// seal을 하면 configurable이 false로 바뀐다.
Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// });
// writable, configurable 모두 false가 된다.
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));


const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
// 하위 object는 freeze되지 않는다. seal, extensible도 마찬가지다.
console.log(Object.isFrozen(yuJin4['wonYoung']));

