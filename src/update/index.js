export default function () {
  http://labs.phaser.io/edit.html?src=src/input/keyboard/just%20down.js
  const keyboardDown = [
    this.key.up.isDown,
    this.key.down.isDown,
    this.key.right.isDown,
    this.key.left.isDown,
  ]
  if (keyboardDown.includes(true)) return false

  if (this.key.up.isDown) {
    this.player.body.setVelocityY(-1 * this.characterData.walkDistance)
    this.player.scene.character.play(this.walk, true)
  } else if (this.key.right.isDown) {
    this.player.body.setVelocityX(this.characterData.walkDistance)
    this.player.scene.character.flipX = false
    this.player.scene.character.play(this.walk, true)
  } else if (this.key.down.isDown) {
    this.player.body.setVelocityY(this.characterData.walkDistance)
    this.player.scene.character.play(this.walk, true)
  } else if (this.key.left.isDown) {
    this.player.body.setVelocityX(-1 * this.characterData.walkDistance)
    this.player.scene.character.flipX = true
    this.player.scene.character.play(this.walk, true)
  } else if (Phaser.Input.Keyboard.JustDown(this.key.jump)) {
    
    this.player.scene.character.play(this.jump, true)
    // https://www.html5gamedevs.com/topic/39389-key-press-event-non-repeat-keydown-event/
    // jumpStatus.position = player.body.position.y - jumpStatus.height
    
    // const qq = setInterval(() => {
    //   if (jumpStatus.position <= player.body.position.y) {
    //     player.body.setVelocityY(-140)
    //   } else {
    //     player.body.setVelocityY(0)
    //     clearInterval(qq)
    //     // const qq1 = setInterval(() => {

    //     // }, 100)
    //     console.log('qq')
    //   }
    // }, 100)
  } else if (this.key.attack.isDown) {
    this.characterData.status = 'atk'
    this.player.scene.character.play(this.attack, true)
  } else if (this.key.attack.isUp && this.characterData.status === 'atk' && this.player.scene.character.anims.currentFrame.nextFrame.isLast) {
    this.characterData.status = ''
  } else if (this.key.defense.isDown) {
    this.player.scene.character.play(this.def, true)
  } else if (!this.action.includes(this.characterData.status)) {
    this.characterData.status = ''
    this.player.body.setVelocity(0)
    this.player.scene.character.play(this.stand, true)
  }


  // player.setVelocity(0)
  // console.log(player.body.blocked.down)

  // console.log(cursors)
  // player.anims.play(stand, true)

  // if (this.key.right.isDown) {
  //   player.setVelocityX(140)
  //   player.anims.play(walk, true)
  // } else {
  //   player.resetFlip()

  //   // player.setVelocityX(0)
  //   player.anims.play(stand, true)
  // }

  // if (cursors.right.isDown) {
  //   player.flipX = false
  //   if (double) {
  //     player.setVelocityX(230)
  //     player.anims.play(run, true)
  //   } else {
  //     player.setVelocityX(140)
  //     player.anims.play(walk, true)
  //     key = 'right'
  //   }
  // } else if (cursors.left.isDown) {
  //   player.flipX = true
  //   if (double) {
  //     player.setVelocityX(-230)
  //     player.anims.play(run, true)
  //   } else {
  //     player.setVelocityX(-140)
  //     player.anims.play(walk, true)
  //     key = 'left'
  //   }
  // } else if (cursors.up.isDown) {
  //   player.flipX = true
  //   if (double) {
  //     player.setVelocityY(-230)
  //     player.anims.play(run, true)
  //   } else {
  //     player.setVelocityY(-140)
  //     player.anims.play(walk, true)
  //     key = 'left'
  //   }
  // } else if (cursors.down.isDown) {
  //   player.flipX = true
  //   if (double) {
  //     player.setVelocityY(230)
  //     player.anims.play(run, true)
  //   } else {
  //     player.setVelocityY(140)
  //     player.anims.play(walk, true)
  //     key = 'left'
  //   }
  // } else {
  //   // setTimeout(() => {
  //   //   double = ''
  //   // }, 500)
  //   player.setVelocityX(0)
  //   player.setVelocityY(0)
  //   player.anims.play(stand, true)
  // }

  // if (cursors.right.isUp && key === 'right') {
  //   setTimeout(() => {
  //     key = cursors.right.isDown ? 'right' : ''
  //     double = cursors.right.isDown ? 'right' : ''
  //   }, keyDelay)
  // }

  // if (cursors.left.isUp && key === 'left') {
  //   setTimeout(() => {
  //     key = cursors.left.isDown ? 'left' : ''
  //     double = cursors.left.isDown ? 'left' : ''
  //   }, keyDelay)
  // }

  // if (!key) setTimeout(() => {
  //   if (!key) double = ''
  // }, keyDelay)

  // // if (cursors.up.isDown && player.body.touching.down) {
  // //   player.setVelocityY(-330);
  // // }
}