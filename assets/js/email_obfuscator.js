const obfuscated_email = [128, 118, 114, 112, 135, 120, 124, 59, 129, 124, 122, 110, 128, 135, 77, 116, 122, 110, 118, 121, 59, 112, 124, 122]
const deobfuscated_email = obfuscated_email.map(charCode => charCode - 13)

document.getElementById('footer-email').setAttribute('href', `mailto:${String.fromCharCode(...deobfuscated_email)}`)
