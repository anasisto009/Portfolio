import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 5000 }) => {
    const mesh = useRef();
    const light = useRef();

    // Use useMemo to avoid recomputing on every render
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            // Update the particle's internal time
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            // Particle position
            dummy.position.set(
                (xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10),
                (yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10),
                (zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10)
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#6366f1" transparent opacity={0.3} />
        </instancedMesh>
    );
};

export const BackgroundCanvas = () => {
    const [hasWebGL, setHasWebGL] = React.useState(true);

    React.useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
            if (!gl) setHasWebGL(false);
        } catch {
            setHasWebGL(false);
        }
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[#030014] overflow-hidden">
            {/* Minimal Grid */}
            <div className="absolute inset-0 grid-background opacity-10 pointer-events-none z-10" />

            {hasWebGL ? (
                <Canvas
                    camera={{ position: [0, 0, 20], fov: 75 }}
                    dpr={1}
                    gl={{
                        antialias: false,
                        powerPreference: "high-performance",
                        alpha: true
                    }}
                >
                    <Particles count={1000} />
                </Canvas>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
            )}

            {/* Final atmosphere overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent pointer-events-none z-20" />
        </div>
    );
};
