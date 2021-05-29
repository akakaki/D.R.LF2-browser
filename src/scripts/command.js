// https://github.com/photonstorm/phaser/issues/3198
export const PIXEL_RATIO = (() => {
  const ctx = document.createElement("canvas").getContext("2d")
  const dpr = window.devicePixelRatio || 1

  // The backing store size in relation to the canvas element
  const bsr = ctx.webkitBackingStorePixelRatio ||
  ctx.mozBackingStorePixelRatio ||
  ctx.msBackingStorePixelRatio ||
  ctx.oBackingStorePixelRatio ||
  ctx.backingStorePixelRatio || 1

  return dpr / bsr
})

export const debounce = (fn, delay) => {
  let timer
  return function () {
    const context = this
    const args = arguments

    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}