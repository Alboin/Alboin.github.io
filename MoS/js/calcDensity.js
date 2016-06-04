function calcDensity(allParticles, constants){

	for (i = 0; i < allParticles.length; i++) {

		allParticles[i].density = 0;
		for(j = 0; j < allParticles.length; j++) {

			r = vecSubtract(allParticles[i].position, allParticles[j].position);
			
			if(norm(r) < constants.kernelRadius) {
				allParticles[i].density = allParticles[i].density + constants.mass * W_poly6(r, constants.kernelRadius); 
			}		
		}

		allParticles[i].pressure = constants.gasConstant * (allParticles[i].density - constants.restDensity); 
	} 
}