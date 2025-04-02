# 🧞‍♂️ Ingredient Genie

**Ingredient Genie** is a web app that helps you turn your leftover ingredients into meals! Just type your ingredients into the form, click **Generate**, and get 10 recipe ideas instantly — powered by the Spoonacular API.

Built in under 5 hours during a hackathon, this project focuses on usability, clean visuals, and real-time API interaction.

---

## 🥣 What It Does

- 📝 Enter any ingredients you have (e.g., "chicken, rice, broccoli")
- 🍽️ Instantly fetches 10 recipes that match your ingredients
- 📎 Each recipe shows ingredients, image, and title
---

## 🛠 Tech Stack

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="30"/> HTML5</td>
    <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="30"/> CSS3</td>
    <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" width="30"/> SCSS</td>
    <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="30"/> JavaScript</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Spoonacular%20API-enabled-green?logo=fastapi&logoColor=white" height="20"/> Spoonacular API</td>
  </tr>
</table>

---

## 🚀 Getting Started (VS Code)

### ✅ Prerequisites

Make sure you have the following set up:

- [Visual Studio Code](https://code.visualstudio.com/)
- **Live Server** extension (by Ritwick Dey)
- **Live Sass Compiler** extension (for automatic SCSS to CSS conversion)

---

### 📂 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/hudanadeem/ingredient-genie.git
cd ingredient-genie
```

2. **Add your Spoonacular API key:**

   - Open the `recipe-api.js` file.
   - Replace the placeholder with your API key:

   ```js
   this.apiKey = "your_spoonacular_api_key_here";
   ```

3. **Open the folder in VS Code**

---

### 🔥 Preview the Website

1. Right-click `index.html` and select **“Open with Live Server”**,  
   _OR_ click the **“Go Live”** button in the bottom-right corner of VS Code.

2. **Ensure Sass is being watched:**
   - Install the **"Live Sass Compiler"** extension from the VS Code Extensions Marketplace.  
   - This extension automatically compiles your SCSS files into CSS whenever you make changes.

3. **Click the "Go Live" button** to preview the website and see live updates as you modify your code.
