function calcPosition(allParticles, timeStep, mass){

	for(i = 0; i < allParticles.length; i++) {
		
		var acceleration = vecDiv(allParticles[i].forces, mass); 
		allParticles[i].velocity = vecAdd(allParticles[i].velocity, vecTimes(acceleration,timeStep)); 
		allParticles[i].position = vecAdd(allParticles[i].position, vecTimes(allParticles[i].velocity,timeStep)); 
	}
}