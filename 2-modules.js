const {gerson, josefino, maoze} = require('./2-modules-names')
const {person} = require('./3-alternative-flavor')
const sayHi = require('./2-modules-utils')

require('./4-mind-grenate')
sayHi(person.name)
sayHi(gerson)
sayHi(josefino)
sayHi(maoze)