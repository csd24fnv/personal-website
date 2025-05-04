# Website Testing and Validation Report

## Live URL (optional)
If hosted online, access the site here: [https://csd24fnv.github.io/personal-website/index.html)

---

## Description of the Website
This is the personal portfolio website of Deepkshi, a web developer, data scientist, and cybersecurity enthusiast. The site showcases my skills, projects, resume, and contact information. I chose this topic to present my professional profile and demonstrate my web development abilities in a real-world context.

---

## Findings from Testing

### Cross-browser Compatibility
- **Browsers tested:**
  - Google Chrome (desktop & mobile)
  - Mozilla Firefox (desktop & mobile)
  - Microsoft Edge (desktop)
  - Safari (desktop & iOS)
- **Results:**
  - The website displays correctly and is fully functional in all tested browsers.
  - Responsive design adapts well to different screen sizes and devices.
  - Minor visual differences in font rendering and button shadows between browsers, but no functional issues.
- **Screenshots:**
  - (Insert screenshots here if required by your instructor)

### Peer Review
- **Peer 1:**
  - "The sidebar navigation is easy to use and the color scheme is modern. The gallery and carousel are interactive and fun."
- **Peer 2:**
  - "The site is very responsive on my phone. The contact form is clear and easy to use."
- **Peer 3:**
  - "I like the card-style sections and the skills animation. Maybe add more project details or links."
- **Suggestions for Improvement:**
  - Add more project details or case studies.
  - Consider adding a downloadable resume in more formats.
  - Improve contrast for some text/buttons for accessibility.

---

## Findings from Validation

### HTML Validation
- Used the [W3C HTML Validator](https://validator.w3.org/).
- **Results:**
  - All pages pass validation with no critical errors.
  - Minor warnings about alt text and ARIA labels were fixed.

### CSS Validation
- Used the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- **Results:**
  - CSS passes validation with no errors.
  - Some vendor-specific properties (for gradients, shadows) are present for cross-browser support.

- **Unresolved Issues:**
  - Some warnings about experimental CSS properties (e.g., `backdrop-filter`) remain for visual effects. These are intentional for modern browser support.

---

## Documented Features
- **Sidebar Layout:** Sticky sidebar with avatar, navigation, and social links.
- **Card-Style Sections:** All main content is presented in visually distinct cards with gradients and shadows.
- **3x3 Image Gallery:** Dynamically generated from JSON, with modal/lightbox for viewing images.
- **Featured Projects Carousel:** Interactive carousel generated from JSON, with navigation and auto-play.
- **Animated Skills Section:** Progress bars animate on scroll.
- **Contact Form:** Accessible, styled form with clear feedback.
- **Responsive Design:** Works on all devices and screen sizes.
- **Accessibility:** Uses semantic HTML, ARIA labels, and good color contrast.
- **Additional Interactive Features:** Sidebar toggle for mobile, scroll-triggered animations, and modal popups.

---

## References
- [Unsplash](https://unsplash.com/) (project/gallery images)
- [Simple Icons](https://simpleicons.org/) (social icons)
- [Devicon](https://devicon.dev/) (skill icons)
- [Google Fonts](https://fonts.google.com/)
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Any additional libraries or code snippets are credited in code comments.

---

## Reflection
I am proud of the modern, clean design and the interactive features I implemented. I especially like the dynamic gallery and carousel, as well as the sidebar layout. If I were to improve the site further, I would add more detailed project case studies, enhance accessibility even more, and possibly integrate a blog or news section. Overall, this project helped me strengthen my web development, design, and testing skills. 
