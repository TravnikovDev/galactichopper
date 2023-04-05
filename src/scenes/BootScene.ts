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
      "assets/PNG/Spritesheets/spritesheet_players.png",
      {
        frameWidth: 72,
        frameHeight: 97,
      }
    );

    this.load.image("platform", "assets/PNG/Tiles/tile_0002.png");
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
        frames: [0, 1, 2, 3],
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Run animation
    this.anims.create({
      key: "player_run",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [4, 5, 6, 7, 8, 9, 10, 11],
      }),
      frameRate: 15,
      repeat: -1,
    });

    // Jump animation
    this.anims.create({
      key: "player_jump",
      frames: this.anims.generateFrameNumbers("player", { frames: [12] }),
      frameRate: 1,
      repeat: 0,
    });

    // Add more animations as needed
  }
}
