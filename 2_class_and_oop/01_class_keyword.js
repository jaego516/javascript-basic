/**
 * Class keyword
 */

class IdolModel{
    name; // property
    year;

    constructor(name, year){
        this.name = name
        this.year = year
    }
    sayName(){
        return `안녕하세요. 제 이름은 ${this.name}입니다.`
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(typeof yuJin);

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);


console.log(yuJin.name);
console.log(yuJin.year);


console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel); // 클래스는 함수로 인식된다.
console.log(typeof yuJin); // 클래스로 생성된 인스턴스는 오브젝트다.