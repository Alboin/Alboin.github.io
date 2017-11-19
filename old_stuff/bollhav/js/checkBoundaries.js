function checkBoundaries(allParticles, constants){

	for(i = 0; i < allParticles.length; i++){
		if(allParticles[i].position[0] < constants.leftBound + constants.particleSize){
			allParticles[i].position[0] = constants.leftBound + constants.particleSize; 
			allParticles[i].velocity[0] = -allParticles[i].velocity[0]; 
		}
		if(allParticles[i].position[0] > constants.rightBound - constants.particleSize){
			allParticles[i].position[0] = constants.rightBound - constants.particleSize; 
			allParticles[i].velocity[0] = -allParticles[i].velocity[0]; 
		}
		if(allParticles[i].position[1] < constants.bottomBound + constants.particleSize){
			allParticles[i].position[1] = constants.bottomBound + constants.particleSize; 
			allParticles[i].velocity[1] = -allParticles[i].velocity[1]; 
		}
		if(allParticles[i].position[1] > constants.topBound - constants.particleSize){
			allParticles[i].position[1] = constants.topBound - constants.particleSize; 
			allParticles[i].velocity[1] = -allParticles[i].velocity[1]; 
		}
		if(allParticles[i].position[2] < constants.frontBound + constants.particleSize){
			allParticles[i].position[2] = constants.frontBound + constants.particleSize; 
			allParticles[i].velocity[2] = -allParticles[i].velocity[2]; 
		}
		if(allParticles[i].position[2] > constants.backBound - constants.particleSize){
			allParticles[i].position[2] = constants.backBound - constants.particleSize; 
			allParticles[i].velocity[2] = -allParticles[i].velocity[2]; 
		}

	}

}