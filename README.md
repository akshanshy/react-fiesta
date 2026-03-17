# Fiesturo (React)

This is your original multi-page HTML/CSS site converted into a single React app using React Router.

## Run locally

From the `react-fiesta` folder:

```bash
npm install
npm run dev
```

Then open the dev server URL shown in the terminal (usually `http://localhost:5173`).

## Routes (converted from HTML pages)

- `/` (was `index.html`)
- `/ongoing` (was `ongoing.html`)
- `/upcoming` (was `upcoming.html`)
- `/past` (was `past.html`)
- `/registration` (was `registration.html`)
- `/login` (was `login.html`)
- `/signup` (was `signup.html`)
- `/contact` (was `contact.html`)

## Assets (images/videos)

Your original `index.html` references files like `a.jpeg`, `background.mp4`, `video1.mp4`, `1.jpeg`, etc.
Those files were not present in the workspace at conversion time, so the React app expects them here:

- `react-fiesta/public/a.jpeg`
- `react-fiesta/public/background.mp4`
- `react-fiesta/public/video1.mp4`
- `react-fiesta/public/video2.mp4`
- `react-fiesta/public/video3.mp4`
- `react-fiesta/public/1.jpeg` (and the rest of the gallery images)

If you add them, they’ll automatically show up.

