if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, controls, scene, renderer;
var geometry, sphere_material, mesh;
var stats;
var sphere, plane, group;
var container;
var objects = [];
var spheres = [];
// constants

var N = 5;


function init(allParticles, constants) {

	var size = constants.rightBound, step = 5;
	
	// CAMERA
	// sätt upp kameran med perspektiv. (fov, aspect, near, far)
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );

	camera.position.set(15,15,15);
	camera.lookAt( new THREE.Vector3(constants.rightBound/2,constants.topBound/2,constants.backBound/2) );

	// controls for zooming
	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2; 
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3; 
	controls.addEventListener('change',render);

    scene = new THREE.Scene();

    var particleGroup = new THREE.Object3D;
    var bollhavGroup = new THREE.Object3D;
    bollhavGroup.add(particleGroup);
	scene.add(bollhavGroup);

	bollhavGroup.position.x = -constants.rightBound/2;
	bollhavGroup.position.z = -constants.backBound/2;

/********** PLANET **************/
	/*var geometry = new THREE.Geometry();

		for ( var i = - size; i <= size; i += step ) {

				geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
				geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

				geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
				geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
			}

	var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2 } );
	var line = new THREE.LineSegments( geometry, material );
	scene.add(line);

	var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );

	plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( 
		{ 	visible: false,
		}));
	objects.push(plane); // lägg till plane i arrayen med objects
*/



/******** CYLINDER ***********/


	var cylinder = new THREE.CylinderGeometry(constants.cylinderRadius, constants.cylinderRadius, constants.cylinderHeight,32);

	var cylinder_material = new THREE.MeshPhongMaterial({
		shininess: 30,
		transparent:true,
		opacity:0.2,
		specular: 0xffffff,
		color:0xffffff
	})

	mesh_cylinder = new THREE.Mesh(cylinder, cylinder_material);
	mesh_cylinder.position.y = 0;
	mesh_cylinder.position.x = -constants.cylinderRadius + constants.particleSize + 0.1;
	mesh_cylinder.position.z = -constants.cylinderRadius + constants.particleSize + 0.1;

	scene.add(mesh_cylinder);

	// BOLLEN
    // skapa bollens geometri
    sphere = new THREE.SphereGeometry(constants.particleSize,7,7);

    for(i = 0; i < constants.particleCount; i++) {

    	sphere_material =new THREE.MeshPhongMaterial(
    	{	color: Math.random() * 0xff0000 
    		//shading: THREE.FlatShading 
    	});


	    // sätt ihop bollen med dess material
	    mesh = new THREE.Mesh(sphere, sphere_material);
	    // lägg till den färdiga bollen i scenen
	    mesh.position.x = allParticles[i].position[0];
	    mesh.position.y = allParticles[i].position[1];
	    mesh.position.z = allParticles[i].position[2];
	    particleGroup.add(mesh);	// lägg till bollen
	}

	var cubeHeight = 0.1;
	var cubeGeometry = new THREE.BoxGeometry( constants.rightBound, cubeHeight, constants.backBound );
	var cubeMaterial = new THREE.MeshBasicMaterial( {color: 0x707070} );
	var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.position.x = constants.rightBound/2;
	cube.position.z = constants.backBound/2;
	cube.position.y = -cubeHeight/2;
	//bollhavGroup.add( cube );

    // LIGHTS
	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	var light = new THREE.PointLight( 0xff0000, 20, 100, -2 ); 

	directionalLight.position.set(10,30,30);
	directionalLight.position.normalize();
	scene.add( directionalLight );
	bollhavGroup.add(light);

	var ambientLight = new THREE.AmbientLight( 0xffffff );
	scene.add( ambientLight );

	renderer = new THREE.WebGLRenderer( { antialias: false } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	container = document.getElementById( 'container' );
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
	render();
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	controls.handleResize();

	render();

}

function animate() {

	//Kollar om fönstret är i fokus, är det inte det stoppas animationen.
	if(document.hasFocus()) {
		// animera
		requestAnimationFrame(animate);
	}
    particleCalculation();

    for(i = 0; i < allParticles.length; i++) {
    	scene.children[0].children[0].children[i].position.x = allParticles[i].position[0];
    	scene.children[0].children[0].children[i].position.y = allParticles[i].position[1];
    	scene.children[0].children[0].children[i].position.z = allParticles[i].position[2];

    }

	controls.update(); 
    render();

}

//rendera scenen
function render()
{	
    renderer.render(scene, camera);
}