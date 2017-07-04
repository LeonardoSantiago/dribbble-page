'use strict'


describe('testCtrl', function () {

 it('clicar no select e mudar seu tamanho', function () {
   browser.get('http://localhost:8080/')

  element.all(by.tagName('option')).get(1).click()

  expect(element.all(by.css('.shot-item.small')).isPresent()).toBe(true)

  element.all(by.tagName('option')).get(2).click()

  expect(element.all(by.css('.shot-item.medium')).isPresent()).toBe(true)

  element.all(by.tagName('option')).get(3).click()

  expect(element.all(by.css('.shot-item.large')).isPresent()).toBe(true)
 })

 it('clicar em um shot e ir pra outra pagina', function (){
   browser.get('http://localhost:8080/')

   element.all(by.css('.shot-item')).get(0).click();

   expect(element.all(by.css('.glyphicon')).isPresent()).toBe(true)

 })
})
