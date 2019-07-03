import React, {useCallback, useState} from "react";


export const inputHook = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback( e => {
    setter(e.target.value);
  },[])  
  return [value, handler];
}
