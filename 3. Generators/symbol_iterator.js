const testingTeam = {
	lead: 'Amanda',
	engineer: 'Dave'
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.engineer;
	}
}

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
}

let names = [];
for (name of Iterator(engineeringTeam)) {
	names.push(name);
}