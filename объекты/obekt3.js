 const order = [{
}];

  function isEmptyObj(object) {
  
    for (let key in object) {
  
      if (object.hasOwnProperty(key)) {
        console.log('если не правильно отпусти домой, хочу спать, а если правильно всё равно отпусти')
        return false;
  
      }
  
    }
  
    console.log('всё ок')
  
  }
  
  console.log(isEmptyObj(order))