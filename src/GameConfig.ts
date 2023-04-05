import BootScene from "./scenes/BootScene";
import MainScene from "./scenes/MainScene";

const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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
