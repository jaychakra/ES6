#### What is generator
* A function that can be entered and exit many a times
* Pause and play can be controlled by the __yield__ keyword
* .next() property is attached to the object which is returned by the generator function

### How is it defined
* By adding a __*__ after function or before the function name
* Ex1: 
``` function* generator() {
	
	} ```

* Ex2: 
``` function *generator() {

	}```

* Both of them are valid

### Symbol Iterator
* It teaches for of loop how to iterate over the object