import * as THREE from '../../node_modules/three/build/three.module.js';

export default class Snow {
    constructor() {
        this.snow = this.createSnow();
    }

    createSnow(flakeCount) {
        let flakeGeometry = new THREE.TetrahedronGeometry(0.5); // radius
        let flakeMaterial = new THREE.MeshBasicMaterial({ color: 0xe5f8f5 });

        let snow = new THREE.Group();

        for (let i = 0; i < flakeCount; i++) {
        let flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
        flakeMesh.position.set(
            (Math.random() - 0.5) * 150,
            (Math.random()) * 500,
            (Math.random() - 0.5) * 150
        );
        snow.add(flakeMesh);
        }

        return snow;

    }

    createSnowTest(){
        let flakeGeometry = new THREE.TetrahedronGeometry(1); // radius
        let flakeMaterial = new THREE.MeshBasicMaterial({ color: 0xe5f8f5 });

        let flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
        return flakeMesh;

    }

    update(){

        this.snow.translateY(-0.02);
        console.log(this.snow);
    }
}
