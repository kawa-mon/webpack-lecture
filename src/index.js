import _ from 'lodash'
import '@scss/style'

import * as utilities from 'js/utilities'
console.log('Square Result: ', utilities.Square(3))

const component = () => {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
document.body.classList.add('bg-color')

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})

promise
  .then(() => console.log('処理が完了しました'))
  .then(() => console.log('ここも実行される'))
  .catch(() => console.log('問題発生'))
