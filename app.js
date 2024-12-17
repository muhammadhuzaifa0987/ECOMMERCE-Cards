let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
  ];

  const cardContainer = document.getElementById('card-container');
  const totalPriceElement = document.getElementById('total-price');

  // Function to render cards
  function renderCards() {
    // Clear container
    cardContainer.innerHTML = '';

    // Render each card
    products.map((product) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="delete-btn" data-id="${product.id}">Delete</button>
      `;
      cardContainer.appendChild(card);
    });

    // Update total price
    updateTotalPrice();

    // Add delete functionality
    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        deleteCard(id);
      });
    });
  }

  // Function to delete a card
  function deleteCard(id) {
    // Use filter to remove the product with the matching id
    products = products.filter((product) => product.id !== id);
    renderCards(); // Re-render cards
  }

  // Function to calculate total price
  function updateTotalPrice() {
    // Use reduce to calculate total price
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    totalPriceElement.innerText = `Total Price: $${totalPrice}`;
  }

  // Initial render
  renderCards();