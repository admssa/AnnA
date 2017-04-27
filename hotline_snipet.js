$( document ).ready(function() {
var arrStores = [];
$(".m_t-0").each(function(index) {
    arrStores[index] = {
       storeId: index,
       link: "http://hotline.ua"+$(this).attr('href'),
       price: this.text.replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' )/100
    }      
   })


$(".price-line-shop").each(function() {
   $(".shop-title").each(function(index) {
   arrStores[index].storeName = this.title;

   })
  
})
console.log(document.title + " " + document.lastModified + " " +document.documentURI  )
for (item in arrStores) {
   
   console.log (arrStores[item].storeId + ";" + arrStores[item].storeName + ";" + arrStores[item].price + ";" + arrStores[item].link)
}
});
