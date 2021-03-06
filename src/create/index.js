import keyboard from './keyboard'
import background from './background'
import message from './message'
import character from './character'

export default function () {
  keyboard(this)
  background(this)
  message(this)
  character(this)

  // animation set
  this.stand = this.anims.create({
    key: 'stand',
    frames: this.anims.generateFrameNumbers('character1', { start: 0, end: 3 }),
    frameRate: 32 * 0.3 * 0.4,
    repeat: -1,
    yoyo: true,
  })

  this.walk = this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('character1', { start: 4, end: 7 }),
    frameRate: 32 * (this.characterData.data.walkingFrameRate * 0.1),
    repeat: -1,
    yoyo: true,
  })

  this.run = this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNumbers('character1', { start: 20, end: 22 }),
    frameRate: 32 * 0.3 * 0.4,
    repeat: -1,
    yoyo: true,
  })

  this.attack = this.anims.create({
    key: 'attack',
    frames: this.anims.generateFrameNumbers('character1', { start: 10, end: 13 }),
    frameRate: 32 * 0.3 * 0.4,
    repeat: -1,
  })

  this.jump = this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('character1', { start: 60, end: 62 }),
    frameRate: 32 * 0.3 * 0.4,
  })

  this.def = this.anims.create({
    key: 'def',
    frames: this.anims.generateFrameNumbers('character1', { start: 56, end: 57 }),
    frameRate: 32 * 0.3 * 0.4,
  })

  this.player.scene.character.play(this.stand, true)

  this.runrun = this.input.keyboard.createCombo([this.key.right, this.key.right], { resetOnMatch: true })
  const _this = this.player
  this.input.keyboard.on('keycombomatch', function (event) {
    console.log('_this.input.keyboard', _this.scene.input.keyboard)
    _this.body.setVelocityX(150)
    _this.scene.character.flipX = false
    _this.scene.character.play(_this.scene.run, true)
  });

  // this.walkwalk = this.input.keyboard.addKey('W')
  this.key.right.on('down', function(event) {
    console.log('qq', event)
  })


  // player.add(playerName)
  // this.tweens.add({
  //   targets: container,
  //   angle: 360,
  //   duration: 6000,
  //   yoyo: true,
  //   repeat: -1
  // })
}