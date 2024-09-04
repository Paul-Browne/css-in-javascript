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


const processAll = (obj) => {
    const pred = crushObj(obj)
    return css(pred)
}

const flexCenter = {
    display: 'flex',
    alignItems: 'center',
    'justify-content': 'center'
}

const test2 = {
    ".some-class": {
        ...flexCenter,
        color: 'red',
        fontSize: '30px',
        '.active': {
            color: 'green',
            fontSize: '40px',
            '.some-child': flexCenter
        }
    },
    '.wqeqweq': {
        color: 'blue',
        fontSize: '20px'
    }
}


const pred = processAll(test2)

console.log(pred)