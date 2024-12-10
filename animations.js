export function createAnimations(scene) {
  scene.anims.create({
    key: 'mario-walk',
    frames: scene.anims.generateFrameNumbers('mario', { start: 1, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  scene.anims.create({
    key: 'mario-idle',
    frames: [{ key: 'mario', frame: 0 }],
    frameRate: 10
  });

  scene.anims.create({
    key: 'mario-jump',
    frames: [{ key: 'mario', frame: 4 }],
    frameRate: 10
  });

  scene.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 5 }],
    frameRate: 10
  });
}