// Author: Cristian Bidea 
// Title: Modulating shapes based on the angle
// tested on http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec2 pos = vec2(0.5) - st;
    float r = length(pos) * 2.0;
    float a = atan(pos.y, pos.x);
    
    //float f = abs(cos(a * 3.0 + u_time) * sin(a * 2.0 + u_time));
    float f = smoothstep(-0.5, 1.0, cos(a * 10.0 + u_time)) * 0.1 + 0.5;
    vec3 color = vec3(0.664,0.955,0.410) * (1.0 - smoothstep(f, f + 0.01, r));
    gl_FragColor = vec4(color, 1.0);
}

