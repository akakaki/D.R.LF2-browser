export default (vm) => {
  vm.key = {
    up: vm.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I),
    down: vm.input.keyboard.addKey(188),
    left: vm.input.keyboard.addKey(74),
    right: vm.input.keyboard.addKey(76),
    defense: vm.input.keyboard.addKey(190),
    jump: vm.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
    attack: vm.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
  } 
  // 動作，需開始紀錄的動作。
  vm.action = ['atk', 'def', 'jup']
  return vm
}