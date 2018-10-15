
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  var nestedList = querySelectorAll(nested)
  return nestedList.querySelectorAll(target)
}
