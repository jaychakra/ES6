 function* shopping() {
 	// stuff from sidewalk
 	// walking
 	// go into store with case
 	const stuffFromShopping = yield 'cash'; 	// Exit from function with cash
 
 	const cleanClothes = yield 'laundry';
 	// Do other stuff
 	 return [stuffFromShopping, cleanClothes];
}

const gen = shopping(); 		// Nothing is done here
gen.next();			// Shopping called first time with the first value of yield
gen.next('Groceries');			// Code in generator function called after yield statement			
gen.next('Cleaned Clothes');
