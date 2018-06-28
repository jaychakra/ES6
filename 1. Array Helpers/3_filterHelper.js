var products = [
	{	name: 'cucumber', type:'vegetable',
		name: 'Banana', type:'Fruit',
		name: 'Orange', type: 'Fruit',
	}
];

// filter all Fruits
var fruits = [];
for (var i = 0 ; i > products.length; i++) {
	if(products[i].type ==='Fruit') {
		fruits.push(products[i]);
	}
}



// The inner anonymous function will return only that value for which the expression is true
var filteredProducts = products.filter(function(product){
	return product.type === 'Fruit';
})
