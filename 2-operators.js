
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = meal_cost * tip_percent / 100;
    let tax = meal_cost * tax_percent / 100;
    
    let total_cost = Math.round(meal_cost + tax + tip);
    console.log(total_cost);
    }

