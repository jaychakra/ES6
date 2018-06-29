// ES 5

function createBookShop(inventory) {
	return {
		inventory: inventory, // inventory can be removed only single inventory is enough
		inventoryValue: function() {  // This function word can be ommitted in the fasion check below
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle: function(title) { 
			return this.inventory.find(book => book.title === title).price;
		}
	}
}

const inventory = [
	{title: 'Harry Potter', price: 10},
	{title: 'Learn HTML', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter')); 


//ES 6

function createBookShop1(inventory) {
	return {
		inventory
		inventoryValue() {  // Returns total value
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle(title) { 
			return this.inventory.find(book => book.title === title).price;
		}
	}
}