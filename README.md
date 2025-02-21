# 🚐 VanLife - Explore the #VanLife Movement!

**"You got the travel plans, we got the travel vans."**

VanLife is a web app designed to explore different van rental options, built to practice **React Router, API handling, and caching**. It includes routing, filtering, and API mocking with MirageJS, making it a great project for learning client-side navigation and state management.

---

## 🚀 Features (In Progress)

- **Routing & Nested Routes with React Router** 🛤️
- **404 Page for Non-existent Routes** ❌
- **MirageJS for Mocking API Requests** ⚡
- **React Query for Fetching & Caching Data** 🔄
- **Filtering Vans by Type (Luxury, Rugged, Simple)** 🏕️
- **Dynamic Van Details Page** 🚐
- **Host Dashboard with Nested Routes** 👨‍💻
- **Loading States & Performance Optimization** ⏳
- **(Upcoming) Authentication & Full-Stack Integration** 🔐

---

## 🛠️ Tech Stack

### Frontend

- React (Vite) ⚡
- TypeScript 🛠️
- Tailwind CSS 🎨
- React Router DOM 🚏
- React Query 📡
- MirageJS (Mock API) 🌐

### Backend (Future Enhancements)

- Node.js + Express.js (Planned) 🖥️
- MongoDB (Planned) 🗄️
- Authentication with JWT (Planned) 🔑

---

## 📍 Current Pages & Routes

### Public Routes

- `/` - **Home Page**
- `/about` - **About VanLife**
- `/vans` - **Explore Vans** (Includes filters by type: `?type=luxury`)
- `/vans/:vanId` - **Van Details Page**

### Host Routes (Will be private)

- `/host` - **Host Dashboard**
- `/host/dashboard` - **Overview (default route)**
- `/host/income` - **Income Statistics**
- `/host/vans` - **List of Owned Vans**
- `/host/vans/:vanId` - **Van Management** (Includes nested routes for details, pricing, and photos)

---

## 📜 Future Enhancements

- ✅ Implement Authentication (Login, Signup)
- ✅ Deploy a real backend (Express + MongoDB)
- ✅ Improve UI/UX with animations & dark mode
- ✅ Booking & Payment Integration

---

## 📺 Inspiration

This project was inspired by [this YouTube tutorial](https://www.youtube.com/watch?v=nDGA3km5He4) with additional features and modifications.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas, feel free to open an issue or submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.
