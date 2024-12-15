//Alışveriş Listesi
const list = [];
const num = Number(prompt("Alışveriş listesine kaç  adet ürün eklemek istersiniz?"));
for (let i = 0; i < num; i++) {
    let piece = prompt(`Lütfen ${i+1}. ürünü giriniz.`);
    list.push(piece);
    
}
console.log(list);
