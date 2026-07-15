/*
Exercițiu

Scrie cod complet.

Cerință:

Creează funcția getProducts.
Fă fetch către:
https://dummyjson.com/products
Verifică response.ok.
Transformă răspunsul cu await response.json().
Returnează data.products.

Apoi creează funcția:

showExpensiveProducts

În ea:

Folosește try / catch.
Ia produsele cu await getProducts().
Păstrează doar produsele cu price > 100.
Ia doar primele 5.
Creează mesaje cu map.

Mesajul:

iPhone 9 costa 549$ si are rating 4.69.

Datele sunt:

title
price
rating

Obligatoriu:

fetch
await
response.ok
filter
slice
map
destructuring
try / catch

Trimite codul complet.
*/ 

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');   
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.products;
};

const showExpensiveProducts = async () => {
  try {
    const products = await getProducts();
    const expensiveProducts = products
      .filter(product => product.price > 100)
      .slice(0, 5);
    const messages = expensiveProducts.map(({ title, price, rating }) => `${title} costa ${price}$ si are rating ${rating}.`);
    console.log(messages);
  } catch (error) {
    console.error('A apărut o eroare:', error);
  }
};
