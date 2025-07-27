# PeerSkill – Mentor-Mentee Platform 🎓

PeerSkill is a simulated mentor-mentee platform built with **React.js** and **MySQL**. It allows users to browse mentors, explore their skills and ratings, and simulate booking sessions and submitting feedback.

## 🔧 Tech Stack

- **Frontend**: React.js, Material UI
- **Database**: MySQL
- **Tooling**: VS Code, MySQL Workbench

## ✨ Features

- Mentor list with AI-generated avatars, skill badges, and rating display
- Feedback and booking forms with validation
- Schema-first database with seed data and complex SQL queries
- Simulated session request flow
- ER diagram generated via reverse engineering in MySQL Workbench

## 📊 Metrics

- 10+ mentors and 8+ distinct skills mapped dynamically
- 5 normalized tables designed using SQL best practices
- 5+ SQL queries for insights (top-rated mentors, session stats, etc.)

## 📁 Project Structure

```
peerskill/
├── public/
├── src/
│   ├── components/
│   │   ├── MentorCard.jsx
│   │   ├── MentorList.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── BookSessionForm.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   └── index.js
├── db/
│   ├── schema.sql
│   ├── seed.sql
│   └── queries.sql
├── .gitignore
├── package.json
└── README.md
```

## 🚀 How to Run

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Run the frontend:
   ```bash
   npm start
   ```

3. Set up MySQL:
   - Run `schema.sql` and `seed.sql` in MySQL Workbench

## 🧠 Learnings

- Practiced schema design, data normalization, and seeding
- Implemented UI interaction flows without backend
- Improved code modularity and reusable component design

---

> 📌 This project is aimed at showcasing DBMS knowledge, frontend skills, and real-world simulation without backend integration. Ideal for placement portfolios.