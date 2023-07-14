document.getElementById("generatePlanButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
  
    var mondayBreakfast = document.getElementById("mondayBreakfast").value;
    var mondaySnack = document.getElementById("mondaySnack").value;
    var mondayLunch = document.getElementById("mondayLunch").value;
    var mondayDinner = document.getElementById("mondayDinner").value;

    var mondayBreakfast = document.getElementById("tuesdayBreakfast").value;
    var mondaySnack = document.getElementById("tuesdaySnack").value;
    var mondayLunch = document.getElementById("tuesdayLunch").value;
    var mondayDinner = document.getElementById("tuesdayDinner").value;

    var mondayBreakfast = document.getElementById("wednesdayBreakfast").value;
    var mondaySnack = document.getElementById("wednesdaySnack").value;
    var mondayLunch = document.getElementById("wednesdayLunch").value;
    var mondayDinner = document.getElementById("wednesdayDinner").value;

    var mondayBreakfast = document.getElementById("thursdayBreakfast").value;
    var mondaySnack = document.getElementById("thursdaySnack").value;
    var mondayLunch = document.getElementById("thursdayLunch").value;
    var mondayDinner = document.getElementById("thursdayDinner").value;

    var mondayBreakfast = document.getElementById("fridayBreakfast").value;
    var mondaySnack = document.getElementById("fridaySnack").value;
    var mondayLunch = document.getElementById("fridayLunch").value;
    var mondayDinner = document.getElementById("fridayDinner").value;

    var mondayBreakfast = document.getElementById("saturdayBreakfast").value;
    var mondaySnack = document.getElementById("saturdaySnack").value;
    var mondayLunch = document.getElementById("saturdayLunch").value;
    var mondayDinner = document.getElementById("saturdayDinner").value;

    var mondayBreakfast = document.getElementById("sundayBreakfast").value;
    var mondaySnack = document.getElementById("sundaySnack").value;
    var mondayLunch = document.getElementById("sundayLunch").value;
    var mondayDinner = document.getElementById("sundayDinner").value;
    
    // New Meal Plan Window
    var content = `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Meal Plan for ${name}</title>
        <style>
            /* Add your desired CSS styling here */
        </style>
        </head>
        <body>
        <h1>Meal Plan for ${name}</h1>
        
        <h2>Email: ${email}</h2>
        <h2>Goal for the Week:</h2>
        <p>${goal}</p>
        
        <h2>Meal Plan:</h2>
        
        <h3>Monday:</h3>
        <p>Breakfast: ${mondayBreakfast}</p>
        <p>Snack: ${mondaySnack}</p>
        <p>Lunch: ${mondayLunch}</p>
        <p>Dinner: ${mondayDinner}</p>
        
        <!-- Repeat the above section for the remaining days of the week -->

        <button onclick="window.print()">Print</button>
        <button onclick="downloadMealPlan()">Download</button>

        <script>
            function downloadMealPlan() {
            var content = document.documentElement.outerHTML;
            var blob = new Blob([content], { type: "text/html" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "meal_plan.html";
            a.click();
            URL.revokeObjectURL(url);
            }
        </script>
        </body>
        </html>
    `;

    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();
    });