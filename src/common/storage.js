export const saveValue = (key, objValue) => {
    const rest = getValue(key);
    const obj = JSON.stringify({ ...rest, ...objValue });
  
    localStorage.setItem(key, obj);
  };
  
  export const getValue = (key) => {
    const result = localStorage.getItem(key);
    const data = result ? JSON.parse(result) : null;
  
    return data;
  };
  
  export const wipeValue = () => localStorage.clear();