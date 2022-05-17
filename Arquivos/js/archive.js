/*
Criando a scene, camera e renderer, conforme orientações
da documentação do three.js
 */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*Definindo a textura da forma. No caso, o logo do Livres*/
const texture = new THREE.TextureLoader().load('Arquivos Auxiliares/logo_livres_quadrado.jpg');

/*Criando a forma desejada, aplicando a texture criada e adicionando à cena*/
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/*Definindo o tamanho da camera/projeção*/
camera.position.z = 3;

/*Função para criar a animação e rotação do cubo*/
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	/*Fatores para rotação do objeto cube*/
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

/*Executando a função animate*/
animate();