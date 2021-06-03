const attachApp = (element) => {
    const root = element.attachShadow({mode: "open"})
    
    const style = document.createElement('link')
    style.rel= 'stylesheet'
    style.href = './app.css'
    root.append(style)
    
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = 'I should have a red background'
    div.append(p)
    root.append(div)
}

document.querySelectorAll('.app').forEach(attachApp)
