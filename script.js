let first = {
    a:['x','y','z'],
    b:['g', 'e', 'f'],
    c:['h', 'i', 'j']
};
let collectionArray=[];
for(let key of Object.keys(first)){
    collectionArray.push(first[key]);
}
let string=collectionArray.join(",");
let finalString=string.replace(/,/g,'-');
console.log(finalString);
    