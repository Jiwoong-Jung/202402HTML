const var1 = 1024;
const var2 = "1024";
console.log(var1 == var2); // true
console.log(var1 === var2); // false
console.log(null == undefined); // true
console.log(null == 0);
console.log(undefined == 0);
console.log(null === undefined);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
const id = 'admin';
const res =(id !== null && id !== undefined) ? 
                                '아이디 입력' : '입력 안함';
console.log(res);

const res2 =(id ?? null) ? 
                                '아이디 입력' : '입력 안함';
console.log(res2);