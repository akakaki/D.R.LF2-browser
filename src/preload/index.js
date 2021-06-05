export default function () {
  this.load.spritesheet(
    'character1',
    './src/images/bandit_0b.png',
    {
      frameWidth: 80,
      frameHeight: 80,
      // spacing: 1,
    },
  )
  this.load.image(
    'shadow',
    './src/images/shadow.png',
  )
  // this.load.spritesheet('character2', './images/bandit_1b.png', { frameWidth: 80, frameHeight: 80 })
}