import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

export default function Particles({ trigger }) {
  const groupRef = useRef();
  const particlesRef = useRef([]);
  const meshesRef = useRef([]);
  const [shouldCreate, setShouldCreate] = useState(false);

  // Create particles when chest opens
  useEffect(() => {
    if (trigger && !shouldCreate) {
      setShouldCreate(true);
      // Clear old particles
      meshesRef.current.forEach((mesh) => {
        if (groupRef.current) {
          groupRef.current.remove(mesh);
        }
      });
      meshesRef.current = [];
      particlesRef.current = [];

      // Create new particles
      for (let i = 0; i < 20; i++) {
        const particle = {
          position: [
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 2,
          ],
          velocity: [
            (Math.random() - 0.5) * 0.2,
            Math.random() * 0.2 + 0.05,
            (Math.random() - 0.5) * 0.2,
          ],
          life: 1,
          maxLife: 1,
          size: Math.random() * 0.08 + 0.03,
        };

        const geometry = new THREE.SphereGeometry(1, 8, 8);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffa500,
          emissive: 0xff8c00,
          wireframe: false,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(particle.size, particle.size, particle.size);
        mesh.position.set(...particle.position);

        if (groupRef.current) {
          groupRef.current.add(mesh);
        }

        particlesRef.current.push(particle);
        meshesRef.current.push(mesh);
      }
    }
  }, [trigger, shouldCreate]);

  // Reset shouldCreate when chest closes
  useEffect(() => {
    if (!trigger && shouldCreate) {
      setShouldCreate(false);
    }
  }, [trigger, shouldCreate]);

  // Update particles
  useFrame(() => {
    particlesRef.current.forEach((particle, idx) => {
      if (particle.life > 0) {
        // Update position
        particle.position[0] += particle.velocity[0];
        particle.position[1] += particle.velocity[1];
        particle.position[2] += particle.velocity[2];

        // Apply gravity
        particle.velocity[1] *= 0.98;
        particle.velocity[1] -= 0.01;
        particle.velocity[0] *= 0.98;
        particle.velocity[2] *= 0.98;

        // Decrease life
        particle.life -= 0.015;

        // Update mesh
        const mesh = meshesRef.current[idx];
        if (mesh) {
          mesh.position.set(...particle.position);
          mesh.material.opacity = Math.max(0, particle.life);
          mesh.material.transparent = true;
        }
      }
    });
  });

  return <group ref={groupRef} />;
}

