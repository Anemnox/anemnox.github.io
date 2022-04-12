uniform sampler2D globeTexture;
uniform sampler2D nightTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal;


uniform float uTime;

void main() {
  float daylight = (cos(uTime / 2.0) + 1.01) / 2.0;
  float nightlight = 1.0 - daylight;

  float intensity = 1.03 -
      dot(vertexNormal, vec3(0.0, 0.0, 1.0 ));
  vec3 atmosphere =
      vec3(0.3, 0.6, 1.0) *
      pow(intensity, 1.5);

  gl_FragColor =
    vec4(atmosphere, 0) +
    vec4((daylight * texture2D(globeTexture, vertexUV).xyz), daylight) +
    vec4((nightlight * texture2D(nightTexture, vertexUV).xyz), nightlight);
}
