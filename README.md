# Random Trivia

BeCentered is a site that hopes to provide useful information for centering one's body and mind to users. The site is aimed at users who are beginners, that are seeking methods to centre their body and mind, while also providing users in Zürich, Switzerland with an option to be able to get in touch with other like minded individuals by means of local social sessions.

The site will be useful by providing users with an introduction to various possible methods of acheiving their goals, by means of meaningfull informational text, images and videos as well as having a monthly schedule for users in the local area to meet up for weekly social sessions. There will also be an option to sign up to a monthly newsletter.

![Responsive Layout](/assets/images/responsive-layout.png)

## Conception

- I made use of [Balsamiq](https://balsamiq.com/) to create a wireframe concept for Random Trivia.
- The main design of the page has changed as I progressed through the development towards a finished product.

### Home Page

## Features

### Existing Features

- __The Landing Page__

- __The Introduction Section__

- __The Footer__

### Features Left to Implement

## Testing

- Found bug with navigation menu order, it is displaying in reverse order.
  - **Resolved** by researching information on [Web Developer Diary](http://nambiara.blogspot.com/2010/10/float-right-without-changing-order.html) and applying it to my design.
- Sourced most common media breakpoint widths on [www.freecodecamp.org](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/.) and made the site responsive down to minimum width of 320 pixels.
  - Mobile devices: 320px — 480px
  - iPads, Tablets: 481px — 768px
  - Small screens, laptops: 769px — 1024px
  - Desktops, large screens: 1025px — 1200px
  - Extra large screens, TV: 1201px and more
- Made use of Chrome developer tools for previewing and testing new designs for media queries as well as UX aspects.

### Validator Testing

- Made use of the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/) for the CSS file and the official [W3C validator](https://validator.w3.org/) for all HTML file testing.

#### Initial Validator Tests
- Initial validator test for index.html results:
  - 3 Bad Value errors for having spaces in image names.
    - **Resolved** by re-naming images accordingly.
  - 1 Warning for using an H1 tag incorrectly.
    - **Resolved** by replacing it with an unordered list for logical semantic structure.

- Initial validator test for balance.html results:
  - Found 4 errors referring to usage of height and width attributes in iframe tags with values of "100%".
    - **Resolved** by removing attributes and styling with CSS.
  - Found 2 warnings for the use of H1 tags.
    - **Resolved** by replacing with H2 tags for semantic structure.

- Initial validator test for minfulness.html results:
  - Found 4 errors referring to usage of height and width attributes in iframe tags with values of "100%".
    - **Resolved** by removing attributes and styling with CSS.
  - Found 2 warnings for the use of H1 tags.
    - **Resolved** by replacing with H2 tags for semantic.

- Initial validator test for sign-up.html results:
  - Found 1 warning for the use of H1 tags.
    - **Resolved** by replacing with H2 tags for semantic structure.

#### Final Validator tests

- Final validator test for index.html results:
  - 1 Warning for the introduction section not having a heading as it was wrapped in a nav element.
    - **Resolved** by removing the outer nav element as it served no other function.

- Final validator test for balance.html results:
  - No errors or warnings found.

- Final validator test for mindfulness.html results:
  - No errors or warnings found.

- Final validator test for sign-up.html results:
  - No errors or warnings found.

- Final validator test for style.css results:
  - file validates as CSS level 3 + SVG

- Final validator test for thank-you.html results:
  - No errors or warnings found.

- All the pages of BeCentered have passed their validator testing at the time of submission.

### Unfixed Bugs

## Deployment

- BeCentered was deployed to GitHub pages, the steps were as follows:
  - While in the GitHub repository, select the settings tab.
  - Then select the Pages tab from the new menu to the left of the viewport.
  - From the source section drop down menu, select Main branch.
  - Once the main branch has been selected, the page will automatically refresh with a detailed ribbon display to indicate the successful deployment.

Here is the live link [BeCentered](https://joao4569.github.io/be-centered/)

## Deployment Testing

- Tested all internal and external links, form validation as well as responsivenes of Becentered on deployed site and all are working as intended.

## Credits

- First and foremost I would like to thank my mentor Anthony for his valuable input.

### Content

- Commit comment conventions were taken from [Freecodecamp.org](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/), I do not totally understand all the vernacular but tried my best to implement it as best I could.
- Font pairing taken from example seen on [typ.io](https://typ.io/fonts/fredoka_one), after deciding to use the Fredoka One font as my headings' font.
- Font icons sourced on [fontawesome.com](https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=question&m=free).

### Media

- All images sourced from [Pexels](https://www.pexels.com).
- Hero image sizing suggestions sourced on [Hubspot](https://blog.hubspot.com/marketing/hero-image).
- Information for optimizing images for web design found on [jimdo](https://www.jimdo.com/blog/optimize-website-images-for-better-design-seo/).
- All images on Becentered were resized using [TinyPNG](https://tinypng.com/).
- Code for Hero image zoom animation taken directly from "Love Running" walkthrough project.
- Method for embedding Youtube video learnt on [GeeksforGeeks](https://www.geeksforgeeks.org/html-adding-youtube-videos/).
- Learn about object-fit CSS property on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).