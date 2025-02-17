//----задание 1
const Nums = [1, 2, 3, 4, 5];
const NumSquared = Nums.map(i => i ** 2);

console.log(NumSquared);

//----задание 2

const Nums2 = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const UniqNums2 = Nums2.filter((item, num) => Nums2.indexOf(item) === num);

console.log(UniqNums2);

//----задание 3

const Nums3 = [1, 2, 3];
const SumNums3 = Nums3.reduce((total, num) => total + num, 0);

console.log(SumNums3);

//------задание 4

const Nums4 = [1, 2, 3, 4, 5];
const reversNums4 = []; 
for (let i = Nums4.length - 1; i >= 0; i--) {
    reversNums4.push(Nums4[i]);
}

console.log(reversNums4);

//------задание 5

let a = 5;
a = 6;
console.log(a);

/*const b = 5;
b = 6;
console.log(b);*/ 


let c = [5, 6, 7];
c.push(8);
console.log(c);

const d = [1, 2, 3];
d.push(4);
console.log(d);
