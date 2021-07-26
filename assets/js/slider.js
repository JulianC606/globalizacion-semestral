function App () {}

window.onload = function (event) {
  const app = new App()
  window.app = app
}

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget // Se le asigna a la constante btn una referencia del boton al cual se le hace click
  const slickList = btn.parentNode // Apartir de la posición del boton, se hace la referencia a la lista de productos (slider)
  const track = btn.parentNode.querySelector('#track') // A partir del boton, se busca el track que es un div donde los productos se deslizan
  const slick = track.querySelectorAll('.slick') // A partir del track, se seleccionan los productos (slicks)

  const slickWidth = slick[0].offsetWidth // Se hace la referencia del ancho de todos los slicks, cogiendo el primero y midiendolo.

  const trackWidth = track.offsetWidth // Se guarda el valor del ancho del track
  const listWidth = slickList.offsetWidth // Se guarda el valor del ancho de la lista (el slider)

  let leftPosition

  // Se le asigna al track una propiedad de estilo left para correr la lista hacia la izquierda.
  // Si el valor esta asignado a 0, lo deja en 0 ( no se puede correr más a la izquierda si es el primer producto)
  track.style.left === ''
    ? leftPosition = track.style.left = 0
    : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1)

  // Se asigna la acción a los botones.
  btn.dataset.button === 'button-prev'
    ? prevAction(leftPosition, slickWidth, track) // Si es el boton previo, ejecuta la accion prevAction
    : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track)// Si es el boton de siguiente, ejecuta la accion nextAction
}

const prevAction = (leftPosition, slickWidth, track) => {
  if (leftPosition > 0) { // Si el left es mayor de 0, le asignas el valor a left respectivo para que se mueva el slider.
    console.log('entro 2')
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`
  }
}

const nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
  if (leftPosition < (trackWidth - listWidth)) { // Si el left es menor del tamaño maximo, le asignas el valor a left respectivo para que se mueva el slider.
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`
  }
}
