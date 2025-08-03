# LUAD Publications Website

A student-made school publication site, built from scratch for my high school.

Luad Publications was a personal initiative I proposed to the facilitators of our school's publications organization. The idea was to have a public-facing site where students, teachers, and parents could access school articles, editorials, and creative works. I developed the site over several months while learning React and Astro along the way, focusing on avoiding needing a back-end and using Freemium back-end services. Although the project was ultimately unused by the school, the process became a major learning milestone for me.

[LUAD Publications Website](htttps://luad.web.app)

---

## ✨ Features

- Article pages for news, editorials, and creative works
- Admin dashboard protected by Firebase Auth with Claims
- Automated Google Docs content importing via the Google Docs API
- Fully static site with dynamic admin functionality using Firebase
- Little amounts of Javascript packaged (thanks to Astro)
- Built without needing a traditional backend server

---

## 🧰 Tech Stack

- **Astro** – Chosen over React later in development for simplicity and better performance on static sites
- **Firebase** – Used for hosting, authentication, Firestore, and (previously accessible without a billing account) storage
- **Google Docs API** – Enables article importing and formatting
- **React (archived)** – The initial build was done in React before moving to Astro

---

## 🚀 Getting Started

This project is no longer maintained and won’t fully run without a Firebase billing account due to its reliance on Firebase Storage.

If you still want to explore it locally:

<CODE>
git clone https://github.com/your-username/luad-publications
cd luad-publications
npm install
npm run dev
</CODE>

Admin functionality requires setting up Firebase Auth, Firestore, and assigning auth claims manually.

---

## 🧠 Development Notes

- I started the site using plain JavaScript + React, learning how to handle routing, state, and UI composition.
- After React started feeling too heavy for a blog-type site, I transitioned the project to Astro.
- I had no prior experience working with APIs or document parsing, but was able to get Google Docs importing working reliably.
- Firebase was chosen to avoid backend hosting and to keep things simple with Auth and Firestore as the backend.

---

## 📦 Project Status

The project is **archived** and no longer actively maintained. It was functional at one point, but due to school disinterest and changing Firebase policies (e.g. Storage now requiring billing), it has been left as-is.

Despite that, it remains one of my biggest learning milestones and a good example of how I approach problems and complete projects from scratch.

---

## 📜 License

[MIT](LICENSE)
