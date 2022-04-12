uniform sampler2D cloudTexture;
uniform float uTime;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
  float daylight = ((0.5 * cos(uTime / 2.0)) + 1.01) / 2.0;

  float intensity = 1.03 -
      dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));
  vec3 atmosphere =
      vec3(0.3, 0.6, 1.0) *
      pow(intensity, 1.5);

  gl_FragColor =
      vec4((daylight * texture2D(cloudTexture, vertexUV).xyz),
          daylight);
}
