console.log('sanitycheck')
const inpElement = document.getElementById('inp')
const btnElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')

btnElement.addEventListener('click', function(evt){
  if(inpElement !== ""){
  const newLi = document.createElement('li')
  newLi.textContent = inpElement.value
  document.getElementById('todo-list').appendChild(newLi)
  }
  inpElement.value = " "
})
