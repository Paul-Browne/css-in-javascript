const crushObj = (obj = {}, store = {}, k = '') => Object.keys(obj).reduce((acc, cur) => {
    if (typeof obj[cur] === 'object') {
        acc[k + " " + cur] = {}
        crushObj(obj[cur], acc, (k + " " + cur))
    } else { 
        acc[k][cur] = obj[cur]
    }
    return acc
  }, store)

const css = content => Object.entries(content).map(([key, value]) => {
    if(typeof value == "object"){
        return `${key}{${css(value)}}`
    }else{
        return `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`
    }
}).join('')


export default obj => css(crushObj(obj))