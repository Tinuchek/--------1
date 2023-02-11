let user = {
    age: 18,
    height:180,
  };
  
  function without(object, objectKey) {
      for (prop in object) {
          if (objectKey.find((el) => el === prop)) delete object[prop]
      }
      return object
  }
  
  console.log(without(user, ['age', 'height']));