import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CubeWithVideos = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize a Three.js scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Create a cube and add it to the scene
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);

        // Position the camera so that it points towards the cube
        camera.position.z = 5;

        // Create a video texture for each face of the cube
        const video1 = document.createElement("video");
        video1.src = "https://youtu.be/BWmfB6btLc4";
        video1.play();
        /*const video2 = document.createElement("video");
        video2.src = "video2.mp4";
        video2.play();
        const video3 = document.createElement("video");
        video3.src = "video3.mp4";
        video3.play();
        const video4 = document.createElement("video");
        video4.src = "video4.mp4";
        video4.play();
        const video5 = document.createElement("video");
        video5.src = "video5.mp4";
        video5.play();
        const video6 = document.createElement("video");
        video6.src = "video6.mp4";
        video6.play();
        const videoTexture1 = new THREE.VideoTexture(video1);
        const videoTexture2 = new THREE.VideoTexture(video2);
        const videoTexture3 = new THREE.VideoTexture(video3);
        const videoTexture4 = new THREE.VideoTexture(video4);
        const videoTexture5 = new THREE.VideoTexture(video5);
        const videoTexture6 = new THREE.VideoTexture(video6);
        videoTexture1.minFilter = THREE.LinearFilter;
        videoTexture2.minFilter = THREE.LinearFilter;
        videoTexture3.minFilter = THREE.LinearFilter;
        videoTexture4.minFilter = THREE.LinearFilter;
        videoTexture5.minFilter = THREE.LinearFilter;
        videoTexture6.minFilter = THREE.LinearFilter;

        // Assign each video texture to a face of the cube
        cube.material.map = videoTexture1;
        cube.material.map.needsUpdate = true;
        cube.material.side = THREE.BackSide;
        cube.material = new THREE.MeshBasicMaterial({ map: videoTexture2 });
        cube.material.side = THREE.FrontSide;
        cube.material = new THREE.MeshBasicMaterial({ map: videoTexture3 });
        cube.material.side = THREE.RightSide;
        cube.material = new THREE.MeshBasicMaterial({ map: videoTexture4 });
        cube.material.side = THREE.LeftSide;
        cube.material = new THREE.MeshBasicMaterial({ map: videoTexture5 });
        cube.material.side = THREE.TopSide;
        cube.material = new THREE.MeshBasicMaterial({ map: videoTexture6 });
        cube.material.side = THREE.BottomSide;
*/
        const videoTexture1 = new THREE.VideoTexture(video1);
        cube.material.map = videoTexture1;
        cube.material.map.needsUpdate = true;
        cube.material.side = THREE.BackSide;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return <div ref={containerRef} />;
};

export default CubeWithVideos;
