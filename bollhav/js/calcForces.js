function calcForces(allParticles, constants) {
	for(i = 0; i < allParticles.length; i++) {

		//Temporary constants.
		allParticles[i].forces = [0, 0, 0];
		var fpressure = [0, 0, 0];
		var fviscosity = [0, 0, 0];
		var ftension = [0, 0, 0];
		var cS = 0;
		var laplacian_cS = 0;
		var n = [0, 0, 0];

		for(j = 0; j < allParticles.length; j++) {
			if(j != i) {
				r = vecSubtract(allParticles[i].position, allParticles[j].position);
				if(norm(r) < constants.kernelRadius && norm(r) > 0) {

					//Calculate pressure force.
					fpressure = vecSubtract(fpressure,
						vecTimes(W_spiky_gradient(r, constants.kernelRadius),
							constants.mass * (allParticles[i].pressure + allParticles[j].pressure)/(2*allParticles[j].density)));

					//Calculate viscosity force.
					fviscosity = vecAdd(fviscosity,
						vecTimes(vecDiv(vecSubtract(allParticles[j].velocity, allParticles[i].velocity), allParticles[j].density),
							W_viscosity_laplace(r, constants.kernelRadius) * constants.mass * constants.viscosityConstant));

					//Calculate tension components.
					cS = cS + (constants.mass / allParticles[j].density) * W_poly6(r, constants.kernelRadius);
					n = vecAdd(n, vecTimes(W_poly6_gradient(r, constants.kernelRadius), (constants.mass / allParticles[j].density)));
					laplacian_cS = laplacian_cS + (constants.mass / allParticles[j].density) * W_poly6_laplace(r, constants.kernelRadius);

				}
				//Calculate tension force from the components.
				if(norm(n) > constants.tensionThreshold) {
					var k = -laplacian_cS/norm(n);
					ftension = vecTimes(n, k * constants.tensionConstant);
				}
			}
		}

		allParticles[i].forces =  vecAdd(allParticles[i].forces, constants.gravity);
		allParticles[i].forces =  vecAdd(allParticles[i].forces, fpressure);
		allParticles[i].forces =  vecAdd(allParticles[i].forces, fviscosity);
		allParticles[i].forces =  vecAdd(allParticles[i].forces, ftension);

	}
}