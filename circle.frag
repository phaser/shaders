// Author: Cristian Bidea 
// Title: Basic shader exploring plotting of functions
// tested on http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Draw a circle, if we want it to be filled we just don't substract
// the smoothsteps

// the mix function draws black when the function gives 0.0 and white
// when it goes towards 1.0. In this way we don't have ifs
void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    st.x -= 0.5;
    st.y -= 0.5;
	float dist = length(st);
    float radius = 0.5;
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 black = vec3(0.0, 0.0, 0.0);    
    gl_FragColor = vec4(mix(black, white, smoothstep(radius - 0.004, radius, dist) - smoothstep(radius, radius + 0.004, dist)), 1.0);
}

