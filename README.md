# CV Builder

A responsive CV builder built with React. Fill in your details on the left, see your CV update in real time on the right, and download it as a PDF.

[Live Demo]( https://anvar-khikmatov.github.io/cv-builder/)


## Features

- Real time preview as you type
- Add and remove multiple employment and education entries
- Skills section with category and skill pairs
- Languages section
- Profile picture upload
- PDF download via html2pdf.js
- Responsive layout for mobile and desktop

## Tech Stack

- React
- Vite
- html2pdf.js
- React Icons
- CSS

## Getting Started

```bash
git clone https://github.com/Anvar-Khikmatov/cv-builder.git
cd cv-builder
npm install
npm run dev
```

## Project Structure

```
src/
  components/
    General.jsx       # Personal info form
    Work.jsx          # Employment entry form
    Education.jsx     # Education entry form
    Skills.jsx        # Skills entry form
    Language.jsx      # Language entry form
    Preview.jsx       # Live CV preview and PDF download
  styles/
    Form.css
    Preview.css
  App.jsx             # State management and layout
  App.css             # Global styles
  data.js             # Initial placeholder data
```

## State Management

All state lives in App.jsx and flows down to components as props. Each section (work, education, skills, languages) is an array of objects keyed by crypto.randomUUID(). Child components receive specific update and delete callbacks instead of direct state setters.

## PDF Export

Uses html2pdf.js to capture the preview-container DOM element and save it as an A4 PDF. No backend required.

## Assignment

Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) React curriculum.