function perfectCity(departure, destination) {
		return +(calculateIntCellDistance(departure[0], destination[0]) 
			+ calculateIntCellDistance(departure[1], destination[1]) 
			+ calculateInnerCellDistance (departure[0], destination[0]) 
			+ calculateInnerCellDistance (departure[1], destination[1]))
			.toFixed(1);
}

function calculateInnerCellDistance ( d1, d2){
	if (Math.abs(d2 - d1) < 1){
		return +Math.min(d1 + d2, Math.abs(1 - d1) + Math.abs(1 - d2)).toFixed(1);
	}
	return 0;
}

function calculateIntCellDistance(d1, d2){
	if (Math.abs(d2 - d1) >= 1){
		return +Math.abs(d1-d2).toFixed(1);
	}
	return 0;
}
