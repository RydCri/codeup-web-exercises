//
//var allCones = Math.floor(Math.random() * 50) + 50;
//var sellCone = Math.floor(Math.random() * 5) + 1;
//
//for(i=allCones;i>0;i-=sellCone){
//console.log(`${sellCone} cones sold. ${i} cones left.`)
//}
//if(i === 0){
//  console.log(`Yay! I sold them all!`)
//} else if(i < sellCone && i < 0) {
//         console.log(`Cannot sell you ${sellCone} cones I only have ${i}...`)
//}

var allCones = Math.floor(Math.random() * 50) + 50;

for(i=allCones;i>0;i-=sellCone){
var sellCone = Math.floor(Math.random() * 5) + 1
console.log(`${i} cones left. buying ${sellCone}cones .`)
if(i < sellCone) {
         console.log(`Cannot sell you ${sellCone} cones I only have ${i}...`)
} else if(i === 0){
  console.log(`Yay! I sold them all!`)
  break;
}
}


//`${} cones sold...`  // if there are enough cones
//`Cannot sell you ${} cones I only have ${}...`  // If there are not enough cones
//`Yay! I sold them all!` // If there are no more cones


//let conesToSell = Math.floor(Math.random() * 50) + 50;
//do {
//    let conesToBuy = Math.floor(Math.random() * 5) + 1;
//    if (conesToBuy <= conesToSell) {
//    console.log(`${conesToBuy} cones sold.`)
//    conesToSell -= conesToBuy;
//    } else {
//        console.log(`Cannot sell you ${conesToBuy} cones, I only have ${conesToSell}..`)
//    }
//} while (conesToSell > 0)