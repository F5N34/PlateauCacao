const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000); //permet de positionner la caméra
//(fov,aspect,near,far)

const controls = new THREE.OrbitControls(camera); //on donne une camera a notre controleur

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(200 , 0 , 0); //position de la cam, ici elle est au centre (intérieur)(x,y,z)
controls.update(); //met à jour les controles

const geometry = new THREE.SphereGeometry(400, 100, 100);
const textureLoad = new THREE.TextureLoader();
const texture = textureLoad.load('../images/apo5.jpg')
const material = new THREE.MeshBasicMaterial({
  map: texture,
  // color: 0xffff00,
  side: THREE.DoubleSide //permet d'avoir la texture à l'extérieur et à l'intérieur
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const renderer = new THREE.WebGLRenderer(); //va permettre de rendre visible la scène à l'aide de WebGL
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setSize($('#myModal').innerWidth, $('#myModal').innerHeight);
document.body.appendChild(renderer.domElement); //ajoute la scène dans notre body

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate(); //met en place
