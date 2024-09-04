const css = content => Object.entries(content).map(([key, value]) => {
    if(typeof value == "object"){
        return `${key}{${css(value)}}`
    }else{
        return `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`
    }
}).join('')

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

const tester = css(test2);

console.log(tester)