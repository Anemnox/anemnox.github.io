import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

import atmosphereVertex from "./shaders/atmosphereVertex.glsl";
import atmosphereFragment from "./shaders/atmosphereFragment.glsl";

import cloudVertex from "./shaders/cloudVertex.glsl";
import cloudFragment from "./shaders/cloudFragment.glsl";

import "./earthModel.css";

// React Component
const EarthModel = ({height, width}) => {
  const earthContainer = useRef(null);
  const [dimensions, setDimensions] = useState(
    {
      height: height,
      width: width
    }
  );
  let earth = new Earth(dimensions.width, dimensions.height);

  useEffect(() => {
    earth.renderer.domElement.classList.add("earth-canvas");
    earthContainer.current.append(earth.renderer.domElement);

    earth.animate();
  }, []);

  return (
    <div className="earth-backdrop" ref={earthContainer}>
    </div>
  )
}

export default EarthModel;

// Earth Logic

const EARTH_SHADER = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader()
              .load('./static/8k_earth_daymap.jpeg')
      },
      nightTexture: {
        value: new THREE.TextureLoader()
              .load('./static/8k_earth_nightmap.jpeg')
      },
      uTime: { type: 'f', value: 0.0 },
    }
  });

const CLOUD_SHADER = new THREE.ShaderMaterial({
    vertexShader: cloudVertex,
    fragmentShader: cloudFragment,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    uniforms: {
      cloudTexture: {
        value: new THREE.TextureLoader()
              .load('./static/2k_earth_clouds.jpeg')
      },
      uTime: { type: 'f', value: 0.0 },
    }
  });

class Earth {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, w / h, 0.1, 1000
    );

    this.camera.position.z = 10;
    this.renderer = new THREE.WebGLRenderer(
      {
        antialias: true,
        alpha: true
      }
    );
    this.renderer.setClearColor( 0x000000, 0 );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.updateSize(w, h);

    this.uStartTime = Date.now();

    this.sphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        EARTH_SHADER
    );

    this.clouds = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        CLOUD_SHADER
      );

    this.atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 50, 50),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertex,
          fragmentShader: atmosphereFragment,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
          transparent: true
        })
      );

    this.atmosphere.scale.set(1.2, 1.2, 1.2);

    this.scene.add(this.atmosphere);
    this.scene.add(this.sphere);
    this.scene.add(this.clouds);

    this.mouse = {
      x: 0,
      y: 0,
      rawDX: 0,
      rawDY: 0
    }

    this.group = new THREE.Group()
    this.group.add(this.sphere);
    this.group.add(this.clouds);
    this.scene.add(this.group);

    this.initEventListener();
  }

  initEventListener() {
    window.addEventListener('mousemove', (event) => {
      if(event.buttons === 1) {
        this.mouse.x += ((event.clientX - this.mouse.rawDX)
            / window.innerWidth) * 2;
        this.mouse.y = ((event.clientY - this.mouse.rawDY)
            / window.innerHeight)* 2;
      }
      this.mouse.rawDX = event.clientX;
      this.mouse.rawDY = event.clientY;
    })
  }

  updateSize(w, h) {
    this.width = w;
    this.height = h;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( w, h );
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
    //this.sphere.rotation.x += 0.001;
    this.sphere.rotation.y += 0.001;
    this.clouds.rotation.y += 0.001;
    this.group.rotation.y = this.mouse.x * 0.5;
    let time = (Date.now() - this.uStartTime) / 1000;

    EARTH_SHADER.uniforms.uTime.value = time;
    CLOUD_SHADER.uniforms.uTime.value = time;
    EARTH_SHADER.needsUpdate = true;
    CLOUD_SHADER.needsUpdate = true;
  }
}
