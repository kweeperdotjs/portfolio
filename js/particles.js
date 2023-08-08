
const options = {
        interactivity: {
          events: {
            onClick: {
              // this handles the mouse click event
              enable: false,
              mode: "push", // this adds particles
            },
            onHover: {
              // this handles the mouse hover event
              enable: false,
              mode: "repulse", // this make particles move away from the mouse
            },
          },
          modes: {
            push: {
              quantity: 6, // number of particles to add
            },
            repulse: {
              distance: 100, // the distance of the particles from the mouse
            },
          },
        },
        particles: {
          links: {
            enable: false, // this enables links between particles
            opacity: 0.3,
            distance: 200,
          },
          move: {
            enable: true, // this makes particles move
            speed: { min: 0.5, max: 0.5 }, // this is the speed of the particles
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
          },
          size: {
            value: { min: 1, max: 3 }, // this sets the size of the particles
          },
        },
      };

tsParticles.load("tsparticles", options);