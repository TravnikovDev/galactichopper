import Phaser from "phaser";
import Player from "../characters/Player";
import Platform from "../objects/Platform";

export default class MainScene extends Phaser.Scene {
  private player!: Player;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private platforms!: Phaser.GameObjects.Group;

  constructor() {
    super("MainScene");
  }

  create() {
    // Set up the background color or image for the scene
    this.cameras.main.setBackgroundColor("0x87ceeb");

    // Add players
    this.createPlayer();
    this.add.existing(this.player);

    // Enable physics for the player
    this.physics.add.existing(this.player);

    // Set up the camera to follow the player
    this.cameras.main.startFollow(this.player, true);

    // Set up input handling for player movement
    this.cursors = this.input.keyboard.createCursorKeys();

    // Initialize the platforms group
    this.platforms = this.add.group();

    // Generate the initial set of platforms
    this.createPlatforms(); // Change 'generatePlatforms()' to 'createPlatforms()'

    // Add collision between the player and the platforms
    this.physics.add.collider(this.player, this.platforms);

    this.handleWindowResize();
  }

  update() {
    // Update the player based on input
    this.player.update(this.cursors);
  }

  handleWindowResize() {
    const resize = () => {
      this.scale.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);
  }

  createPlatforms() {
    // Create a starting platform for the player
    const startingPlatform = new Platform(
      this,
      this.scale.width / 2,
      this.scale.height * 0.7
    );
    startingPlatform.setScale(2, 1); // Adjust the size of the starting platform if needed
    this.platforms.add(startingPlatform);

    // Generate the other platforms
    for (let i = 0; i < 10; i++) {
      const x = Phaser.Math.Between(50, this.scale.width - 50);
      const y = Phaser.Math.Between(100, this.scale.height - 100);
      const scaleX = Phaser.Math.FloatBetween(0.5, 2);
      const scaleY = Phaser.Math.FloatBetween(0.5, 1);
      const platform = new Platform(this, x, y);
      platform.setScale(scaleX, scaleY);
      this.platforms.add(platform);
    }
  }

  createPlayer() {
    // Set the player's starting position to be on the starting platform
    const playerX = this.scale.width / 2;
    const playerY = this.scale.height * 0.7 - 256; // Subtract the player's height (32) to place the player on the platform
    this.player = new Player(this, playerX, playerY);
  }
}
