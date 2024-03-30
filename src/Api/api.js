fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "47f89c4060e1377be493baf893dcd19f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
