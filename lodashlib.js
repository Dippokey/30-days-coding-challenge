const _ = {
  clamp (number,lower, upper){
   var lowerClampedValue = Math.max(number, lower);

   var clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;
  },
  inRange (number, start, end){
    if (end === NaN){
      end = start;
      start = 0;

    };
    if (start > end){
      let temp = start;
      start = end;
      end = start;
    };
    var isInRange = (start <= number && number < end) ? true : false;
    return isInRange;
  },
  words (string){
    return string.split(' ')
  },

  pad(string, length){
    var totalPad = length - string.length;
    var begPad = Math.floor(totalPad / 2);
    var endPad = totalPad - begPad;
    var space = ' ';
    return space.repeat(begPad) + string + space.repeat(endPad);
  },

  has (object, key){
    var hasValue;
    if (key in object){
      hasValue = true;
    }else{
      hasValue = false;
    }
    return hasValue;
  },

  invert (object){
    var invertedObject = {};
    for (let key in object){
      var originalValue = object.value;
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },

  findKey (object, predicate){
    for (key in object){
      if (predicate(object.key)){
        return key;

      };
    }
  },

  drop(array, n){
    if(n){
        return array.splice(n);
      }else{
        return array.splice(1);
      }
    },

 /* dropWhile(array, predicate){

    cf = (element, index) => {
      !predicate(element, index, array);
      return index;
    };
    var dropNumber = array.findIndex(cf);
    var droppedArray = this.drop(array, dropNumber);
    return droppedArray;

  },
*/

   dropWhile(arr, predicate){
      let dropNumber = arr.findIndex(function(el, index, arr) {
        return !(predicate(el, index, arr));
      })
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },

   chunk(array, size){
     if (size){
       var arrayChunks = [];
       for (let i = 0; i < array.length; i = i + size){
         var arrayChunk = array.slice(i, i + size);
         arrayChunks.push(arrayChunk);
       };
     }else{
       return 1;
     };
     return arrayChunks;

   }


}
