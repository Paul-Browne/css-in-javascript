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

export default css