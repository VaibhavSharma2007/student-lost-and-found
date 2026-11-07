# FindIt – Student Lost and Found Application

FindIt is a web-based Student Lost and Found application designed to help college students report missing belongings and reconnect with lost items.

The platform provides a simple way for students to submit lost-item complaints, browse reported items, and contact other students.

## Features

- **Student Registration:** Students can create an account.
- **Student Login:** Registered students can log in.
- **Student Profile:** Displays the logged-in student's information.
- **Report Lost Items:** Submit details about missing belongings.
- **Photo Upload:** Attach an image of the lost item.
- **Browse Reported Items:** View recently reported items.
- **Contact Students:** Contact the student who reported an item through email.
- **Data Persistence:** Uses browser localStorage to retain demo accounts and complaints.
- **Responsive Design:** Supports desktop and mobile screens.

## Technologies Used

- Next.js
- React.js
- JavaScript
- HTML
- CSS
- Git and GitHub
- Browser localStorage

## Getting Started

Follow these instructions to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/VaibhavSharma2007/student-lost-and-found.git
```

### 2. Navigate to the project folder

```bash
cd student-lost-and-found
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

http://localhost:3000

## Project Structure

```text
student-lost-and-found/
│
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Profile.js
│   │   ├── ComplaintCard.js
│   │   └── ComplaintForm.js
│   │
│   ├── context/
│   │   └── AppContext.js
│   │
│   ├── login/
│   │   └── page.js
│   │
│   ├── signup/
│   │   └── page.js
│   │
│   ├── page.js
│   ├── layout.js
│   └── globals.css
│
├── public/
├── DESIGN-SYSTEM.md
├── WIREFRAME.md
├── README.md
└── package.json
```

## Documentation

- `DESIGN-SYSTEM.md` – Describes the application's colors, typography, components, and design principles.
- `WIREFRAME.md` – Contains the application's initial page layouts.

## Future Improvements

- Database integration.
- Secure server-side authentication.
- Search and filter functionality.
- Item status tracking.
- Admin dashboard.

## Project Information

**Project Name:** FindIt – Student Lost and Found Application

**Project Type:** College Project

**Repository:** https://github.com/VaibhavSharma2007/student-lost-and-found

---

Developed as a student project to make lost-and-found management easier within college campuses.
