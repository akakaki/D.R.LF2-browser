export default (vm) => {
  vm.messageLabel = vm.add.text(2, 2, '開發環境', { font: '12px Arial', backgroundColor: '#2b2a2a', padding: { x: 8, y: 2 } })
  vm.message = vm.add.container(0, 0, [vm.messageLabel])
  vm.physics.world.enable(vm.message)
  return vm
}