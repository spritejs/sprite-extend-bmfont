# sprite-extend-bmFont

SpriteJS [bmGlyph](https://www.bmglyph.com/) BitmapFont extend.

## How to use

Use [bmGlyph](https://www.bmglyph.com/) to publish BitMap font.

![bmGlyph](https://p1.ssl.qhimg.com/t01250012696697463d.png)

Choose publish format cocos2d/BMFont.

Use `tools/generate.js` to generate bmfont file for SpriteJS

```bash
node tools/generate.js fonts/testsprite.fnt
```

```html
  <script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
  <script src="https://s5.ssl.qhres.com/!408aeef9/sprite-extend-bmfont.js"></script>
  <script src="/js/sprite.fnt.js"></script>
  <script>
    const context = document.getElementById('container').getContext('2d')
    const {Layer, BMFont, Label} = spritejs

    const layer = new Layer({context})
    const s = new BMFont()
    s.attr({
      anchor: 0.5,
      fontFace: 'Arial',
      text: 'SpriteJS\nabVu',
      pos: [300, 200],
      border: {
        width: 4,
        color: 'red',
      },
      // lineHeight: 30,
      // letterSpacing: 20,
      textAlign: 'center',
    })
    layer.append(s)
  </script>
```

### Arguments of generate.js

** build for weixin **

```bash
node generate.js fonts/testsprite.fnt --weixin
```

Copy testsprite.png to `/assets/img/testsprite.png`

** build with online texture **

```bash
node generate.js fonts/testsprite.fnt --src=https://p4.ssl.qhimg.com/t016ec624e084e49c16.png
```

** build with preload resource id **

```bash
node generate.js fonts/testsprite.fnt --id=testsprite.png
```
