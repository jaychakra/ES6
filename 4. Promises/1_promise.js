const promise = new Promise((resolve, reject) => {

});

promise
	.then(() => {
		console.log('Finally finished');
	})
	.then(() => {
		console.log('Me too!');
	})
	.catch(() => {
		console.log('rejected');
	})

	