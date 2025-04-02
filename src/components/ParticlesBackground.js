import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Asegura que esté detrás del contenido
        background: {
          color: "#282A3A",
        },
        particles: {
          color: { value: "#C69749" },
          move: { enable: true, speed: 1.5 },
          number: { value: 80 },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: "#735F32",
            opacity: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
