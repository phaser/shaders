// Author: Cristian Bidea 
// Title: Drawing circles
// tested on http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void circle(inout vec3 currentColor, in vec2 st, in vec2 center, in float radius, in vec3 color)
{
	float pct = 0.0;
    float dst = distance(st, center); 
    pct = smoothstep(dst - 0.004, dst,  radius);
    currentColor = mix(currentColor, color, pct);
}

//void circle(inout vec3 currentColor, in vec2 st, in vec2 center, in float radius, in vec3 color)
//{
//    vec2 dist = st - center;
//    float pct = 1. - smoothstep(radius - (radius * 0.02), radius + (radius * 0.02), dot(dist, dist) * 2.0);
//    currentColor = mix(currentColor, color, pct);
//}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
	vec3 color = vec3(0.0);
    circle(color, st, vec2(0.1, 0.2), 0.1, vec3(0.502,1.000,0.118));
    circle(color, st, vec2(0.6, 0.3), 0.03, vec3(1.000,0.256,0.208));
    circle(color, st, vec2(0.5), 0.03, vec3(0.377,0.806,1.000));
    gl_FragColor = vec4(color, 1.0);
}

