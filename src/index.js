import {Sprite, utils} from 'sprite-core'
const {attr} = utils

function calculateTextures(bmFont) {
  const text = bmFont.attr('text'),
    font = bmFont.attr('fontFace')

  if(!text || !font) {
    bmFont.textures = []
    bmFont.images = null
    return
  }

  const lines = text.split('\n'),
    {chars, kernings, pages} = font

  let lineHeight = font.lineHeight

  const lh = bmFont.attr('lineHeight')
  if(lh != null) {
    lineHeight = lh
  }

  const y0 = (lineHeight - font.lineHeight) / 2
  let h = y0,
    maxW = 0
  const linesW = []

  const textures = []

  const letterSpacing = bmFont.attr('letterSpacing')

  lines.forEach((line) => {
    let prev = '',
      w = 0

    for(let i = 0; i < line.length; i++) {
      const code = line.charCodeAt(i)
      const char = chars[code],
        kerning = kernings[`${prev},${code}`] || 0

      const rect = [w + char.xoffset, h + char.yoffset, char.width, char.height],
        srcRect = [char.x, char.y, char.width, char.height]

      const page = pages[char.page]

      if(page.src) { // for weixin
        textures.push({src: page.src, rect, srcRect})
      } else if(page.id) {
        textures.push({id: page.id, rect, srcRect})
      } else {
        let img = page.img
        if(!img || !img.src) {
          const src = `data:image/png;base64,${page.dataURI}`
          img = new Image()
          img.src = src
          page.img = img
        }
        textures.push({image: img, rect, srcRect})
      }

      w += char.xadvance + kerning
      if(i < line.length - 1) {
        w += letterSpacing
      }
      prev = code
    }
    linesW.push(w)
    maxW = Math.max(w, maxW)
    h += lineHeight
  })

  const textAlign = bmFont.attr('textAlign')
  if(textAlign !== 'left') {
    let offset = 0
    linesW.forEach((w, i) => {
      const line = lines[i]
      let offsetX = maxW - w

      if(textAlign === 'center') offsetX /= 2

      for(let i = 0; i < line.length; i++) {
        const texture = textures[offset + i]
        texture.rect[0] += offsetX
      }
      offset += line.length
    })
  }

  bmFont.textures = textures
  bmFont.textHeight = h - y0
}

class BMFontAttr extends Sprite.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      letterSpacing: 0,
      textAlign: 'left',
    })
  }
  @attr
  set fontFace(name) {
    this.clearCache()
    const fontFace = BMFont.fonts[name] // eslint-disable-line no-use-before-define
    this.set('fontFace', fontFace)
    calculateTextures(this.subject)
  }
  @attr
  set text(value) {
    this.clearCache()
    this.set('text', value)
    calculateTextures(this.subject)
  }
  @attr
  set lineHeight(value) {
    this.clearCache()
    this.set('lineHeight', value)
    calculateTextures(this.subject)
  }
  @attr
  set letterSpacing(value) {
    this.clearCache()
    this.set('letterSpacing', value)
    calculateTextures(this.subject)
  }
  @attr
  set textAlign(value) {
    this.clearCache()
    this.set('textAlign', value)
    calculateTextures(this.subject)
  }
}

class BMFont extends Sprite {
  static Attr = BMFontAttr
  constructor(attr) {
    if(typeof attr === 'string') {
      attr = {text: attr}
    }
    super(attr)
  }
  get contentSize() {
    const [w, h] = super.contentSize
    const height = this.attrSize[1]
    if(height === '') {
      return [w, this.textHeight]
    }
    return [w, h]
  }
}

BMFont.fonts = {}

module.exports = BMFont