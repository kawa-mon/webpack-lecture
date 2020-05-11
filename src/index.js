import _ from 'lodash'
import './style.scss'

import * as utilities from './utilities'
console.log('Square Result: ', utilities.Square(3))

const component = () => {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
document.body.classList.add('bg-color')
