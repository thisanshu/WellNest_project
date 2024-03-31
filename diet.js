const breakfastItems = document.querySelector('#breakfast-items');
const lunchItems = document.querySelector('#lunch-items');
const dinnerItems = document.querySelector('#dinner-items');
const breakfastChart = document.querySelector('#breakfast-chart');
const lunchChart = document.querySelector('#lunch-chart');
const dinnerChart = document.querySelector('#dinner-chart');

const itemsData = {
    'breakfast': ['Oatmeal', 'Fruit Salad', 'Scrambled Eggs', 'Pancakes', 'Smoothie','Chapati','Mix Vegetable','Mix Nuts','Fruit Juice'],
    'lunch': ['Salad', 'Sandwich', 'Soup', 'Pizza', 'Pasta','Rice','Curd','Tofu','Dal','Mix Vegetables'],
    'dinner': ['Grilled Chicken', 'Baked Salmon', 'Vegetable Stir Fry', 'Beef Stew', 'Spaghetti','Chapati','Dal','Plain Dosa','Tofu Bhurji']
};

const renderItems = (meal) => {
    const itemsList = document.querySelector(`#${meal}-items`);
    itemsList.innerHTML = '';
    itemsData[meal].forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.dataset.value = item.toLowerCase().replace(/\s/g, '-');
        itemsList.appendChild(li);
    });
}

const filterItems = (meal) => {
    const input = document.querySelector(`#${meal}-input`);
    const items = document.querySelectorAll(`#${meal}-items li`);

    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const addToMeal = (meal) => {
    const input = document.querySelector(`#${meal}-input`);
    const items = document.querySelectorAll(`#${meal}-items li:not(.selected)`);
    const chart = document.querySelector(`#${meal}-chart`);

    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(input.value.toLowerCase()) && item.style.display === 'block') {
            const li = document.createElement('li');
            li.textContent = item.textContent;
            li.dataset.value = item.dataset.value;
            chart.appendChild(li);
            item.classList.add('selected');
            input.value = '';
        }
    });
}

const submitDietPlan = (event) => {
    event.preventDefault();

    const breakfast = Array.from(breakfastChart.children).map((child) => child.dataset.value);
    const lunch = Array.from(lunchChart.children).map((child) => child.dataset.value);
    const dinner = Array.from(dinnerChart.children).map((child) => child.dataset.value);

    console.log(`Breakfast: ${breakfast}`);
    console.log(`Lunch: ${lunch}`);
    console.log(`Dinner: ${dinner}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', submitDietPlan);

renderItems('breakfast');
renderItems('lunch');
renderItems('dinner');