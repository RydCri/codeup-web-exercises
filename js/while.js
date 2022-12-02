
var allCones = Math.floor(Math.random() * 50) + 50;
var sellCone = Math.floor(Math.random() * 5) + 1;

for(i=allCones;i>0;i-=sellCone){
console.log(`${sellCone} cones sold. ${i} cones left.`)
}
if(i === 0){
  console.log(`Yay! I sold them all!`)
} else if(i < sellCone) {
         console.log(`Cannot sell you ${sellCone} cones I only have ${i}...`)
}

//`${} cones sold...`  // if there are enough cones
//`Cannot sell you ${} cones I only have ${}...`  // If there are not enough cones
//`Yay! I sold them all!` // If there are no more cones