## MDDN 242 2024 Assignment 2

##
My font name is called `CONTRAST`, inspired by complementary colors. Utilizing hues of yellow, orange, and blue. Each letter is formed by combining different shapes with two circles, two triangles, three rectangles, resulting in a distinctive appearance.  By adjusting the positions, sizes, and colors of those shaps,  transformed simple geometric shapes into letter forms.

##
Originally inspired by cats, when i saw  a dsigner who design the font  with cats as the theme, therefore i also want to design a similer font with that desine. But as the design developed, I found that it was too complicated because it required a lot of different curves and lines, so I decided to drop the cat element and design a completely different font from scratch. I decided to start with the simplest shapes, such as circles, triangles, and rectangles, rather than using other complex patterns. In this process, designing some specific letters is undoubtedly a big challenge, either the existing graphics do not support my design or the design of the letter is completely invisible. The second  problem was that when I was writing the code, It's hard to create a triangle that would be dynamic in real time, and it took a lot of searching and asking to solve this problem.

##
Throughout the whole process, there were many thrilling moments. Particularly, at the outset, I spent a long time grappling with understanding the code, especially in figuring out how to connect the drawLetter.js【function interpolate_letter(percent, oldObj, newObj)】with letter.js and editor.js. At first, I found this task is soo hard, but once I understand it, I felt a tremendous sense of accomplishment because I had overcome a major hurdle. This is one of the reasons why I love coding—there's an exhilarating feeling that comes with mastering something I initially found very difficult. Given more time on this project, I might have ventured into more challenging and complex tasks ：）

##
Those changes is controlled by twenty parameters: 
The three parameters per letter:
  * `circle1size` : size of the first circle 
  * `circle1x` : Move first circle horizontally along the X-axis 
  * `circle1y` : Move first circle vertically along the y-axis 
  * `lerpColorAmt1`: First circle change color 
  * `circle2size`:size of the second circle 
  * `circle2x`:Move second circle horizontally along the X-axis 
  * `circle2y`:Move second circle vertically along the y-axis 
  * `lerpColorAmt2`:second circle change color second
  * `rect1Width`:Change the width of the first rectangle
  * `rect1Height`:Change the height of the first rectangle
  * `rect1x`:Move first rectangle horizontally along the X-axis 
  * `rect1y`:Move first rectangle vertically along the y-axis 
  * `triangle1Size`: change size of the first triangle 
  * `triangle1x`:Move first triangle horizontally along the X-axis 
  * `triangle1y`:Move first triangle vertically along the y-axis 
  * `rotationAngle`:rotate the first triangle 
  * `rect2Size`: Change the width of the second rectangle
  * `rect3Size`:Change the width of the third rectangle
  * `triangle2Size`:change size of the second triangle 
  * `rotationAngle2`:rotate the second triangle


