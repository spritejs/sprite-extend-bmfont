let fontFile = process.argv[2],
  type = process.argv[3] // --weixin

if(!fontFile) {
  console.error('no input file!')
  process.exit(0)
}

if(fontFile.startsWith('--')) {
  [fontFile, type] = [type, fontFile]
}

const fs = require('fs')

const content = fs.readFileSync(fontFile).toString('utf-8')

const commonPattern = /^common(.*)/img,
  charPattern = /^char\s(.*)/img,
  kerningPattern = /^kerning\s(.*)/img

// console.log(content.match(charPattern))

const output = {chars: {}, kernings: {}, pages: {}}

const chars = content.match(charPattern) || []

chars.forEach((char) => {
  const pattern = /id=(\d+)\s+x=(\d+)\s+y=(\d+)\s+width=(\d+)\s+height=(\d+)\s+xoffset=(\d+)\s+yoffset=(\d+)\s+xadvance=(\d+)\s+page=(\d+)/
  const matches = char.match(pattern)
  if(matches) {
    const [id, x, y, width, height, xoffset, yoffset, xadvance, page] = matches.slice(1).map(o => Number(o))
    output.chars[id] = {x, y, width, height, xoffset, yoffset, xadvance, page}
  }
})

const kernings = content.match(kerningPattern) || []

kernings.forEach((kerning) => {
  const pattern = /first=(\d+)\s+second=(\d+)\s+amount=([+-]?\d+)/
  const matches = kerning.match(pattern)
  if(matches) {
    const [first, second, amount] = matches.slice(1).map(o => Number(o))
    output.kernings[`${first},${second}`] = amount
  }
})

const common = content.match(commonPattern)[0]
if(common) {
  const pattern = /lineHeight=(\d+)\s+base=(\d+)\s+scaleW=(\d+)\s+scaleH=(\d+)/
  const matches = common.match(pattern)
  if(matches) {
    const [lineHeight, base, scaleW, scaleH] = matches.slice(1).map(o => Number(o))
    Object.assign(output, {lineHeight, base, scaleW, scaleH})
  }
}

const path = require('path'),
  fontPath = path.resolve(fontFile, '..')

const pagePattern = /^page(.*)/img

const pages = content.match(pagePattern) || []

pages.forEach((page) => {
  const pattern = /id=(\d+)\s+file="(.+?)"/
  const matches = page.match(pattern)
  if(matches) {
    const [id, file] = matches.slice(1)
    if(!type) {
      const textureFile = path.resolve(fontPath, file)
      const buff = fs.readFileSync(textureFile)
      const dataURI = buff.toString('base64')
      output.pages[id] = {file, dataURI}
    } else if(type === '--weixin') {
      const src = path.resolve('/assets/img', file)
      output.pages[id] = {file, src}
    } else if(type.startsWith('--src=')) {
      const src = type.replace('--src=', '')
      output.pages[id] = {file, src}
    } else if(type.startsWith('--id=')) {
      const id = type.replace('--id=', '')
      output.pages[id] = {file, id}
    }
  }
})
const face = content.match(/face="(.+?)"/)[1]

output.face = face

const outputJSON = `${fontFile}.json`,
  outputJS = `${fontFile}.js`

fs.writeFileSync(outputJSON, JSON.stringify(output))

fs.writeFileSync(outputJS, `spritejs.BMFont.fonts.${face} = ${JSON.stringify(output)}`)
