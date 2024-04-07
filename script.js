// adjectives crazy amazing Fire 
// shop type engine foods garment 
// word bros limited hub

let adj;
let shop;
let word;

let randomadj = Math.floor(Math.random() * 3);
let randomshop = Math.floor(Math.random() * 3);
let randomword = Math.floor(Math.random() * 3);

function print(adjective, shops, words){
    document.write('your cool bussiness name is: ' + adjective + ' ' + shops +' '+ words);
}

const ans = prompt('Are you ready to generate bussiness name?');

if(ans == 'yes') {


if (randomadj == 0) {
    adj = 'crazy';
} else if (randomadj == 1) {
    adj = 'amazing';
} else if (randomadj == 2) {
    adj = 'fire';
}

if (randomshop == 0) {
    shop = 'engine';
} else if (randomshop == 1) {
    shop = 'foods';
} else if (randomshop == 2) {
    shop = 'garment';
}

if (randomword == 0) {
    word = 'bros';
} else if (randomword == 1) {
    word = 'limited';
} else if (randomword == 2) {
    word = 'hub';
}

print(adj, shop, word);
}

else {
    document.write('ok, bye');
}