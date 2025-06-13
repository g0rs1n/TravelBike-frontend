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
- **[Axios](https://axios-http.com/) - promise-based HTTP client**
- **[Socket.io](https://socket.io/) - real-time WebSocket communication** 
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – form validation**
- **[Leaflet](https://leafletjs.com/) – interactive maps**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[Zustand](https://zustand-demo.pmnd.rs/) - state management**
- **[Sonner](https://sonner.emilkowal.dev/) - toast notifications library**

---

# 📦 Getting Started

## Prerequisites
- **Node.js (v18 or later)**
- **npm (comes with Node.js) or yarn**
- **PostgreSQL database running**

## 1. Clone the repository:

```
git clone https://github.com/g0rs1n/TravelBike-frontend.git
cd TravelBike-frontend
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

### After starting the frontend, make sure your backend server is also running.
### To do that, switch to the [TravelBike backend repository](https://github.com/g0rs1n/TravelBike-backend) and follow its setup instructions.

---

# Thank you for checking out TravelBike! ✨

## **_Happy cycling and coding!_** 🚴‍♂️💻