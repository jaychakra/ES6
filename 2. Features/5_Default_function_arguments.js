// Synactic Sugar

function getAjaxRequest (url, method) {
	if (!method) {
		method = 'GET';
	}

	// Do something
}

// ES6 Equivalent
// Works in case of undefined only not in the case of null (user defined)
function getAjaxRequest1(url, method = 'GET') {

	// Do something
}