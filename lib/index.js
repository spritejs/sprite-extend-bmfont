'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _get4 = require('babel-runtime/helpers/get');

var _get5 = _interopRequireDefault(_get4);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _desc, _value, _class, _class2, _temp;

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

var attr = _spriteCore.utils.attr;


function calculateTextures(bmFont) {
  var text = bmFont.attr('text'),
      font = bmFont.attr('fontFace');

  if (!text || !font) {
    bmFont.textures = [];
    bmFont.images = null;
    return;
  }

  var lines = text.split('\n'),
      chars = font.chars,
      kernings = font.kernings,
      pages = font.pages;


  var lineHeight = font.lineHeight;

  var lh = bmFont.attr('lineHeight');
  if (lh != null) {
    lineHeight = lh;
  }

  var y0 = (lineHeight - font.lineHeight) / 2;
  var h = y0,
      maxW = 0;
  var linesW = [];

  var textures = [];

  var letterSpacing = bmFont.attr('letterSpacing');

  lines.forEach(function (line) {
    var prev = '',
        w = 0;

    for (var i = 0; i < line.length; i++) {
      var code = line.charCodeAt(i);
      var char = chars[code],
          kerning = kernings[prev + ',' + code] || 0;

      var rect = [w + char.xoffset, h + char.yoffset, char.width, char.height],
          srcRect = [char.x, char.y, char.width, char.height];

      var page = pages[char.page];

      if (page.src) {
        // for weixin
        textures.push({ src: page.src, rect: rect, srcRect: srcRect });
      } else if (page.id) {
        textures.push({ id: page.id, rect: rect, srcRect: srcRect });
      } else {
        var img = page.img;
        if (!img || !img.src) {
          var src = 'data:image/png;base64,' + page.dataURI;
          img = new Image();
          img.src = src;
          page.img = img;
        }
        textures.push({ image: img, rect: rect, srcRect: srcRect });
      }

      w += char.xadvance + kerning;
      if (i < line.length - 1) {
        w += letterSpacing;
      }
      prev = code;
    }
    linesW.push(w);
    maxW = Math.max(w, maxW);
    h += lineHeight;
  });

  var textAlign = bmFont.attr('textAlign');
  if (textAlign !== 'left') {
    var offset = 0;
    linesW.forEach(function (w, i) {
      var line = lines[i];
      var offsetX = maxW - w;

      if (textAlign === 'center') offsetX /= 2;

      for (var _i = 0; _i < line.length; _i++) {
        var texture = textures[offset + _i];
        texture.rect[0] += offsetX;
      }
      offset += line.length;
    });
  }

  bmFont.textures = textures;
  bmFont.textHeight = h - y0;
}

var BMFontAttr = (_class = function (_Sprite$Attr) {
  (0, _inherits3.default)(BMFontAttr, _Sprite$Attr);

  function BMFontAttr(subject) {
    (0, _classCallCheck3.default)(this, BMFontAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BMFontAttr.__proto__ || (0, _getPrototypeOf2.default)(BMFontAttr)).call(this, subject));

    _this.setDefault({
      letterSpacing: 0,
      textAlign: 'left'
    });
    return _this;
  }

  (0, _createClass3.default)(BMFontAttr, [{
    key: 'fontFace',
    set: function set(name) {
      this.clearCache();
      var fontFace = BMFont.fonts[name]; // eslint-disable-line no-use-before-define
      this.set('fontFace', fontFace);
      calculateTextures(this.subject);
    }
  }, {
    key: 'text',
    set: function set(value) {
      this.clearCache();
      this.set('text', value);
      calculateTextures(this.subject);
    }
  }, {
    key: 'lineHeight',
    set: function set(value) {
      this.clearCache();
      this.set('lineHeight', value);
      calculateTextures(this.subject);
    }
  }, {
    key: 'letterSpacing',
    set: function set(value) {
      this.clearCache();
      this.set('letterSpacing', value);
      calculateTextures(this.subject);
    }
  }, {
    key: 'textAlign',
    set: function set(value) {
      this.clearCache();
      this.set('textAlign', value);
      calculateTextures(this.subject);
    }
  }]);
  return BMFontAttr;
}(_spriteCore.Sprite.Attr), (_applyDecoratedDescriptor(_class.prototype, 'fontFace', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fontFace'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'text', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'letterSpacing', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'letterSpacing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textAlign'), _class.prototype)), _class);
var BMFont = (_temp = _class2 = function (_Sprite) {
  (0, _inherits3.default)(BMFont, _Sprite);

  function BMFont() {
    (0, _classCallCheck3.default)(this, BMFont);
    return (0, _possibleConstructorReturn3.default)(this, (BMFont.__proto__ || (0, _getPrototypeOf2.default)(BMFont)).apply(this, arguments));
  }

  (0, _createClass3.default)(BMFont, [{
    key: 'contentSize',
    get: function get() {
      var _get2 = (0, _get5.default)(BMFont.prototype.__proto__ || (0, _getPrototypeOf2.default)(BMFont.prototype), 'contentSize', this),
          _get3 = (0, _slicedToArray3.default)(_get2, 2),
          w = _get3[0],
          h = _get3[1];

      var height = this.attr('height');
      if (height === '') {
        return [w, this.textHeight];
      }
      return [w, h];
    }
  }]);
  return BMFont;
}(_spriteCore.Sprite), _class2.Attr = BMFontAttr, _temp);


BMFont.fonts = {};

module.exports = BMFont;