# HTML5 Banner 300x250

## npm build process

This is a basic build process for npm scripts for handling a single banner based on static setup and the initial guidelines.

## Guidelines for 300x250 with Doubleclick

Any assets should be in the `src`, stick with GSAP for animation for cross browser support. Make sure you optimize images with TinyPNG. File sizes run about 150k initial load and 2.2MB for non-user load, maximum of 30 second animations. Browser support for IE10+, Firefox 25+, Safari 6+ and Chrome 33+

## Optimizations

Depending on how close you are to the file size limit you might want to try TinyPNG or another image compression tool. Limiting the design direction to minimal imagery that isn't heavily textured will greatly reduce the file size after compression.
 
## File structure

```
  src/
    app.js
    index.html
    style.scss
    images/
      banner_widthxheight.jpg
      **assets**.jpg
    spritesheet/
      **assets**.png
```