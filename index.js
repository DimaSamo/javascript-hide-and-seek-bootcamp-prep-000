
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var nestedList = document.querySelectorAll(nested)
  return nestedList.querySelectorAll(target)
}
