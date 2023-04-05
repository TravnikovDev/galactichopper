import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private moveSpeed: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");

    // Add the player to the scene and enable physics
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);

    // Set up the player's initial properties
    this.moveSpeed = 200;
    this.setScale(1);
    this.setSize(128, 256); // Make sure the body size matches the frame size of the player sprite
    this.setOrigin(0.5, 1);
    this.setCollideWorldBounds(true);

    // Play the idle animation by default
    this.play("player_idle");
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    // Reset the player's horizontal velocity
    this.setVelocityX(0);

    // Handle left and right movement
    if (cursors.left.isDown) {
      this.setVelocityX(-this.moveSpeed);
      this.play("player_run", true);
      this.setFlipX(true);
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.moveSpeed);
      this.play("player_run", true);
      this.setFlipX(false);
    } else {
      this.play("player_idle", true);
    }

    // Handle jumping
    if (cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-400);
      this.play("player_jump", true);
    }
  }
}
