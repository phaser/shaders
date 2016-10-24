// Author: Cristian Bidea 
// Title: Drawing Mondrian like picture
// tested on http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void rectangle(in vec4 r, in vec2 st, inout vec3 currentColor, in vec3 color)
{
    vec4 v = step(r, vec4(st, vec2(1.0) - st));
    float pct = v.x * v.y * v.z * v.w;
    currentColor = mix (currentColor, color, pct);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec3 mblack = vec3(0.095,0.095,0.095);
    vec3 color = vec3(0.98, 0.95, 0.88);
    rectangle(vec4(0, 0.68, 0.78, 0.0), st, color, vec3(0.66, 0.13, 0.14));
    rectangle(vec4(0.95, 0.68, 0.0, 0.0), st, color, vec3(0.98, 0.75, 0.20));
    rectangle(vec4(0.7, 0.0, 0.0, 0.89), st, color, vec3(0.0, 0.36, 0.60));
    rectangle(vec4(0.0, 0.835, 0.0, 0.13), st, color, mblack);
    rectangle(vec4(0.0, 0.65, 0.0, 0.315), st, color, mblack);
    rectangle(vec4(0.2, 0.0, 0.77, 0.0), st, color, mblack);
    rectangle(vec4(0.05, 0.65, 0.92, 0.0), st, color, mblack);
    rectangle(vec4(0.2, 0.1, 0.0, 0.87), st, color, mblack);
    rectangle(vec4(0.7, 0.0, 0.27, 0.0), st, color, mblack);
    rectangle(vec4(0.92, 0.0, 0.05, 0.0), st, color, mblack);
    gl_FragColor = vec4(color, 1.0);
}

