const css = (selector, content) => {
    const attributes = Object.entries(content).map(([key, value]) => {
        if(typeof value == "object"){
            return css(key, value)
        }else{
            return `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`
        }
    }).join('')
    return `${selector}{${attributes}}`
}   

const flexCenter = {
    display: 'flex',
    alignItems: 'center',
    'justify-content': 'center'
}

const test = {
    ...flexCenter,
    color: 'red',
    fontSize: '30px',
    '.active': {
        color: 'green',
        fontSize: '40px',
        '.some-child': flexCenter
    }
}

const tester = css('.some-class', test);

console.log(tester)