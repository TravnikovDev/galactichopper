import BootScene from "./scenes/BootScene";
import MainScene from "./scenes/MainScene";

const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [BootScene, MainScene],
};

export default GameConfig;
