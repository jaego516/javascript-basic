/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){ // 이걸 넣으면 new키워드를 안써도 정상적으로 선언되게 해준다.
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    };
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

// new 키워드 안쓰면 undefined를 출력
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);

// console.log(global.name);

// 화살표 함수에선 new 키워드 못쓴다. 일반 함수에서만 쓸 수 있다.
const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = IdolModelArrow('안유진', 2003);