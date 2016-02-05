var Solid = require('solid.js')
console.log('solid.js version: ' + Solid.meta.version())

var Food = Food || {}
Food = (function () {
  
  function login(displayEle) {
    Solid.auth.login().then(function(webid){
      displayEle.innerHTML = '<p>Signed in as ' + webid + '</p>'
    }).catch(function(err) {
      console.log(err)
    });
  }
  
  function save(){
    
  }
  
  function get(){
    
  }
  
  function init(){
    
    var authEle = document.getElementById('auth')
    authEle.querySelector('button').addEventListener('click', function(e){
      e.preventDefault()
      login(authEle)
      // TODO: Update values if found already saved ones
    })
    
    document.getElementById('options').style.display = 'none'
    
    var allCheck = document.getElementById('all')
    allCheck.addEventListener('change', function(){
      if(this.checked){
        document.getElementById('options').style.display = 'none'
      }else{
        document.getElementById('options').style.display = 'block'
      }
    }, false)
    
    var addOther = document.getElementById('add-other')
    var other = document.getElementById('diet-other')
    addOther.addEventListener('click', function(e){
      e.preventDefault()
      var noOthers = document.getElementById('others').querySelectorAll('input[type="text"]').length
      var newOther = other.cloneNode(true)
      newOther.id = newOther.id + '-' + noOthers
      newOther.querySelector('input[type="text"]').id = newOther.querySelector('input[type="text"]').id + '-' + noOthers
      newOther.querySelector('input[type="checkbox"]').value = newOther.querySelector('input[type="checkbox"]').value + '-' + noOthers
      document.getElementById('others').appendChild(newOther)
    }, false)
  }
  
  init()

}(this))