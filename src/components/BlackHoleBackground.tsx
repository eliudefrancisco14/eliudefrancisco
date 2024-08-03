

"use client";

import React, { useEffect, useRef } from "react";

const BlackHoleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Verificação adicional para garantir que canvas não seja nulo
    const ctx = canvas.getContext("2d");

    if (!ctx) return; // Verificação adicional para garantir que ctx não seja nulo

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Global Animation Setting
    const requestAnimFrame = window.requestAnimationFrame || function (callback: FrameRequestCallback) {
      return window.setTimeout(callback, 1000 / 60);
    };

    // Particles Around the Parent
    function Particle(this: any, x: number, y: number, distance: number) {
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random();
      this.opacity = (Math.random() * 5 + 2) / 10;
      this.distance = (1 / this.opacity) * distance;
      this.speed = this.distance * 0.000002;
      this.position = {
        x: x + this.distance * Math.cos(this.angle),
        y: y + this.distance * Math.sin(this.angle)
      };
      this.draw = function () {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      };
      this.update = function () {
        this.angle += this.speed;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle)
        };
        this.draw();
      };
    }

    function Emitter(this: any, x: number, y: number) {
      this.position = { x: x, y: y };
      this.radius = 120;
      this.count = 2000;
      this.particles = [];

      for (let i = 0; i < this.count; i++) {
        this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
      }
    }

    Emitter.prototype = {
      draw: function () {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      },
      update: function () {
        for (let i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      }
    };

    const emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    function loop() {
      if (!ctx) return;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      emitter.update();
      requestAnimFrame(loop);
    }

    const animationId = requestAnimFrame(loop);

    return () => {
      // Cleanup on component unmount
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BlackHoleBackground;
