import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // Preload the assets you'll need for the game here
    // For example: player spritesheet, platform images, and collectible images

    // ... other assets preload ...

    this.load.spritesheet(
      "player",
      "assets/Spritesheets/spritesheet_players.png",
      {
        frameWidth: 128,
        frameHeight: 256,
      }
    );

    this.load.image("platform", "assets/PNG/Ground/Grass/grass.png");
    this.load.image("collectible", "assets/PNG/Items/coinGold.png");
  }

  create() {
    // Set up any required animations or other configurations here
    // Create the player animations
    this.createPlayerAnimations();

    // Start the MainScene after setting up the BootScene
    this.scene.start("MainScene");
  }

  createPlayerAnimations() {
    // Idle animation
    this.anims.create({
      key: "player_idle",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [5],
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Run animation
    this.anims.create({
      key: "player_run",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [12, 20, 28, 36],
      }),
      frameRate: 15,
      repeat: -1,
    });

    // Jump animation
    this.anims.create({
      key: "player_jump",
      frames: this.anims.generateFrameNumbers("player", { frames: [22, 30] }),
      frameRate: 1,
      repeat: 0,
    });

    // Add more animations as needed
  }
}
