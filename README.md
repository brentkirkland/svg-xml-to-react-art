# svg-xml-to-react-art
Convert SVG XML code to React Art javascript code. Built with React, React Art, and Flux.

## Installation
run the following after cloning the repo:

```bash
 npm install
 webpack-dev-server
 ```
then open localhost:8080 in your favorite browser.

## How To Convert
1. Save Illustrator file as an SVG.
2. Within the SVG options, click SVG Code.
3. Copy and paste SVG XML code into app.
4. Get nice React Art javascript!

Here's some sample code if you wanna test it out!:

```XML
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 19.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 600 300" style="enable-background:new 0 0 600 300;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#231F20;}
</style>
<g>
	<g>
		<g>
			<path class="st0" d="M280.5,75c17.2,52.6,27.5,107.3,30.3,162.6c0.4,8.2,12.4,10.4,14.7,2c4.5-16.5,9.1-33,13.7-49.5
				c2.3-8.1,4.5-16.3,6.9-24.4c1.4-5,3.3-15.3,8.6-17.6c-1.3,0.3-2.5,0.7-3.8,1c-1.9-1.3-2.2-1.1-0.9,0.7c0.5,1,0.9,1.9,1.4,2.9
				c0.8,1.9,1.5,3.8,2.1,5.8c1.2,3.6,2.2,7.3,3.1,11c1.9,8,3.3,16,5.4,24c3.4,13.3,9.6,32.8,24.6,37c7.5,2.1,16-0.4,20.1-7.3
				c4-6.7,5-15.6,6.2-23.2c3.1-18.9,3.6-38.1,1.2-57.1c-0.5-4-3.1-7.5-7.5-7.5c-3.9,0-7.7,3.4-7.5,7.5c0.9,16.2,4,32.2,9.6,47.4
				c5.5,15,13,30.7,23.7,42.7c4.9,5.5,11.9,10.1,19.6,9.2c7.7-0.9,12.5-6.7,15.1-13.6c5.9-15.6,6.2-34.7,4.2-51.1
				c-0.5-4-3.1-7.5-7.5-7.5c-3.7,0-8,3.5-7.5,7.5c1.6,13.6,1.2,27.4-1.9,40.7c-0.7,2.9-1.5,9.8-5.6,8.9c-5-1.1-9.1-8.8-11.5-12.6
				c-13.8-21.4-21.9-46.1-23.3-71.6c-5,0-10,0-15,0c2.6,20.5,2.1,41.3-2.2,61.6c-0.6,2.7-1,9.2-3.1,11.2c-2,1.8-4.9-0.3-6.4-1.8
				c-5.8-5.7-8.4-15.2-10.5-22.8c-4.5-16.6-5.7-35.2-14.7-50.2c-5-8.5-14.9-8.4-20.9-1c-6,7.4-8.4,17.3-10.9,26.3
				c-6.5,23.1-12.9,46.3-19.2,69.4c4.9,0.7,9.8,1.3,14.7,2C322.9,181,312.5,124.9,294.9,71C292,61.9,277.5,65.8,280.5,75L280.5,75z"
				/>
		</g>
	</g>
	<g>
		<g>
			<path class="st0" d="M389.8,83.3c0,6.4,0,12.9,0,19.3c0,9.7,15,9.7,15,0c0-6.4,0-12.9,0-19.3C404.8,73.7,389.8,73.7,389.8,83.3
				L389.8,83.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path class="st0" d="M485.6,76c3,33,5.1,66.2,6.3,99.3c0.3,9.6,15.3,9.7,15,0c-1.2-33.2-3.2-66.3-6.3-99.3
				C499.7,66.5,484.7,66.4,485.6,76L485.6,76z"/>
		</g>
	</g>
	<g>
		<g>
			<path class="st0" d="M495.8,198c0,6.9,0,13.8,0,20.7c0,9.7,15,9.7,15,0c0-6.9,0-13.8,0-20.7C510.8,188.3,495.8,188.3,495.8,198
				L495.8,198z"/>
		</g>
	</g>
</g>
<g>
	<g>
		<g>
			<path class="st0" d="M102.6,83.4c2.3,9.4,3.3,19,3.3,28.7c0,3.2,5,3.2,5,0c0.1-10.1-1.1-20.1-3.4-30
				C106.7,78.9,101.9,80.2,102.6,83.4L102.6,83.4z"/>
			<path class="st0" d="M120.5,88.3c-3.4,4.3-4.6,9.8-2.5,15c1.8,4.5,6.6,9.1,11.7,6.9c5.2-2.2,6-9.1,5.3-14
				c-0.3-2.4-0.9-5.9-3.2-7.4c-2.4-1.6-6-0.9-8.6-0.4c-3.1,0.7-1.8,5.5,1.3,4.8c2.4-0.5,4-0.8,5.2,1.7c0.6,1.3,0.5,3,0.5,4.4
				c0,2.2-0.8,7.5-4.4,6.1c-5.1-2-4.5-10.2-1.8-13.7C126,89.4,122.5,85.8,120.5,88.3L120.5,88.3z"/>
			<path class="st0" d="M135.5,86.8c-3.6,3.7-6.2,9.7-4.2,14.8c1.8,4.4,8.6,7.4,13,5.2c10.2-5,5.5-22.3-5.9-21.3
				c-3.2,0.3-3.2,5.3,0,5c2.8-0.2,5.3,1.1,6.2,3.9c0.8,2.4,0.1,6.2-2.2,7.6c-2.6,1.6-6.5-1-6.7-3.8c-0.2-3,1.3-5.8,3.4-7.9
				C141.3,88,137.7,84.5,135.5,86.8L135.5,86.8z"/>
			<path class="st0" d="M154.1,97.3c-0.4-8.2-1.7-16.2-3.9-24c-0.9-3.1-5.7-1.8-4.8,1.3c2.1,7.4,3.4,15,3.8,22.7
				C149.3,100.5,154.3,100.6,154.1,97.3L154.1,97.3z"/>
			<path class="st0" d="M159.6,78.2c-3.2,2.7-6.2,5.6-9.1,8.7c-1.3,1.4-0.7,3.6,1.1,4.2c4,1.1,6.5,4.4,8.9,7.6
				c1.9,2.5,6.3,0,4.3-2.5c-3.2-4.3-6.6-8.3-11.9-9.9c0.4,1.4,0.7,2.8,1.1,4.2c2.9-3.1,5.9-5.9,9.1-8.7
				C165.5,79.7,162,76.1,159.6,78.2L159.6,78.2z"/>
			<path class="st0" d="M196.4,87.6c-0.7-0.7-0.2-4.8-0.4-5.9c-0.2-1.7-0.6-3.2-1.3-4.7c-1.1-2.5-3.2-5.1-6.1-5.5
				c-7-1.1-5,13.6-4.9,17.4c1.6-0.2,3.3-0.4,4.9-0.7c-1.3-3.8-5-19.3-11.7-16c-2.4,1.2-2.6,4.3-2.7,6.7c-0.3,5.2-0.2,10.5-0.3,15.8
				c1.6-0.2,3.3-0.4,4.9-0.7c-1.5-5.8-2.9-11.6-4.4-17.4c-0.8-3.1-5.6-1.8-4.8,1.3c1.5,5.8,2.9,11.6,4.4,17.4
				c0.7,2.8,4.8,2.1,4.9-0.7c0.1-5.2,0-10.5,0.3-15.8c0-0.5,0-1,0.1-1.5c0.2-1,0.2-1.2-0.1-0.3c-0.5,0.7-0.3,1.4,0.5,2
				c0.2,0.5,0.5,1,0.7,1.5c1.3,2.9,2.4,5.9,3.4,8.9c0.9,2.5,5,2.3,4.9-0.7c-0.1-2.5-0.1-5.1,0-7.6c0.1-2.8-0.1-6.5,1.6-1.4
				c1.3,3.6-0.3,8.3,2.4,11.3C195,93.6,198.6,90,196.4,87.6L196.4,87.6z"/>
			<path class="st0" d="M202.6,72.5c-6.4,0.8-9.1,10.1-5,14.9c1.8,2.1,5.1,2.9,7.4,1.3c3-2.1,3.4-7,3.2-10.3
				c-1.6,0.2-3.3,0.4-4.9,0.7c1.9,4.8,5.2,8.7,10,10.8c2.9,1.3,5.5-3,2.5-4.3c-3.5-1.6-6.3-4.2-7.7-7.8c-0.9-2.4-5.1-2.4-4.9,0.7
				c0,0.5,0,7.2-2.2,4.8c-0.9-1,0.1-5.5,1.6-5.6C205.8,77.2,205.8,72.2,202.6,72.5L202.6,72.5z"/>
			<path class="st0" d="M223.1,79c-1.6-5.8-3.1-11.5-4.7-17.3c-0.8-3.1-5.7-1.8-4.8,1.3c1.6,5.8,3.1,11.5,4.7,17.3
				C219.1,83.4,223.9,82.1,223.1,79L223.1,79z"/>
			<path class="st0" d="M222,88.8c3.2,0,3.2-5,0-5C218.8,83.8,218.8,88.8,222,88.8L222,88.8z"/>
			<path class="st0" d="M109.6,129.3c1.5,6.7,3.1,13.4,5,20c0.9,3.1,5.7,1.8,4.8-1.3c-1.9-6.6-3.6-13.3-5-20
				C113.7,124.9,108.9,126.2,109.6,129.3L109.6,129.3z"/>
			<path class="st0" d="M126,145.5c-5.4,0.9-10.7,1.8-16.1,2.7c-3.2,0.5-1.8,5.3,1.3,4.8c5.4-0.9,10.7-1.8,16.1-2.7
				C130.5,149.8,129.2,145,126,145.5L126,145.5z"/>
			<path class="st0" d="M118,124.5c-4.3,0.4-8.5,1.3-12.7,2.8c-3,1.1-1.7,5.9,1.3,4.8c3.7-1.3,7.4-2.3,11.3-2.6
				C121.2,129.1,121.2,124.1,118,124.5L118,124.5z"/>
			<path class="st0" d="M121.9,125.4c1.2,1.1,2.3,2.2,3.5,3.3c1,0.9,2.6,1,3.5,0c0.9-1,1-2.6,0-3.5c-1.2-1.1-2.3-2.2-3.5-3.3
				c-1-0.9-2.6-1-3.5,0C121,122.9,120.9,124.5,121.9,125.4L121.9,125.4z"/>
			<path class="st0" d="M153.6,140.4c-0.7-4.3-3.1-13.7-8.4-14.5c-1.9-0.3-3.6,0.9-4.2,2.7c-1.1,3.4-0.8,7.9-1.1,11.4
				c1.6-0.2,3.3-0.4,4.9-0.7c-0.9-4.2-2.4-8.1-4.5-11.8c-0.9-1.7-3.4-1.5-4.3,0c-1.3,2-1.6,4.2-1.5,6.6c0.1,3.4,0,6.6-0.6,10
				c1.6,0,3.2,0,4.8,0c-1.5-3.9-2.6-7.9-3.1-12.1c-0.4-3.2-5.4-3.2-5,0c0.5,4.6,1.6,9,3.3,13.4c0.8,2.1,4.3,2.7,4.8,0
				c0.5-2.6,0.8-5.2,0.9-7.8c0-2.5-0.6-5.3,0.8-7.5c-1.4,0-2.9,0-4.3,0c1.9,3.4,3.1,6.9,4,10.7c0.7,2.9,4.7,2,4.9-0.7
				c0.2-1.9,0.3-3.8,0.5-5.7c0.1-0.9,0.2-1.9,0.2-2.8c-0.6,0.3-0.6,0.6-0.1,0.9c1.8,2.9,2.8,5.9,3.3,9.2
				C149.3,144.9,154.1,143.5,153.6,140.4L153.6,140.4z"/>
			<path class="st0" d="M207,111.6c-3.7-0.5-6.5,1.4-7.9,4.8c-1.3,3.2-1.6,7.2,1.3,9.6c2.2,1.8,6.8,2.8,9.1,0.8
				c2.5-2.2,2.2-7,1.6-9.9c-1.6,0.4-3.2,0.9-4.8,1.3c1,2.7,2.3,5.3,4.1,7.6c1.9,2.5,6.3,0,4.3-2.5c-1.5-2-2.7-4.1-3.6-6.4
				c-1.1-3-5.4-1.9-4.8,1.3c0.3,1.4,0.1,2.7,0,4.1c-0.4,0.7-0.4,0.9,0,0.7c0.4-0.1,0.3-0.2-0.4-0.1c-0.5-0.2-1.1-0.1-1.6-0.3
				c-1.4-0.6-1.2-1.8-0.9-3.1c0.2-1,0.9-3.1,2.3-2.9C208.8,116.9,210.2,112.1,207,111.6L207,111.6z"/>
			<path class="st0" d="M217.8,110.1c-4,3.2-5.9,9.4-2.8,13.9c3.6,5.3,9.9,3.4,14.2,0.1c2.5-1.9,0-6.3-2.5-4.3
				c-2,1.5-5.9,4.4-7.8,1.1c-1.4-2.6,0.4-5.6,2.4-7.3C223.8,111.6,220.3,108.1,217.8,110.1L217.8,110.1z"/>
			<path class="st0" d="M237.1,118.7c-1.4-5.4-2.7-10.9-4.1-16.3c-0.8-3.1-5.6-1.8-4.8,1.3c1.4,5.4,2.7,10.9,4.1,16.3
				C233,123.1,237.9,121.8,237.1,118.7L237.1,118.7z"/>
			<path class="st0" d="M224.7,115.2c6.9-0.8,13.6-2.1,20.3-3.8c3.1-0.8,1.8-5.6-1.3-4.8c-6.3,1.6-12.6,2.8-19,3.6
				C221.5,110.6,221.5,115.6,224.7,115.2L224.7,115.2z"/>
			<path class="st0" d="M162.7,173.3c-5.2-6.7-10.4-13.3-15.6-20c-1.4-1.8-4.2-0.2-4.3,1.8c-0.3,6.9-0.6,13.7-0.7,20.6
				c0,3.2,5,3.2,5,0c0.1-6.9,0.3-13.7,0.7-20.6c-1.4,0.6-2.8,1.2-4.3,1.8c5.2,6.7,10.4,13.3,15.6,20
				C161.2,179.3,164.7,175.8,162.7,173.3L162.7,173.3z"/>
			<path class="st0" d="M146,172.8c4.4-1,8.9-2.1,13.3-3.1c3.1-0.7,1.8-5.5-1.3-4.8c-4.4,1-8.9,2.1-13.3,3.1
				C141.6,168.7,142.9,173.5,146,172.8L146,172.8z"/>
			<path class="st0" d="M159.1,159.8c1.9,4.3,3.5,8.7,4.7,13.3c0.6,2.3,4.3,2.5,4.8,0c0.7-3.4-0.8-10.1,2.5-12.4
				c2.6-1.8,0.1-6.1-2.5-4.3c-5.6,3.8-3.6,9.8-4.8,15.4c1.6,0,3.2,0,4.8,0c-1.3-5-3.1-9.8-5.2-14.5
				C162.1,154.3,157.8,156.9,159.1,159.8L159.1,159.8z"/>
			<path class="st0" d="M172.4,147.4c1.4,7.5,2.9,14.9,4.7,22.3c0.7,3.1,5.6,1.8,4.8-1.3c-1.7-7.4-3.3-14.8-4.7-22.3
				C176.6,142.9,171.8,144.2,172.4,147.4L172.4,147.4z"/>
			<path class="st0" d="M181.7,159.9c-3.2,0.3-6.4,0.7-9.7,1c-3.2,0.3-3.2,5.3,0,5c3.2-0.3,6.4-0.7,9.7-1
				C184.8,164.6,184.9,159.6,181.7,159.9L181.7,159.9z"/>
			<path class="st0" d="M193.1,161.7c-0.8-6.2-1.9-12.3-3.4-18.3c-0.8-3.1-5.6-1.8-4.8,1.3c1.4,5.6,2.5,11.3,3.3,17
				C188.5,164.8,193.5,164.9,193.1,161.7L193.1,161.7z"/>
			<path class="st0" d="M191.3,170.5c3.2,0,3.2-5,0-5C188.1,165.5,188.1,170.5,191.3,170.5L191.3,170.5z"/>
			<path class="st0" d="M293.7,147.1c-11,1-17.9-8.9-20.4-18.5c-2.5-9.8-2.3-20.1-4.5-29.9c-3.9-17.4-12.4-36.7-27.1-47.7
				c-15.8-11.8-38.6-13.1-57.5-13.5c-10.2-0.2-20.5,0.2-30.5,1.7c-10.6,1.6-19.4,6.1-28,12.4c-7.4,5.4-15,11-21.4,17.6
				c-6.9,7.1-11.5,15.5-15.1,24.6c-7.2,18.5-11.7,36.9-5.3,56.3c11.7,35.9,49.8,56.7,86.2,57.1c22.9,0.3,42-10.4,60.4-23
				c19.1-13.1,39.3-28,63.6-27c3.2,0.1,3.2-4.9,0-5c-39.2-1.6-64.2,33.6-98.5,45.9c-35.5,12.7-82.2-3.7-101.1-36.5
				c-10.3-17.9-10.6-36.8-4.1-56c3.2-9.4,6.5-19,12.5-26.9c5.9-7.9,14-14,21.8-20c8.2-6.3,16.5-11.8,26.8-13.9
				c10-2.1,20.7-2.3,30.9-2.2c19,0.2,43,1.2,58.2,14c16.6,14,23.5,37.7,25.7,58.4c0.9,9.1,1.8,18.8,7.2,26.5
				c4.6,6.7,11.9,11.5,20.3,10.7C296.9,151.8,296.9,146.8,293.7,147.1L293.7,147.1z"/>
			<path class="st0" d="M177.8,133.4c-1.6-9.4-4.6-18.4-8.8-27c-1.4-2.9-5.7-0.4-4.3,2.5c4,8.2,6.8,16.8,8.3,25.8
				C173.5,137.9,178.3,136.5,177.8,133.4L177.8,133.4z"/>
			<path class="st0" d="M189.6,129.6c-5.6-2.7-12.7-5-17.7-8.7c0.4,0.7,0.8,1.4,1.2,2.2c-0.1,1.5,0.7-0.1,1.6-0.8
				c1-0.8,2.1-1.6,3-2.6c1.4-1.3,2.6-2.9,3.4-4.6c1.3-2.8,1.9-7.2-0.8-9.5c-4.9-4.3-13.1,0.7-14.9,5.8c-1.1,3,3.7,4.3,4.8,1.3
				c0.9-2.3,6.6-6,6.8-0.7c0.1,2.3-3.7,4.9-5.2,6.2c-1.5,1.3-3.9,2.5-3.7,4.9c0.2,2.5,3.2,3.2,5.1,4.1c4.6,2.2,9.2,4.5,13.8,6.7
				C189.9,135.3,192.5,131,189.6,129.6L189.6,129.6z"/>
			<path class="st0" d="M108,115.2c4.2-0.4,8.3-1.2,12.3-2.5c3.1-1,1.8-5.8-1.3-4.8c-3.6,1.1-7.2,1.9-11,2.3
				C104.8,110.6,104.8,115.6,108,115.2L108,115.2z"/>
			<path class="st0" d="M189.6,125.2c3.7-2.1,10.2-3.4,9.1-9.2c-0.8-4.3-6.3-5.4-9.5-2.9c-3.5,2.8-4,8.8-2.2,12.7
				c2.6,5.3,8.7,5.1,13.6,4.3c3.2-0.5,1.8-5.3-1.3-4.8c-2.2,0.3-5.5,1-7.3-0.9c-1.4-1.4-1.3-4.3-0.6-6.1c0.7-1.7,3.3-2,1.7-0.3
				c-1.4,1.5-4.3,1.8-6,2.8C184.3,122.4,186.8,126.8,189.6,125.2L189.6,125.2z"/>
		</g>
	</g>
</g>
</svg>

```
(Paste that into the app)

## TODO
 * Text transformation
 * Animations
 * In app editor
 * Better CSS
 * Error notifications
