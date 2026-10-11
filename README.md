# Morfyus — Multi-Page Personal Site

**A five-page personal site — home, work, blog, about and contact — built with Bootstrap 5 and scroll animations.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-mister2314.github.io/Portfolio-2ea44f?style=flat-square&logo=vercel&logoColor=white)](https://mister2314.github.io/Portfolio/)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952b3?style=flat-square&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-0969da?style=flat-square&logoColor=white)

<p align="center">
  <a href="https://mister2314.github.io/Portfolio/">
    <img src="docs/preview.png" alt="Morfyus — Multi-Page Personal Site — desktop preview" width="100%">
  </a>
</p>

## Overview

My first attempt at a real multi-page site. Five pages share one header, one footer and one stylesheet, with Bootstrap 5 handling the grid and responsive utilities and a small script managing the loading screen and page behaviour.

It is deliberately kept in the repo as a record of where I started — the layout thinking is here, even if the code is not what I would write now.

## Features

- Five linked pages: home, work, blog, about, contact
- Bootstrap 5 grid and responsive utilities
- Animated loading screen on entry
- AOS scroll-in animations across all pages
- Blog listing with a dedicated blog script
- Shared header, footer and navigation across pages

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5, five pages |
| Styling | CSS3, Bootstrap 5.3 |
| Animation | AOS |
| Logic | Vanilla JavaScript (`index.js`, `blog.js`) |
| Deploy | GitHub Pages |

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| <img src="docs/preview.png" alt="Desktop view"> | <img src="docs/preview-mobile.png" alt="Mobile view" width="230"> |

## Getting Started

No build step and no dependencies — clone the repo and open the entry file, or serve the folder locally:

```bash
git clone https://github.com/Mister2314/Portfolio.git
cd Portfolio

# Option 1 — open it directly
start index.html      # Windows
open  index.html      # macOS

# Option 2 — serve it locally
npx serve .
```

## Project Structure

```
index.html — home page
work.html / blog.html / moreabout.html / contact.html — remaining pages
assets/css/ — one stylesheet per page plus a shared style.css
assets/js/index.js — shared behaviour and loading screen
assets/js/blog.js — blog page logic
```

## Notes

Kept public on purpose. It is the earliest thing here, and comparing it with the newer repositories is a fair measure of how much changed.

## Author

**Xəyal Hüseynli** — Junior Front-End Developer

[Portfolio](https://hypnosdev.vercel.app) · [GitHub](https://github.com/Mister2314) · [LinkedIn](https://www.linkedin.com/in/x%C9%99yal-h%C3%BCseynli-3487b91ba/) · [xeyalhuseynli06@gmail.com](mailto:xeyalhuseynli06@gmail.com)
