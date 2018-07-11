const testingTeam = {
	lead: 'Amanda',
	engineer: 'Dave'
}

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineering: 'Dave'
}

// Problem statement iterate only over names

function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineering;
	const testTeamGenerator = TestTeamIterator(team.testingTeam);
	yield* testTeamGenerator;	// This will call all yield of testTeamGenerator
}

function* TestTeamIterator (team) {
	yield team.lead;
	yield team.engineer;
}
 

let names = [];
for (name of Iterator(engineeringTeam)) {
	names.push(name);
}