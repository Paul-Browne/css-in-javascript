const css = content => Object.entries(content).map(([key, value]) => {
    if(typeof value == "object"){
        return `${key}{${css(value)}}`
    }else{
        return `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}:${value};`
    }
}).join('')

export default css