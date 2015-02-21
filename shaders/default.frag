precision mediump float;
uniform sampler2D texture;
varying vec2 texCoord;

void main(void) {
  gl_FragColor = texture2D(texture, vec2(1.0 - texCoord.s, 1.0 - texCoord.t));
}
