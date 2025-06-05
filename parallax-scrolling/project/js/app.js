document.addEventListener('scroll', (event) => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})