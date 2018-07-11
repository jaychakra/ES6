const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineering: 'Dave'
}

// Problem statement iterate only over names

function* Iterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineering;
}

let names = [];
for (name of Iterator(engineeringTeam)) {
	names.push(name);
}