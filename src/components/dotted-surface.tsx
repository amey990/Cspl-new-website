// 'use client';

// import { cn } from '@/lib/utils';
// import { useTheme } from 'next-themes';
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

// /**
//  * Dotted wave sized to its parent. Positioned higher so it sits near the text.
//  */
// export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
//   const { theme } = useTheme();

//   const mountRef = useRef<HTMLDivElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const threeRef = useRef<{
//     scene: THREE.Scene;
//     camera: THREE.PerspectiveCamera;
//     renderer: THREE.WebGLRenderer;
//     geometry: THREE.BufferGeometry;
//     points: THREE.Points;
//   } | null>(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mount) return;

//     const rect = mount.getBoundingClientRect();
//     let width = Math.max(1, rect.width);
//     let height = Math.max(1, rect.height);

//     const scene = new THREE.Scene();

//     // Lower the camera a touch so the horizon rises (waves appear higher)
//     const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
//     camera.position.set(0, 240, 980);
//     camera.lookAt(new THREE.Vector3(0, 0, 0));

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 0);
//     mount.appendChild(renderer.domElement);

//     // Grid parameters tuned for visibility under the buttons
//     const SEPARATION = 90;
//     const AMPLITUDE = 60;
//     const AMOUNTX = Math.ceil(width / SEPARATION) + 14;
//     const AMOUNTY = Math.ceil(height / SEPARATION) + 22;

//     const positions: number[] = [];
//     const colors: number[] = [];
//     const geometry = new THREE.BufferGeometry();

//     for (let ix = 0; ix < AMOUNTX; ix++) {
//       for (let iy = 0; iy < AMOUNTY; iy++) {
//         const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
//         const y = 0;
//         const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
//         positions.push(x, y, z);
//         if (theme === 'dark') colors.push(235, 235, 235);
//         else colors.push(30, 30, 30);
//       }
//     }

//     geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//     geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

//     const material = new THREE.PointsMaterial({
//       size: 8.5, // visible but not chunky
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.95,
//       sizeAttenuation: true,
//     });

//     const points = new THREE.Points(geometry, material);

//     // Lift the whole grid up so it kisses the text/buttons
//     points.position.y = 120; // tweak 90–160 to taste
//     scene.add(points);

//     let t = 0;
//     const animate = () => {
//       rafRef.current = requestAnimationFrame(animate);

//       const posAttr = geometry.attributes.position;
//       const arr = posAttr.array as Float32Array;

//       let i = 0;
//       for (let ix = 0; ix < AMOUNTX; ix++) {
//         for (let iy = 0; iy < AMOUNTY; iy++) {
//           const idx = i * 3;
//           arr[idx + 1] =
//             Math.sin((ix + t) * 0.28) * AMPLITUDE +
//             Math.sin((iy + t) * 0.45) * AMPLITUDE;
//           i++;
//         }
//       }

//       posAttr.needsUpdate = true;
//       renderer.render(scene, camera);
//       t += 0.08;
//     };

//     const ro = new ResizeObserver((entries) => {
//       for (const entry of entries) {
//         const cr = entry.contentRect;
//         width = Math.max(1, cr.width);
//         height = Math.max(1, cr.height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//       }
//     });
//     ro.observe(mount);

//     animate();
//     threeRef.current = { scene, camera, renderer, geometry, points };

//     return () => {
//       ro.disconnect();
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//       if (threeRef.current) {
//         const { scene, renderer } = threeRef.current;
//         scene.traverse((o) => {
//           if (o instanceof THREE.Points) {
//             o.geometry.dispose();
//             if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
//             else o.material.dispose();
//           }
//         });
//         renderer.dispose();
//         if (mount.firstChild) mount.removeChild(mount.firstChild);
//         threeRef.current = null;
//       }
//     };
//   }, [theme]);

//   return (
//     <div
//       ref={mountRef}
//       className={cn('pointer-events-none absolute inset-0', className)}
//       {...props}
//     />
//   );
// }


'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

/**
 * Dotted wave positioned to appear behind hero text
 */
export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { theme } = useTheme();

  const mountRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    geometry: THREE.BufferGeometry;
    points: THREE.Points;
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const rect = mount.getBoundingClientRect();
    let width = Math.max(1, rect.width);
    let height = Math.max(1, rect.height);

    const scene = new THREE.Scene();

    // Camera positioned to make wave visible behind text
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    // camera.position.set(0, 180, 900);
	camera.position.set(0, 200, 1100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Grid parameters
    const SEPARATION = 85;
    // const AMPLITUDE = 55;
	const AMPLITUDE = 35;
    const AMOUNTX = Math.ceil(width / SEPARATION) + 16;
    const AMOUNTY = Math.ceil(height / SEPARATION) + 24;

    const positions: number[] = [];
    const colors: number[] = [];
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        if (theme === 'dark') colors.push(235, 235, 235);
        else colors.push(30, 30, 30);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
    //   opacity: 0.85,
	opacity: 0.6,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);

    // Position wave to flow through the middle of the hero section
    // points.position.y = 80;
	points.position.y=20;
    scene.add(points);

    let t = 0;
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position;
      const arr = posAttr.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          arr[idx + 1] =
            Math.sin((ix + t) * 0.3) * AMPLITUDE +
            Math.sin((iy + t) * 0.5) * AMPLITUDE;
          i++;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      t += 0.06;
    };

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        width = Math.max(1, cr.width);
        height = Math.max(1, cr.height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    ro.observe(mount);

    animate();
    threeRef.current = { scene, camera, renderer, geometry, points };

    return () => {
      ro.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (threeRef.current) {
        const { scene, renderer } = threeRef.current;
        scene.traverse((o) => {
          if (o instanceof THREE.Points) {
            o.geometry.dispose();
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material.dispose();
          }
        });
        renderer.dispose();
        if (mount.firstChild) mount.removeChild(mount.firstChild);
        threeRef.current = null;
      }
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className={cn('pointer-events-none absolute inset-0', className)}
      {...props}
    />
  );
}
