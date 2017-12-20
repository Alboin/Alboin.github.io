function norm(vector) {
	var result = Math.sqrt(Math.pow(vector[0],2) + Math.pow(vector[1],2) + Math.pow(vector[2],2));
	return result;
}

function vecAdd(vector1,vector2) {
	result = [vector1[0]+vector2[0], vector1[1]+vector2[1], vector1[2]+vector2[2]];
	return result;
}

function vecSubtract(vector1, vector2) {
	result = [vector1[0]-vector2[0], vector1[1]-vector2[1], vector1[2]-vector2[2]];
	return result;
}

function vecDiv(vector, scalar) {
	result = [vector[0]/scalar, vector[1]/scalar, vector[2]/scalar];
	return result;
}

function vecTimes(vector, scalar) {
	result = [vector[0]*scalar, vector[1]*scalar, vector[2]*scalar];
	return result;
}

function norm2(vector) {
	var result = Math.sqrt(Math.pow(vector[0],2) + Math.pow(vector[1],2));
	return result;
}

function vec2Subtract(vector1, vector2) {
	result = [vector1[0]-vector2[0], vector1[1]-vector2[1]];
	return result;
}

function vec2Times(vector, scalar) {
	result = [vector[0]*scalar, vector[1]*scalar];
	return result;
}

function vec2Div(vector, scalar) {
	result = [vector[0]/scalar, vector[1]/scalar];
	return result;
}