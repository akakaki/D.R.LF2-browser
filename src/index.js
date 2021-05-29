import { PIXEL_RATIO } from './scripts/command.js'
import gmaeTest from './scene'

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  physics: {
    default: 'arcade',
    // arcade: {
    //   gravity: { y: 300 },
    //   debug: false
    // }
  },
  resolution: PIXEL_RATIO,
  // canvasStyle: 'width:100%;height:100%',
  scene: [
    gmaeTest,
  ]
}

new Phaser.Game(config)
