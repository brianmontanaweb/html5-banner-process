# HTML5 Banner

## Webpack build process

This is a basic build process for webpack for handling multiple/single banner directory based on static setup and the initial guidelines. Storing dist in the repo but not required as this build process progresses, useful for giving a direct link to someone that might be tech savvy.

## Guidelines

Any assets should be in the root for banners, stick with GSAP for animation for cross browser support. Make sure you optimize images as aggressively as possible. File sizes run about 150k total but verify with vendor.

## Optimizations

Depending on how close you are to the file size limit you might want to try tinypng or a better image compression tool. Limiting the design direction to minimal imagery that isn't heavily textured will greatly reduce the file size after compression.
 
## File structure

```
banner-directory/
  src/
    scripts.js
    banner_widthxheight.html
    images/  
      banner_widthxheight.jpg
      **assets**.jpg
      **assets**.png
```

## Windows vs Unix

When setting up for Windows or Unix, make sure to define Windows CLI variables with `%npm_package_config_directory%` and Unix with `$npm_package_config_directory` need to determine something that is better for managing cross platform.