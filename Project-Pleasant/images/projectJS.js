// JavaScript code for generating the meal plan
document.getElementById('generatePlanButton').addEventListener('click', function() {
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let goal = document.getElementById('goal').value;

    
    let requiredFields = [name, email, goal];
    for (let i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].trim() === '') {
      alert('Please complete all required fields.');
      return;
  }
}
    
    // Generate the meal plan HTML
    let mealPlanHTML = `
      <h1>Meal Plan for ${name}</h1>
      <h2>Email: ${email}</h2>
      <h3>Weekly Goal: ${goal}</h3>
      <h4>Meal Plan:</h4>
      <div class="container">
        <div class="day day-monday">
          <h2>Monday:</h2>
          <p>Breakfast: ${document.getElementById('mondayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('mondaySnack').value}</p>
          <p>Lunch: ${document.getElementById('mondayLunch').value}</p>
          <p>Snack: ${document.getElementById('mondaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('mondayDinner').value}</p>
        </div>
        <div class="day day-tuesday">
          <h2>Tuesday:</h2>
          <p>Breakfast: ${document.getElementById('tuesdayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('tuesdaySnack').value}</p>
          <p>Lunch: ${document.getElementById('tuesdayLunch').value}</p>
          <p>Snack: ${document.getElementById('tuesdaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('tuesdayDinner').value}</p>
        </div>
        <div class="day day-wednesday">
          <h2>Wednesday:</h2>
          <p>Breakfast: ${document.getElementById('wednesdayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('wednesdaySnack').value}</p>
          <p>Lunch: ${document.getElementById('wednesdayLunch').value}</p>
          <p>Snack: ${document.getElementById('wednesdaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('wednesdayDinner').value}</p>
        </div>
        <div class="day day-thursday">
          <h2>Thursday:</h2>
          <p>Breakfast: ${document.getElementById('thursdayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('thursdaySnack').value}</p>
          <p>Lunch: ${document.getElementById('thursdayLunch').value}</p>
          <p>Snack: ${document.getElementById('thursdaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('thursdayDinner').value}</p>
        </div>
        <div class="day day-friday">
          <h2>Friday:</h2>
          <p>Breakfast: ${document.getElementById('fridayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('fridaySnack').value}</p>
          <p>Lunch: ${document.getElementById('fridayLunch').value}</p>
          <p>Snack: ${document.getElementById('fridaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('fridayDinner').value}</p>
        </div>
        <div class="day day-saturday">
          <h2>Saturday:</h2>
          <p>Breakfast: ${document.getElementById('saturdayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('saturdaySnack').value}</p>
          <p>Lunch: ${document.getElementById('saturdayLunch').value}</p>
          <p>Snack: ${document.getElementById('saturdaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('saturdayDinner').value}</p>
        </div>
        <div class="day day-sunday">
          <h2>Sunday:</h2>
          <p>Breakfast: ${document.getElementById('sundayBreakfast').value}</p>
          <p>Snack: ${document.getElementById('sundaySnack').value}</p>
          <p>Lunch: ${document.getElementById('sundayLunch').value}</p>
          <p>Snack: ${document.getElementById('sundaySnack2').value}</p>
          <p>Dinner: ${document.getElementById('sundayDinner').value}</p>
        </div>
      </div>
    `;
    
    // Open a new window with the generated meal plan
    let newWindow = window.open('', '_blank');
    newWindow.document.write(mealPlanHTML);
    newWindow.document.close();
    
    // Add print button to the generated meal plan
    let printButtonHTML = `
      <button onclick="window.print()">Print</button>
    `;
    newWindow.document.body.insertAdjacentHTML('beforeend', printButtonHTML);
    
    // Add download button to the generated meal plan
    let downloadButtonHTML = `
      <button onclick="downloadMealPlan()">Download</button>
    `;
    newWindow.document.body.insertAdjacentHTML('beforeend', downloadButtonHTML);
  });
  
  // Function to download the meal plan as a text file
  function downloadMealPlan() {
    let name = document.getElementById('name').value;
    let mealPlanText = `
      Meal Plan for ${name}
  
      Email: ${document.getElementById('email').value}
      Weekly Goal: ${document.getElementById('goal').value}
  
      Monday:
      Breakfast: ${document.getElementById('mondayBreakfast').value}
      Snack: ${document.getElementById('mondaySnack').value}
      Lunch: ${document.getElementById('mondayLunch').value}
      Snack: ${document.getElementById('mondaySnack2').value}
      Dinner: ${document.getElementById('mondayDinner').value}
  
      Tuesday:
      Breakfast: ${document.getElementById('tuesdayBreakfast').value}
      Snack: ${document.getElementById('tuesdaySnack').value}
      Lunch: ${document.getElementById('tuesdayLunch').value}
      Snack: ${document.getElementById('tuesdaySnack2').value}
      Dinner: ${document.getElementById('tuesdayDinner').value}
  
      Wednesday:
      Breakfast: ${document.getElementById('wednesdayBreakfast').value}
      Snack: ${document.getElementById('wednesdaySnack').value}
      Lunch: ${document.getElementById('wednesdayLunch').value}
      Snack: ${document.getElementById('wednesdaySnack2').value}
      Dinner: ${document.getElementById('wednesdayDinner').value}
  
      Thursday:
      Breakfast: ${document.getElementById('thursdayBreakfast').value}
      Snack: ${document.getElementById('thursdaySnack').value}
      Lunch: ${document.getElementById('thursdayLunch').value}
      Snack: ${document.getElementById('thursdaySnack2').value}
      Dinner: ${document.getElementById('thursdayDinner').value}
  
      Friday:
      Breakfast: ${document.getElementById('fridayBreakfast').value}
      Snack: ${document.getElementById('fridaySnack').value}
      Lunch: ${document.getElementById('fridayLunch').value}
      Snack: ${document.getElementById('fridaySnack2').value}
      Dinner: ${document.getElementById('fridayDinner').value}
  
      Saturday:
      Breakfast: ${document.getElementById('saturdayBreakfast').value}
      Snack: ${document.getElementById('saturdaySnack').value}
      Lunch: ${document.getElementById('saturdayLunch').value}
      Snack: ${document.getElementById('saturdaySnack2').value}
      Dinner: ${document.getElementById('saturdayDinner').value}
  
      Sunday:
      Breakfast: ${document.getElementById('sundayBreakfast').value}
      Snack: ${document.getElementById('sundaySnack').value}
      Lunch: ${document.getElementById('sundayLunch').value}
      Snack: ${document.getElementById('sundaySnack2').value}
      Dinner: ${document.getElementById('sundayDinner').value}
    `;
  
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(mealPlanText));
    element.setAttribute('download', 'meal_plan.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  // Clear the form
  document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('mealPlanForm').reset();
  });
  