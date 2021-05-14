const keyDelay = 120

const gmaeStart = {
  key: 'gameStart',
  preload: function () {
    // this.load.image('bg1', './images/ay758-dykqn.png')
    this.load.spritesheet('character1', './src/images/bandit_0b.png', { frameWidth: 80, frameHeight: 80 })
    // this.load.spritesheet('user', './images/bandit_1b.png', { frameWidth: 80, frameHeight: 80 })
  },
  create: function () {
    // KEYBORAD SETTING
    // cursors = this.input.keyboard.createCursorKeys()
    // https://keycode.info/
    this.key = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I),
      down: this.input.keyboard.addKey(188),
      left: this.input.keyboard.addKey(74),
      right: this.input.keyboard.addKey(76),
      defense: this.input.keyboard.addKey(190), // PERIOD
      jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
      attack: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
    }

    // BACKGROUND
    this.cameras.main.setBackgroundColor(0xD3D3D3)
    // this.bg1 = this.add.tileSprite(400, 300, 800, 600, 'bg1')
    // player.rotation = 0.52
    // https://phaser.io/examples/v2/arcade-physics/platformer-basics
    // cursors1 = this.input.keyboard.createCombo('KKK', { resetOnMatch: true })
    // this.input.keyboard.on('keycombomatch', function (event) {
    //   console.log('Key Combo matched!', event);
    // })
    // this.physics.world.bounds.width = 800
    // this.physics.world.bounds.height = 600


    // PLAYER
    // player = this.add.container(200, 400)
    // playerSprites = this.add.sprite(200, 400, 'character1')
    
    
    
    player = this.physics.add.sprite(200, 400, 'character1')
    player.setCollideWorldBounds(true)

    // label name
    playerLabel = this.add.text(200, 400, 'Bandit', { font: '12px Arial' })
    playerLabel.stroke = "#de77ae"
    playerLabel.setOrigin(0.5, -3.0)
    this.physics.arcade.enable([ playerLabel ])
    playerLabel.body.velocity.setTo(200, 200)

    // player.add([playerSprites, playerLabel])

    // console.log('player', player)


    // animation set
    stand = this.anims.create({
      key: 'stand',
      frames: this.anims.generateFrameNumbers('character1', { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1,
      yoyo: true,
    })

    // walk = this.anims.create({
    //   key: 'walk',
    //   frames: this.anims.generateFrameNumbers('user', { start: 4, end: 7 }),
    //   frameRate: 4,
    //   repeat: -1,
    //   yoyo: true,
    // })

    // run = this.anims.create({
    //   key: 'run',
    //   frames: this.anims.generateFrameNumbers('user', { start: 20, end: 22 }),
    //   frameRate: 8,
    //   repeat: -1,
    //   yoyo: true,
    // })

    // attack = this.anims.create({
    //   key: 'attack',
    //   frames: this.anims.generateFrameNumbers('user', { start: 10, end: 13 }),
    //   frameRate: 4,
    //   repeat: -1,
    // })

    // player.add(playerName)
    player.anims.play(stand, true)

    // this.tweens.add({
    //   targets: container,
    //   angle: 360,
    //   duration: 6000,
    //   yoyo: true,
    //   repeat: -1
    // })
  },

  update: function () {
    if (this.key.right.isDown) {
      player.setVelocityX(140)
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
  },
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    // arcade: {
    //   gravity: { y: 300 },
    //   debug: false
    // }
  },
  // backgroundColor: '#2d2d2d',
  scene: [
    gmaeStart
  ]
}

new Phaser.Game(config)
