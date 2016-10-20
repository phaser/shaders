// Author: Cristian Bidea 
// Title: Basic shader exploring plotting of functions
// tested on http://editor.thebookofshaders.com/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// smoothstep Interpolates smoothly from 0 to 1 based on x compared to a and b.
//
// 1) Returns 0 if x < a < b or x > a > b
// 2) Returns 1 if x < b < a or x > b > a
// 3) Returns a value in the range [0,1] for the domain [a,b].
// The slope of smoothstep(a,b,a) and smoothstep(a,b,b) is zero.

// For vectors, the returned vector contains the smooth interpolation of each element of the vector x.
    
float plot(vec2 st, float pct)
{
	return smoothstep( pct - 0.04, pct, st.y)
         - smoothstep( pct, pct + 0.04, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
	
    float y = sin((st.x + u_time / 2.0) * 20.0) + cos((st.x + u_time) * 13.5);
    y += 2.0;
    y /= 4.0;
    
    vec3 color = vec3(0.0);
 	float pct = plot(st, y);   
    color = (1.0 - pct) * color + pct * vec3(1.000,0.860,0.602);
    gl_FragColor = vec4(color,1.0);
}
