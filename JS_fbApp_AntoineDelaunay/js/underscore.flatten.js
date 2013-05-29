(function(){
  /**
   * Flatten all properties of an object that match the fSelector
   * @param  {Object} obj input object
   * @param  {Function} fSelector (optional) function selector
   * @param  {Mixed} defaultValue (optional) when the selector returns false a default
   * value can be specified
   * @return {Object} Flattened object
   */
  function FlattenObject(obj, fSelector, defaultValue){
    var out   = {};
    fSelector = fSelector || function alwaysTrue(){return true;};
    _.forEach(obj, function(val, key){
      _.extend(out, FlattenAttr(val, key, fSelector, defaultValue));
    });
    return out;
  }

  function FlattenAttr(val, key, fSelector, defaultValue){
    if(_.isPlainObject(val)){
      return PrependKeyName(FlattenObject(val, fSelector, defaultValue), key+'.');
    }

    var out = {};
    if(_.isArray(val)){
      val.forEach(function(arrValue, i){
        _.extend(out, PrependKeyName(FlattenAttr(arrValue, '['+i+']', fSelector, defaultValue), key));
      });
      return out;
    }

    if(!fSelector(val) && defaultValue === undefined){return;}
    if(!fSelector(val)){out[key] = defaultValue;return out;}

    out[key] = val;

    return out;
  }

  function PrependKeyName(obj, name){
    var o = {};
    _.forEach(obj, function(val, key){
      o[name+key] = val;
    });
    return o;
  }


  /**
   * Flatten all properties of an object that match the fSelector
   * @param  {Object} obj
   * @param  {Function} iterator
   * @return {Object} Flattened object
   * @FGRibreau Apr. 2013.
   */
  _.mixin({
    flattenObject : FlattenObject
  });
})();
