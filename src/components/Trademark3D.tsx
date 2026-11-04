import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, Compass } from 'lucide-react';
import { createBrushedMetalMaterial } from './brushedMetal';

interface Trademark3DProps {
  className?: string;
  size?: 'hero' | 'floating' | 'inline';
  showControls?: boolean;
}

export const Trademark3D: React.FC<Trademark3DProps> = ({
  className = '',
  size = 'hero',
  showControls = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [scrollStats, setScrollStats] = useState({ progress: 0 });

  const rotationRef = useRef({ x: 0.15, y: 0.25 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.2);

    // 3. Renderer with antialiasing & tone mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.5);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    const rimLightBlue = new THREE.PointLight(0x3b82f6, 5.0, 20);
    rimLightBlue.position.set(4, -3, 3);
    scene.add(rimLightBlue);

    const accentCyan = new THREE.PointLight(0x06b6d4, 3.5, 18);
    accentCyan.position.set(-4, 3, 2);
    scene.add(accentCyan);

    const mouseLight = new THREE.PointLight(0x60a5fa, 3.0, 12);
    mouseLight.position.set(0, 0, 4);
    scene.add(mouseLight);

    // 5. Build Symmetrical, Connected 3D Trademark Geometry
    const trademarkGroup = new THREE.Group();
    groupRef.current = trademarkGroup;
    scene.add(trademarkGroup);

    // Brushed metal material with realistic hairline grain & soft anisotropic specular highlights
    const { material: brushedMaterial, dispose: disposeBrushedMaterial } = createBrushedMetalMaterial();

    const tubeRadius = 0.22;
    const radialSegments = 24;
    const sphereJointGeo = new THREE.SphereGeometry(tubeRadius * 1.04, 24, 24);

    trademarkGroup.scale.set(0.68, 0.68, 0.68);

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

    const addJoint = (pos: THREE.Vector3) => {
      const joint = new THREE.Mesh(sphereJointGeo, brushedMaterial);
      joint.position.copy(pos);
      trademarkGroup.add(joint);
    };

    // EXACT Symmetrical Vertices
    const Y_PEAKS = 1.95;
    const Y_FEET = -1.85;
    const Y_JUNCTIONS = -0.05;
    const Y_VALLEY = -0.55;

    const X_FEET = 2.15;
    const X_JUNCTIONS = 1.75;
    const X_PEAKS = 1.35;

    const V_LEFT_FOOT = new THREE.Vector3(-X_FEET, Y_FEET, 0);
    const V_LEFT_JUNCTION = new THREE.Vector3(-X_JUNCTIONS, Y_JUNCTIONS, 0);
    const V_LEFT_PEAK = new THREE.Vector3(-X_PEAKS, Y_PEAKS, 0);

    const V_CENTER_PEAK = new THREE.Vector3(0, Y_PEAKS, 0);
    const V_CENTER_VALLEY = new THREE.Vector3(0, Y_VALLEY, 0);

    const V_RIGHT_PEAK = new THREE.Vector3(X_PEAKS, Y_PEAKS, 0);
    const V_RIGHT_JUNCTION = new THREE.Vector3(X_JUNCTIONS, Y_JUNCTIONS, 0);
    const V_RIGHT_FOOT = new THREE.Vector3(X_FEET, Y_FEET, 0);

    const V_CROSS_LEFT = new THREE.Vector3(-0.834, 0.998, 0);
    const V_CROSS_RIGHT = new THREE.Vector3(0.834, 0.998, 0);

    // All joints connecting
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

    // 6 Symmetrical connected lines
    createCylinderSegment(V_LEFT_FOOT, V_LEFT_JUNCTION);
    createCylinderSegment(V_LEFT_JUNCTION, V_LEFT_PEAK);
    createCylinderSegment(V_RIGHT_PEAK, V_RIGHT_JUNCTION);
    createCylinderSegment(V_RIGHT_JUNCTION, V_RIGHT_FOOT);
    createCylinderSegment(V_LEFT_PEAK, V_CROSS_LEFT);
    createCylinderSegment(V_CROSS_LEFT, V_CENTER_VALLEY);
    createCylinderSegment(V_CENTER_VALLEY, V_CROSS_RIGHT);
    createCylinderSegment(V_CROSS_RIGHT, V_RIGHT_PEAK);
    createCylinderSegment(V_CENTER_PEAK, V_CROSS_LEFT);
    createCylinderSegment(V_CROSS_LEFT, V_LEFT_JUNCTION);
    createCylinderSegment(V_CENTER_PEAK, V_CROSS_RIGHT);
    createCylinderSegment(V_CROSS_RIGHT, V_RIGHT_JUNCTION);

    // Scroll listener
    let scrollProgress = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollStats({ progress: Math.round(scrollProgress * 100) });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const delta = clock.getDelta();

      if (trademarkGroup) {
        if (autoRotate && !isDragging) {
          rotationRef.current.y += delta * 0.45;
        }

        // Apply rotation from mouse drag + scroll offset
        const targetRotX = rotationRef.current.x + (scrollProgress * Math.PI * 0.4);
        const targetRotY = rotationRef.current.y + (scrollProgress * Math.PI * 2.5);

        trademarkGroup.rotation.x = targetRotX;
        trademarkGroup.rotation.y = targetRotY;

        // Subtle tilt follow for cursor reflection
        if (mouseLight) {
          mouseLight.position.x = mousePosRef.current.x * 4;
          mouseLight.position.y = mousePosRef.current.y * 3;
        }
      }

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      disposeBrushedMaterial();
      sphereJointGeo.dispose();
    };
  }, [autoRotate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = mountRef.current?.getBoundingClientRect();
    if (rect) {
      mousePosRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      };
    }

    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    rotationRef.current.y += deltaX * 0.008;
    rotationRef.current.x += deltaY * 0.008;

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // safe ignore
    }
  };

  const resetOrientation = useCallback(() => {
    rotationRef.current = { x: 0.15, y: 0.25 };
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none flex items-center justify-center relative z-10"
        aria-label="Interactive 3D Trademark"
      />

      {/* Modern Sci-Fi Floating Controls Bar */}
      {showControls && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E131F]/80 backdrop-blur-xl border border-white/10 shadow-xl text-xs font-mono text-zinc-300">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
              autoRotate ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/50' : 'hover:bg-white/10 text-zinc-400'
            }`}
            title="Toggle Continuous Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
            <span>{autoRotate ? 'Auto Orbit' : 'Paused'}</span>
          </button>

          <div className="w-[1px] h-3.5 bg-white/15" />

          <button
            onClick={resetOrientation}
            className="flex items-center gap-1 px-2 py-1 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Reset to Front View"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <div className="w-[1px] h-3.5 bg-white/15 hidden sm:block" />

          <span className="text-[10px] text-zinc-500 hidden sm:inline px-1">
            DRAG TO ROTATE
          </span>
        </div>
      )}
    </div>
  );
};
