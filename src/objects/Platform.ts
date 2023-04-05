import Phaser from "phaser";

export default class Platform extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "platform");

    // Add the platform to the scene and enable physics
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);

    // Set the platform to be immovable
    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setAllowGravity(false);
    body.setImmovable(true);
  }
}
