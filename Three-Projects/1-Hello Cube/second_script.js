// Scene Mesh Camera Renderer

// Create a scene
const scene = new THREE.Scene();

// Create a mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
    0, 0, 0,  // vertex 0
    0, 1, 0,  // vertex 1s
    1, 0, 0,  // vertex 2
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));


// Create a material
const material = new THREE.MeshBasicMaterial({
    color: 'purple',
    wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);


// Add mesh to scene
scene.add(mesh);

// Create a camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// Create a renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(aspect.width, aspect.height);

//Clock Class
const clock = new THREE.Clock();

const animate = () => {

    // mesh.rotation.y = clock.getElapsedTime() * Math.PI * 0.5;

    //Render

    // Animation
    // requestAnimationFrame(animate);
}
renderer.render(scene, camera);

animate();

