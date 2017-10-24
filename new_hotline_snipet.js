var arrStores = [];
$('.offers-item').each(function(index) {
    arrStores[index] = {
       storeId: index,
       storeName: $(this).find('.ellipsis').text(),
       price: $(this).find('.price-format .value').text(),
       link: "http://hotline.ua"+$(this).find('a').attr('href')
    }

   })

for (item in arrStores) {

   console.log (arrStores[item].storeId + ";" + arrStores[item].storeName + ";" +  arrStores[item].price + ";" + arrStores[item].link)
}
