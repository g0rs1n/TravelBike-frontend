# 🚴‍♂️TravelBike - EuroBike Planner

**A web application for planning cycling trips across Europe.  
Discover popular and hidden bike routes, explore sights along the way, and create travel groups to collaboratively plan routes and chat with your friends in real time.**

---

## 🚀 Features

- **🔍 Browse public routes and open groups**
- **🗺️ Interactive map (Leaflet + OpenStreetMap)**
- **👥 Create or join travel groups**
- **✍️ Collaboratively edit routes in real-time**
- **💬 Group chat**
- **📷 Photos, reviews, and points of interest**
- **🔐 Authentication and user profiles**

---

## 🛠️ Frontend Tech Stack

- **[Next.js](https://nextjs.org/) (App Router + SSR)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[TanStack Query](https://tanstack.com/query/latest) - data fetching and caching** 
- **[Socket.io](https://socket.io/) - real-time WebSocket communication** 
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – form validation**
- **[Leaflet](https://leafletjs.com/) – interactive maps**
- **[Zustand](https://zustand-demo.pmnd.rs/) - state management**

---

# 📦 Getting Started

## Prerequisites
- **Node.js (v18 or later)**
- **npm (comes with Node.js) or yarn**
- **PostgreSQL database running**

## 1. Clone the repository:

```
git clone https://github.com/g0rs1n/TravelBike-frontend.git
cd project-name
```

## 2. Install dependencies:

- ### Using npm:

```
npm install
```
- ### Using yarn:

```
yarn
```

## 3. Create `.env` file:

- ### Create a `.env` file in the root directory of your project with the following content:

```
# Replace with the address of your backend, if needed
NEXT_PUBLIC_SERVER_URL=http://localhost:5001/api

```

## 4. Start the frontend:

- ### Using npm:

```
npm run dev
```
- ### Using yarn:

```
yarn dev
```

---

# Thank you for checking out TravelBike! ✨

## **_Happy cycling and coding!_** 🚴‍♂️💻