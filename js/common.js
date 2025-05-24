// פונקציה להוספת תפריט עליון
function addHeader() {
  const header = document.createElement("header");
  header.className = "navbar navbar-expand-lg navbar-light bg-light fixed-top";
  header.innerHTML = `
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <i class="fas fa-home"></i> AI Content Generators
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="Schedule-Generator.html">
                            <i class="fas fa-calendar-alt"></i> מערכת שעות
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Character-Forge.html">
                            <i class="fas fa-user"></i> דמויות
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Image-Prompt-Generator.html">
                            <i class="fas fa-image"></i> תמונות
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Card-Prompt-Generator.html">
                            <i class="fas fa-address-card"></i> קלפים
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Booklet-Prompt-Generator.html">
                            <i class="fas fa-book"></i> ספרים
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Style-Presets-Generator.html">
                            <i class="fas fa-palette"></i> עיצוב
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="World-Lore-Generator.html">
                            <i class="fas fa-globe"></i> עולמות
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `;
  document.body.insertBefore(header, document.body.firstChild);

  // הוספת מרווח לתוכן כדי שלא יוסתר על ידי התפריט
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.marginTop = "80px";
  }
}

// פונקציה להוספת פוטר
function addFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer mt-auto py-3 bg-light";
  footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>קישורים מהירים</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html">דף הבית</a></li>
                        <li><a href="https://github.com/anlominus/AI-Content-Generators" target="_blank">מאגר בגיטהאב</a></li>
                        <li><a href="https://anlominus.github.io/AI-Content-Generators" target="_blank">אתר ראי</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>תיעוד</h5>
                    <ul class="list-unstyled">
                        <li><a href="README.md">README</a></li>
                        <li><a href="CONTRIBUTING.md">הנחיות לתרומה</a></li>
                        <li><a href="CHANGELOG.md">רשימת שינויים</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>צור קשר</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://github.com/anlominus/AI-Content-Generators/issues" target="_blank">דיווח על באגים</a></li>
                        <li><a href="https://github.com/anlominus/AI-Content-Generators/pulls" target="_blank">הצעות לשיפור</a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="text-center">
                <p>© 2024 AI Content Generators. כל הזכויות שמורות.</p>
                <p>מופץ תחת רישיון <a href="LICENSE" target="_blank">MIT</a></p>
            </div>
        </div>
    `;
  document.body.appendChild(footer);
}

// הוספת סגנונות CSS
function addStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .navbar {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .footer {
            box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
        }
        
        .footer a {
            color: #6c757d;
            text-decoration: none;
        }
        
        .footer a:hover {
            color: #343a40;
            text-decoration: underline;
        }
        
        .footer h5 {
            color: #343a40;
            margin-bottom: 1rem;
        }
        
        .footer ul li {
            margin-bottom: 0.5rem;
        }
        
        .footer hr {
            margin: 2rem 0;
        }
        
        .footer .text-center {
            color: #6c757d;
        }
    `;
  document.head.appendChild(style);
}

// הפעלת הפונקציות בטעינת הדף
document.addEventListener("DOMContentLoaded", function () {
  addHeader();
  addFooter();
  addStyles();
});
