import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createBrushedMetalMaterial } from './brushedMetal';

export const TrademarkBackground3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera setup with dynamic FOV based on screen width
    const getAspect = () => window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(40, getAspect(), 0.1, 1000);
    camera.position.set(0, 0, 8.4);

    // 3. Renderer with high dynamic range tone mapping & antialiasing
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig - Tailored for ai.work's restrained aesthetic
    // Soft neutral ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Key front light (crisp neutral daylight)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(3, 5, 8);
    scene.add(keyLight);

    // Subtle warm-neutral fill light (bone tint #d4d0c9)
    const fillLight = new THREE.DirectionalLight(0xd4d0c9, 1.4);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    // Subtle cool rim light for edge definition
    const rimLight = new THREE.PointLight(0xa1a1a1, 4.0, 25);
    rimLight.position.set(4, -3, 3);
    scene.add(rimLight);

    // Dynamic cursor point light (clean specular sheen on titanium)
    const mouseLight = new THREE.PointLight(0xffffff, 2.5, 12);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);

    // 5. Construct Mathematically Symmetrical, Fully Connected 3D Trademark
    const trademarkGroup = new THREE.Group();
    scene.add(trademarkGroup);

    // Brushed Titanium / Stainless Steel Finish
    const { material: brushedMaterial, dispose: disposeBrushedMaterial } = createBrushedMetalMaterial();

    const tubeRadius = 0.22;
    const radialSegments = 24;
    const sphereJointGeo = new THREE.SphereGeometry(tubeRadius * 1.04, 24, 24);

    // Cylinder segment builder
    const createCylinderSegment = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const distance = p1.distanceTo(p2);
      const cylGeo = new THREE.CylinderGeometry(tubeRadius, tubeRadius, distance, radialSegments, 1, false);
      const mesh = new THREE.Mesh(cylGeo, brushedMaterial);

      const midpoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mesh.position.copy(midpoint);

      const direction = new THREE.Vector3().subVectors(p2, p1).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      mesh.quaternion.setFromUnitVectors(up, direction);

      trademarkGroup.add(mesh);
    };

    // Spherical joint builder at connected points
    const addJoint = (pos: THREE.Vector3) => {
      const joint = new THREE.Mesh(sphereJointGeo, brushedMaterial);
      joint.position.copy(pos);
      trademarkGroup.add(joint);
    };

    // EXACT MATHEMATICAL SYMMETRY (Mirrored across X = 0)
    const Y_PEAKS = 1.95;
    const Y_FEET = -1.85;
    const Y_JUNCTIONS = -0.05;
    const Y_VALLEY = -0.55;

    const X_FEET = 2.15;
    const X_JUNCTIONS = 1.75;
    const X_PEAKS = 1.35;

    // 8 Core Primary Vertices
    const V_LEFT_FOOT = new THREE.Vector3(-X_FEET, Y_FEET, 0);
    const V_LEFT_JUNCTION = new THREE.Vector3(-X_JUNCTIONS, Y_JUNCTIONS, 0);
    const V_LEFT_PEAK = new THREE.Vector3(-X_PEAKS, Y_PEAKS, 0);

    const V_CENTER_PEAK = new THREE.Vector3(0, Y_PEAKS, 0);
    const V_CENTER_VALLEY = new THREE.Vector3(0, Y_VALLEY, 0);

    const V_RIGHT_PEAK = new THREE.Vector3(X_PEAKS, Y_PEAKS, 0);
    const V_RIGHT_JUNCTION = new THREE.Vector3(X_JUNCTIONS, Y_JUNCTIONS, 0);
    const V_RIGHT_FOOT = new THREE.Vector3(X_FEET, Y_FEET, 0);

    // Exact calculated diamond intersections
    const V_CROSS_LEFT = new THREE.Vector3(-0.834, 0.998, 0);
    const V_CROSS_RIGHT = new THREE.Vector3(0.834, 0.998, 0);

    // Connect all vertices with seamless sphere joints
    [
      V_LEFT_FOOT,
      V_LEFT_JUNCTION,
      V_LEFT_PEAK,
      V_CENTER_PEAK,
      V_CENTER_VALLEY,
      V_RIGHT_PEAK,
      V_RIGHT_JUNCTION,
      V_RIGHT_FOOT,
      V_CROSS_LEFT,
      V_CROSS_RIGHT
    ].forEach(addJoint);

    // 1. Outer Left Leg (Foot -> Junction -> Peak)
    createCylinderSegment(V_LEFT_FOOT, V_LEFT_JUNCTION);
    createCylinderSegment(V_LEFT_JUNCTION, V_LEFT_PEAK);

    // 2. Outer Right Leg (Peak -> Junction -> Foot)
    createCylinderSegment(V_RIGHT_PEAK, V_RIGHT_JUNCTION);
    createCylinderSegment(V_RIGHT_JUNCTION, V_RIGHT_FOOT);

    // 3. Left Inner Diagonal (Left Peak -> Cross Left -> Valley)
    createCylinderSegment(V_LEFT_PEAK, V_CROSS_LEFT);
    createCylinderSegment(V_CROSS_LEFT, V_CENTER_VALLEY);

    // 4. Right Inner Diagonal (Valley -> Cross Right -> Right Peak)
    createCylinderSegment(V_CENTER_VALLEY, V_CROSS_RIGHT);
    createCylinderSegment(V_CROSS_RIGHT, V_RIGHT_PEAK);

    // 5. Center Diagonal Left (Center Peak -> Cross Left -> Left Junction)
    createCylinderSegment(V_CENTER_PEAK, V_CROSS_LEFT);
    createCylinderSegment(V_CROSS_LEFT, V_LEFT_JUNCTION);

    // 6. Center Diagonal Right (Center Peak -> Cross Right -> Right Junction)
    createCylinderSegment(V_CENTER_PEAK, V_CROSS_RIGHT);
    createCylinderSegment(V_CROSS_RIGHT, V_RIGHT_JUNCTION);

    // Ambient floating dust particles for 3D depth
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 18;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.045,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. State Tracking for Cursor & Scroll
    const mousePos = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scrollState = {
      currentY: 0,
      targetY: 0,
      totalProgress: 0,
      heroFraction: 0
    };

    // 7. Event Listeners with passive performance
    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      mousePos.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mousePos.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
        mousePos.targetY = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollState.targetY = scrollY;
      scrollState.totalProgress = Math.min(Math.max(scrollY / docHeight, 0), 1);
      // Hero viewport section fraction (0 to 1 over first 600px)
      scrollState.heroFraction = Math.min(scrollY / 600, 1);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (springy lerp)
      mousePos.x += (mousePos.targetX - mousePos.x) * 0.07;
      mousePos.y += (mousePos.targetY - mousePos.y) * 0.07;

      // Smooth scroll interpolation
      scrollState.currentY += (scrollState.targetY - scrollState.currentY) * 0.085;

      const hf = scrollState.heroFraction;
      const tp = scrollState.totalProgress;

      // DYNAMIC TRANSITION (HERO -> BACKGROUND):
      // When at scroll 0 (Hero):
      // The trademark is large, eye-level, commanding center stage (+0.75 Y, 0 Z).
      // When scrolling down past hero:
      // Smoothly shifts into the background: Z drops to -2.8, Y centers to 0.0.
      // Base scale: Compact, refined overall size
      const isSmallScreen = window.innerWidth < 768;
      const heroScale = isSmallScreen ? 0.68 : 0.88;
      const backgroundScale = isSmallScreen ? 0.48 : 0.68;
      const currentScale = heroScale + (backgroundScale - heroScale) * hf;

      // Position: Starts elevated in Hero view (+1.05), settles into background center (0.0) as user scrolls
      const targetY = 1.05 + (0.0 - 1.05) * hf;
      const targetZ = 0.0 + (-2.8 - 0.0) * hf;

      // CURSOR REACTION:
      // Directly tilts in 3D according to cursor coordinates!
      const cursorTiltX = mousePos.y * 0.42;
      const cursorTiltY = mousePos.x * 0.52;

      // SCROLL ROTATION:
      // Rotates smoothly across the entire scroll length of the page (approx 2.5 full 360 turns)
      const scrollRotY = tp * Math.PI * 5;
      const scrollTiltX = Math.sin(tp * Math.PI * 2.5) * 0.24;

      // Gentle idle breathing
      const idleFloatY = Math.sin(elapsedTime * 1.5) * 0.06;
      const idleRollZ = Math.cos(elapsedTime * 1.2) * 0.03;

      if (trademarkGroup) {
        trademarkGroup.position.x = mousePos.x * 0.35;
        trademarkGroup.position.y = targetY + idleFloatY + mousePos.y * 0.25;
        trademarkGroup.position.z = targetZ;

        trademarkGroup.scale.set(currentScale, currentScale, currentScale);

        // Combined rotations
        trademarkGroup.rotation.x = scrollTiltX + cursorTiltX;
        trademarkGroup.rotation.y = scrollRotY + cursorTiltY + (elapsedTime * 0.06);
        trademarkGroup.rotation.z = idleRollZ - (mousePos.x * 0.12);
      }

      // Cursor-tracking specular point light
      if (mouseLight) {
        mouseLight.position.x = mousePos.x * 6.5;
        mouseLight.position.y = mousePos.y * 5.0;
        mouseLight.position.z = 4.0 + (1 - hf) * 1.5;
      }

      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      disposeBrushedMaterial();
      sphereJointGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
