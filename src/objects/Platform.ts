import Phaser from 'phaser';

export default class Platform extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number) {
    super(scene, x, y, width, height);

    // Set up the platform's initial properties
    this.setOrigin(0, 1);
    this.setFillStyle(0x5d5e5e);

    // Add the platform to the scene and enable physics
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Configure the platform as a static physics body
    const body = this.body as Phaser.Physics.Arcade.StaticBody;
  }
}
