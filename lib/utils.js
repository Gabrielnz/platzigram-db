'use strict'

const utils = {
  extractTags
}

function extractTags (text) {
  // el == en esta condicion sirve para validar que sea igual a nulo o igual a indefinido
  if (text == null) return []

  // devuelve un array con las coincidencias de palabras con hashtag, usando una expresion regular
  let matches = text.match(/#(\w+)/g)

  // si no hay ningun match
  if (matches === null) return []

  matches = matches.map(normalize)

  return matches
}

function normalize (text) {
  text = text.toLowerCase()
  text = text.replace(/#/g, '')
  return text
}

module.exports = utils
