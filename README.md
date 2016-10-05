# rff-app
Web Application for Riley's Farm Fresh

Web Application for Riley's Farm Fresh

This is a full-stack SPA, built for a Utah business. The business is responsible for growing a distributing fruit in the Intermountain West.

The application is built to be fast, visually appealing, and to increase the efficiency of the business. In order to foster speed, the application is built using AngularJS and ui-viewer, allowing for the modularization of content and thereby reducing the amount of content needing to be loaded at any one time. To make the application visually appealing, I first designed the layout in Adobe Experience Design. I implemented the design using HTML5 and SCSS, with a minimum of external libraries. I favored large images, uncluttered pages, and a tasteful amount of animation. The application is fully responsive. I built the pages mobile first, and made sure that every feature scaled well for a variety of devices. As a business solution, the application provides to advantages to the proprietor. First, is the ability to update (from an administrator page) the various locations of his current markets, which change from week to week. Previous to building this feature, someone wanting his farmers' market goods would have no way of knowing where they could be found. Second, is the ability for his current and future wholesale customers to place orders online, and for him to review those orders (again, from his administrator page). Previously he fielded all of these orders via phone calls, which demanded time and energy.

The database for Riley's Farm Fresh is built using PostgreSQL. To facilitate communication between the front-end and back-end, I used Node.JS, Express.JS, and Massive.JS.

Future work on the application includes using ngDialog for my alert messages, providing error-handling, and using authentication to direct traffic and to provide information on wholesale order forms.
