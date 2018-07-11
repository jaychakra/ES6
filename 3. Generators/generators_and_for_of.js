function* colors() {
	yield 'Red';
	yield 'Green';
	yield 'Blue';
}

// const gen = colors();

// gen.next();
// gen.next();
// gen.next();
// gen.next();

const myColors = [];
for (let color of colors()) {
	mycolors.push(color);
}


