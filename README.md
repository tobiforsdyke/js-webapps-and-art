# What is SVG?
- Stands for Scaleable Vector Graphics

# Embedding SVG Example
1) Embed directly inside <svg> tage
- E.G.:
~~~~
<svg>
    <rect width="500" height="250" fill="forestgreen" />
</svg>
~~~~
- Advantage: can be accessed via the DOM and modified using CSS and JS

2) Using the <img> tag
- E.G.:
~~~~
<img src="logo.svg" alt="logo">
~~~~
- Advantages: easy and can be cached for performance
- Disadvantage: cannot be manipulated via CSS or JS

3) SVG as background image
- E.G.:
~~~~
.main {
    background: url(svgbackground.svg);
}
~~~~
- Advantages: can be cached and resolution independent
- Disadvantage: same as img tags, cannot be manipulated with CSS or JS

# Creating SVGs