export const fadeIn = node => {
  let imgs = Array.from(node.children)

  imgs.forEach(img => {
    img.style.opacity = 0
    setTimeout(() => {
      let opacity = 0
      let animate = () => {
        opacity += 0.05
        img.style.opacity = opacity
        if (img.style.opacity <= 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, img.dataset.delay * 1000)

  })
  setTimeout(() => {
    node.classList.add('wrap--loaded')
  }, imgs.length * 1000 + 1000)
}



export const handleClick = node => {
  node.addEventListener('click', () => {
    let opacity = 1
    let animate = () => {
      opacity -= 0.05
      node.style.opacity = opacity
      if (node.style.opacity >= .5) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  })
}