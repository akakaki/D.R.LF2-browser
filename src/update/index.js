export default function () {
  if (this.key.up.isDown) {
    this.player.body.setVelocityY(-1 * this.characterData.walkDistance)
    this.player.list[0].play(this.walk, true)
  } else if (this.key.right.isDown) {
    this.player.body.setVelocityX(this.characterData.walkDistance)
    this.player.list[0].flipX = false
    this.player.list[0].play(this.walk, true)
  } else if (this.key.down.isDown) {
    this.player.body.setVelocityY(this.characterData.walkDistance)
    this.player.list[0].play(this.walk, true)
  } else if (this.key.left.isDown) {
    this.player.body.setVelocityX(-1 * this.characterData.walkDistance)
    this.player.list[0].flipX = true
    this.player.list[0].play(this.walk, true)
  } else if (this.key.jump.isDown) {
    this.player.list[0].play(this.jump, true)
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
    this.player.list[0].play(attack, true)
  } else if (this.key.attack.isUp && this.characterData.status === 'atk' && this.player.list[0].anims.currentFrame.nextFrame.isLast) {
    this.characterData.status = ''
  } else if (this.key.defense.isDown) {
    this.player.list[0].play(def, true)
  } else if (!this.action.includes(this.characterData.status)) {
    this.characterData.status = ''
    this.player.body.setVelocity(0)
    this.player.list[0].play(this.stand, true)
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