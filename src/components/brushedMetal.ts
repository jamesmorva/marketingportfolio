import * as THREE from 'three';

/**
 * Creates a procedural brushed metal micro-texture canvas for roughness and bump mapping.
 * Simulates fine linear/anisotropic hairline brushed titanium / steel grain.
 */
export function createBrushedMetalTextures(): {
  roughnessMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
} {
  const width = 512;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Base medium-dark grey tone for brushed slate finish
    ctx.fillStyle = '#4a505b';
    ctx.fillRect(0, 0, width, height);

    // Fine linear brushed hairline noise
    for (let y = 0; y < height; y++) {
      // Subtle variations across rows
      const rowBase = (Math.random() - 0.5) * 35;
      for (let x = 0; x < width; x += 2) {
        const noise = Math.floor(85 + rowBase + (Math.random() - 0.5) * 45);
        const clamped = Math.max(50, Math.min(135, noise));
        ctx.fillStyle = `rgb(${clamped},${clamped + 2},${clamped + 4})`;
        // Elongated horizontal hairline stroke
        const strokeLen = Math.floor(Math.random() * 24) + 6;
        ctx.fillRect(x, y, strokeLen, 1);
      }
    }
  }

  const roughnessMap = new THREE.CanvasTexture(canvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(3, 8);

  const bumpMap = new THREE.CanvasTexture(canvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(3, 8);

  return { roughnessMap, bumpMap };
}

/**
 * Factory for creating a realistic Brushed Titanium / Brushed Stainless Steel finish
 */
export function createBrushedMetalMaterial(): {
  material: THREE.MeshPhysicalMaterial;
  dispose: () => void;
} {
  const { roughnessMap, bumpMap } = createBrushedMetalTextures();

  const material = new THREE.MeshPhysicalMaterial({
    color: 0x5a6270, // Refined medium-dark slate titanium grey (lighter than previous dark graphite)
    metalness: 0.82, // Crisp metallic response
    roughness: 0.36, // Enhanced brushed anisotropic sheen
    roughnessMap: roughnessMap,
    bumpMap: bumpMap,
    bumpScale: 0.003, // Micro brushed hairline grain
    clearcoat: 0.32, // Subtle protective clearcoat for soft highlights
    clearcoatRoughness: 0.24,
    reflectivity: 0.80
  });

  const dispose = () => {
    material.dispose();
    roughnessMap.dispose();
    bumpMap.dispose();
  };

  return { material, dispose };
}
