window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
      "#60D394",
      "#D36060",
      "#C060D3",
      "#D3D160",
      "#606BD3",
      "#60C2D3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function(){
      visual.removeChild(this);
    });
  };
});
