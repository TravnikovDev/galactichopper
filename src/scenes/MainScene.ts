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
    this.cameras.main.setBackgroundColor('0x87ceeb');

    // Add the player character to the scene
    this.player = new Player(this, 100, this.scale.height - 100);
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
    this.generatePlatforms();
  }

  update() {
    // Update the player based on input
    this.player.update(this.cursors);
  }

  generatePlatforms() {
    // Define the platform generation parameters
    const numPlatforms = 10;
    const platformWidth = 200;
    const platformHeight = 20;
    const minGap = 200;
    const maxGap = 400;
    const minHeightDifference = -100;
    const maxHeightDifference = 100;

    // Generate platforms
    for (let i = 0; i < numPlatforms; i++) {
      const x = i * (platformWidth + Phaser.Math.Between(minGap, maxGap));
      const y =
        this.scale.height / 2 +
        Phaser.Math.Between(minHeightDifference, maxHeightDifference);

      const platform = new Platform(this, x, y, platformWidth, platformHeight);
      this.platforms.add(platform);
    }

    // Add collision between the player and the platforms
    this.physics.add.collider(this.player, this.platforms);
  }
}
