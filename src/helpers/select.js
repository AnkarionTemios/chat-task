export const select = (data, message) => 
  data.every(item => item !== message) ?
  data.concat(message)
  :
  data.filter(item => item !== message)