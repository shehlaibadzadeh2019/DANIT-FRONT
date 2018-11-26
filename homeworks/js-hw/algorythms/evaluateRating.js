function evaluateRating (playerStats){
	return playerStats
	.map(playerAchievments => playerAchievments.split(',')
		.map(achievmentNameValString => achievmentNameValString.split(':'))
		.reduce((player, achievmentNameVal) => {
			player[achievmentNameVal[0].trim()] = Number.parseInt(achievmentNameVal[1]);
			return player;
		},{})
	)
	.map(player => player.rating > 10 || player.games <= 100 ? "amateur" : "pro");
}

const testStats = ['rating:10, games: 20','rating:5, games: 200','rating:11, games: 100','rating:9, games: 101'];
const testResult = evaluateRating(testStats);
console.assert(['amateur','pro','amateur','pro']
	.every(testValue => testResult
		.some(result => testValue.match(result))
		),
	{testResult: testResult, errorMsg: 'invalid result!'});
console.log (`Result: ${testResult}`);



