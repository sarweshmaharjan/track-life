/**
 * It returns object with key that is present in keys array.
 * @function - pick
 * @param {Object} obj
 * @param {Array} keys
 */
const pick = (obj, keys) => {
    const newObj = {};
    Object.keys(obj).map((key)=>{
        if (keys.includes(key)) {
            newObj[key] = obj[key];
          }
          return key;
    }); 
    return newObj;
  }

const helper={
   pick
}

export default helper; 