const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemIngredients = document.querySelector("#ingredients");

const listsEl = [];

ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = `${ingredient}`;
  listEl.classList.add("item");
  return listsEl.push(listEl);
});

itemIngredients.append(...listsEl);
