var pi = 3.14;

function W_poly6(r, h) { 
	var r_norm = norm(r);
	var scalar = (315/(64*pi*Math.pow(h,9)))*Math.pow((Math.pow(h,2) - Math.pow(r_norm,2)),3);
	return scalar;
}

function W_poly6_gradient(r, h) {
	var r_norm = norm(r);
	var vector = vecTimes(vecDiv(r,r_norm),((-945/(32*pi*Math.pow(h,9)))*Math.pow((Math.pow(h,2)-Math.pow(r_norm,2)),2)));
	return vector;
}

function W_poly6_laplace(r, h) {
	var r_norm = norm(r); 
	var scalar = (-945/(32*pi*Math.pow(h, 9)))*(Math.pow(h,4)-6*Math.pow(h, 2)*Math.pow(r_norm, 2) + 5*Math.pow(r_norm, 4)); 
	return scalar; 
}

function W_spiky_gradient(r, h) {
	var r_norm = norm(r);

	var part1 = -45*Math.pow((h-r_norm),2)/(pi*Math.pow(h,6));
	var part2 = vecDiv(r, r_norm);

	var vector = vecTimes(part2,part1);

	return vector;
}

function W_viscosity_laplace(r, h) {
	var r_norm = norm(r); 
	scalar = (45/(pi*Math.pow(h,6)))*(h-r_norm);
	return scalar; 
}