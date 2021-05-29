export default (vm) => {
  vm.characterData = {
    label: '海盜領主',
    walkSpeed: 280,
    status: null,
    data: {
      name: 'Bandit',
      walkingFrameRate: 3,
      walkingSpeed: 5,
      walkingSpeedZ: 3,
      runningFrameRate: 3,
      runningSpeed: 11,
      runningSpeedZ: 2,
      heavyWalkingSpeed: 3.5,
      heavyWalkingSpeedz: 1.8,
      heavyRunningSpeed: 6.5,
      heavyRunningSpeedz: 1,
      jumpHeight: -17,
      jumpDistance: 15,
      jumpDistanceZ: 3.5,
      dashHeight: -9.5,
      dashDistance: 21,
      dashDistancez: 3.75,
      rowingHeight: -4,
      rowingDistance: 7,
    },
  }

  vm.characterData.walkDistance = vm.characterData.walkSpeed * vm.characterData.data.walkingSpeed * 0.1

  // PLAYER
  vm.character = vm.add.sprite(0, 0, 'character1')
  vm.playerLabel = vm.add.text(.5, -3, vm.characterData.label, {font: '12px Arial', stroke: '#2b2a2a', strokeThickness: 2, padding: { x: 2, y: 2, }})
  vm.playerLabel.setOrigin(.5, -3)

  vm.player = vm.add.container(200, 400, [vm.character, vm.playerLabel])

  vm.physics.world.enable(vm.player)

  vm.player.body.setVelocity(0, 0).setCollideWorldBounds(true)


  return vm
}