# 🎓 Student Study Guide: The Red Dead Redemption 2 Web Project

Welcome to your first look at a **Full-Stack Web Application**! 

This project is a website dedicated to the game *Red Dead Redemption 2*. But more importantly, it is a perfect example of how modern websites are built. 

Even if you have no experience with full-stack development, this guide will break down exactly how this project works in simple terms.

---

## 1. What is "Full-Stack"?

Imagine a restaurant. 
- The **Frontend** is the dining room and the menu. It's what the customer sees, interacts with, and where they make choices.
- The **Backend** is the kitchen. It's where the ingredients are stored, the food is prepared, and the complex work happens out of sight.
- The **Database** is the pantry where all the raw ingredients (data) are kept.

A "Full-Stack" application is simply a project that has both a Frontend (the dining room) and a Backend (the kitchen).

---

## 2. The Kitchen: The Backend (Django & Python)

**Folder in project:** `/backend`

The backend is responsible for storing our information about RDR2 and serving it up when asked. We built this using **Python** and a framework called **Django**.

### Key Concepts to Study:
*   **The Database (SQLite):** This is a simple file (`db.sqlite3`) that acts like a spreadsheet. It stores all the paragraphs of text about the game (Introduction, Gameplay, Synopsis, etc.).
*   **Models (`models.py`):** This file tells the database how to organize the data. We created a `Section` model that says: "Every piece of information must have a Title and Content."
*   **The API (Application Programming Interface):** Think of the API as the waiter in our restaurant. The frontend doesn't go into the kitchen to get food; it asks the waiter. Our API takes requests from the internet and returns the RDR2 data in a format called **JSON** (which looks like a simple list of text).

---

## 3. The Dining Room: The Frontend (React & JavaScript)

**Folder in project:** `/frontend`

The frontend is what you actually see in your web browser—the cool cinematic background, the buttons, the animations, and the text. We built this using **JavaScript** and a library called **React**.

### Key Concepts to Study:
*   **Components (`App.jsx`):** React builds websites using "Lego blocks" called components. Instead of writing one massive HTML file, we create small pieces (like a Navigation Bar, a Title, or a Text Card) and stick them together.
*   **Routing (`react-router-dom`):** When you click "Gameplay" or "Synopsis" in the top menu, you aren't actually loading a new webpage. React is just instantly swapping out the "Lego blocks" on the screen to show different text. This makes the website feel extremely fast.
*   **Fetching Data (Axios):** When the website first loads, the frontend uses a tool called Axios to call the waiter (the Backend API). It says, "Hey, give me all the RDR2 text!" Once the backend replies, the frontend takes that text and beautifully displays it on the screen.

---

## 4. How They Talk to Each Other

Because the Frontend and Backend are in two separate folders, they are completely independent. 

1.  **You open the website:** The React Frontend loads the cinematic background and empty text boxes.
2.  **The Request:** React sends a secret message behind the scenes to `http://127.0.0.1:8000/api/sections/`.
3.  **The Work:** The Django Backend receives the message, looks into the SQLite database, grabs the paragraphs about RDR2, and sends them back.
4.  **The Result:** React receives the paragraphs and magically makes them appear on your screen!

---

## 💡 How to Learn from this Project

1.  **Change the Data:** Open the backend admin panel (`http://127.0.0.1:8000/admin/`) and try changing the text about the game. Watch how it automatically updates on the frontend!
2.  **Change the Colors:** Open `/frontend/src/index.css` and look for the `:root` variables at the top. Try changing the `--accent-red` color to blue and see what happens to the website.
3.  **Break it (and fix it):** The best way to learn is to experiment. Try turning off the backend server and see what the frontend does. (Hint: It should show a "Loading..." or "No Content" message!).