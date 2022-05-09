console.log("working...");


let map = new Map ();
map.set("name","ravi");
map.set("roll",180933);
map.set("phone",5952579554);
map.set(1 ,"one");
map.set( true ,"yes");

console.log(map);
console.log(map.size);
console.log(map.get("roll"));
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.has("name"));
map.delete(1);

// map.clear();
console.log(map);

for (let a of map.keys()){
    console.log(a);
}
for (let b of map.values()){
    console.log(b);
}
for(let entrie of map.entries()){
    console.log(entrie);
}
map.forEach(function(key,value){
    console.log(value,key);
})



// sets
// sets has no keys ,it has only unique value.
// set will give value values pair when we will use entities.
let set1 = new Set();
set1.add("mango");
set1.add("mango");
set1.add("mango");
set1.add("banana");
set1.add("lichi");
set1.add("apple");
console.log(set1);

console.log(set1.values());
console.log(set1.entries());
console.log(set1.has("kiwi"));
for (let a of set1.keys()){
    console.log(a);
}

for(let entrie of set1.entries()){
    let key = entrie;
    console.log(key[0]);
}

