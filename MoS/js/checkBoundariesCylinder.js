function checkBoundariesCylinder(allParticles, constants) {
	for(i = 0; i < allParticles.length; i++) {

		//The particle position coordinates in the xy-plane.
		var xzPos = [allParticles[i].position[0], allParticles[i].position[2]];
		//The particle velocity vector in the xy-plane.
		var xzVel = [allParticles[i].velocity[0], allParticles[i].velocity[2]];
		//Distance between particle and center of cylinder.
		distance = norm2(xzPos) + constants.particleSize + 0.1;

		if(distance > constants.cylinderRadius) {

			//Reset particle position to the border of the cylinder.
			var newPos = vec2Times(vec2Div(xzPos, distance), constants.cylinderRadius);
			allParticles[i].position = [newPos[0], allParticles[i].position[1], newPos[1]];

			//Calculate new direction of velocity.
			var N = vec2Div(xzPos, distance);
			var R = vec2Subtract(vec2Times(N, 2*(xzVel[0]*N[0] + xzVel[1]*N[1])), xzVel);
			R = [-R[0], -R[1]];
			allParticles[i].velocity = [R[0], allParticles[i].velocity[1], R[1]];

		}
		
		//Cylinder top and bottom borders are controlled the same way as a box.
		if(allParticles[i].position[1] < -constants.cylinderHeight/2 + constants.particleSize) {
			allParticles[i].position[1] = -constants.cylinderHeight/2 + constants.particleSize; 
			allParticles[i].velocity[1] = -allParticles[i].velocity[1]; 
		}
		if(allParticles[i].position[1] > constants.cylinderHeight/2 - constants.particleSize) {
			allParticles[i].position[1] = constants.cylinderHeight/2 - constants.particleSize; 
			allParticles[i].velocity[1] = -allParticles[i].velocity[1]; 
		}
	}

}