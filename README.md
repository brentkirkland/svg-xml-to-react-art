# svg-xml-to-react-art
Convert SVG XML code to React Art javascript code.

## How To Convert
1. Save Illustrator file as an SVG.
2. Within the SVG options, click SVG Code.
3. Copy and paste SVG XML code into app.
4. Get nice React Art javascript!

Here's some sample code:

```XML
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 19.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 70 42" style="enable-background:new 0 0 70 42;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#231F20;}
</style>
<path class="st0" d="M12.1,9.7c-0.2-3.2,4.8-3.2,5,0c0.5,8.3-0.3,16.6-0.9,24.9c-1.6-0.2-3.3-0.4-4.9-0.7c0.8-4.1,2.8-15.5,8.6-15.6
	c2.4,0,3.4,2.1,4,4.2c0.2,0.8,0.5,3.7,0.9,3.9c1.1,0.4,3.5-5.5,3.7-6.3c0.8-2.5,5.3-2.3,4.9,0.7c-0.2,1.5-0.4,3-0.4,4.6
	c0,0.9,0,1.8,0,2.7c0.9-0.7,1.9-1.5,2.8-2.2c0.5-3.2,5.3-1.8,4.8,1.3c-0.7,4.1-4.4,7.3-8.7,6.1c-5.4-1.5-4.1-8.4-3.6-12.5
	c1.6,0.2,3.3,0.4,4.9,0.7c-1.2,3.7-5.6,13-10.9,10.1c-2.2-1.2-3.7-5.3-3.4-7.7c0.5-0.2,1-0.4,1.4-0.6c-0.5,0.7-0.9,1.4-1.4,2.1
	c-0.7,1.2-1.2,2.5-1.6,3.7c-0.7,2-1.1,4.1-1.5,6.2c-0.5,2.8-5.1,2.1-4.9-0.7C11.8,26.3,12.6,18,12.1,9.7L12.1,9.7z M31.8,17.2
	c3.2,0,3.2-5,0-5C28.5,12.2,28.5,17.2,31.8,17.2L31.8,17.2z"/>
</svg>
```
(Paste that into the app)

## Installation
run the following after cloning the repo:

```bash
 npm install
 webpack-dev-server
 ```
then open localhost:8080 in your favorite browser.

## TODO
 * Text transformation
 * Animations
 * In app editor
 * Better CSS
