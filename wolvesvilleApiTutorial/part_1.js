async function getRandomRoleIcon() {
	// Replace <YOUR_API_KEY_HERE> with your actual API key
	const API_KEY = 'Bot <YOUR_API_KEY_HERE>';
	// The base URL for the Wolvesville API
	const API_URL = 'https://api.wolvesville.com/';
	// The endpoint for retrieving a list of role icons
	const ENDPOINT = 'items/roleIcons';

	// Set up the headers for the request
	const headers = new Headers({
		// Include the API key in the Authorization header
		Authorization: API_KEY,
		// Specify that we expect the response to be in JSON format
		Accept: 'application/json',
		// Specify that the request body will be in JSON format
		'Content-Type': 'application/json',
	});

	// Make the GET request to the Wolvesville API
	const response = await fetch(`${API_URL}${ENDPOINT}`, {
		method: 'GET',
		headers,
	});

	// Check the status code of the response
	if (response.status < 200 || response.status >= 300) {
		// If the status code is not in the range of 200-299 (success), throw an error
		throw new Error(`Request failed: ${response.statusText}`);
	}

	// If the request was successful, parse the response as JSON
	const roleIcons = await response.json();
	return roleIcons;
}

async function main() {
	try {
		// Call the getRandomRoleIcon function and log the result
		const result = await getRandomRoleIcon();
		console.log(result);
	} catch (error) {
		// If an error occurs, log it to the console
		console.error(error);
	}
}

main();
