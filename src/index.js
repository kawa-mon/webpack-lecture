import _ from 'lodash'

import { Square } from './utilities'
console.log('Square Result: ', Square(3))

const component = () => {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
