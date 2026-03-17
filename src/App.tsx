import { useState } from 'react'
import './App.css'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image?: string
  ingredients?: string[]
  allergens?: string[]
  calories?: number
  preparationTime?: string
}

const menuData: MenuItem[] = [
  // Drinks
  {
    id: 1, name: 'Espresso', description: 'Rich and bold shot of coffee', price: 3.50, category: 'Drinks',
    ingredients: ['Coffee Beans', 'Water'], calories: 5, preparationTime: '2 mins',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 4.50, category: 'Drinks',
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam'], allergens: ['Milk'], calories: 120, preparationTime: '4 mins',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3, name: 'Latte', description: 'Smooth espresso with steamed milk', price: 4.75, category: 'Drinks',
    ingredients: ['Espresso', 'Steamed Milk'], allergens: ['Milk'], calories: 150, preparationTime: '3 mins',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4, name: 'Green Tea', description: 'Fresh and light green tea', price: 3.00, category: 'Drinks',
    ingredients: ['Green Tea Leaves', 'Hot Water'], calories: 0, preparationTime: '3 mins',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800'
  },

  // Food
  {
    id: 5, name: 'Croissant', description: 'Buttery and flaky French pastry', price: 4.00, category: 'Food',
    ingredients: ['Flour', 'Butter', 'Yeast', 'Sugar', 'Salt'], allergens: ['Wheat', 'Milk'], calories: 350, preparationTime: 'Ready',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6, name: 'Blueberry Muffin', description: 'Fresh baked with real blueberries', price: 3.50, category: 'Food',
    ingredients: ['Flour', 'Blueberries', 'Sugar', 'Eggs', 'Butter'], allergens: ['Wheat', 'Eggs', 'Milk'], calories: 420, preparationTime: 'Ready',
    image: 'https://images.unsplash.com/photo-1525450824786-227bcbfafc26?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7, name: 'Turkey & Avocado Sandwich', description: 'Fresh turkey with avocado on whole grain', price: 8.50, category: 'Food',
    ingredients: ['Whole Grain Bread', 'Roast Turkey', 'Avocado', 'Lettuce', 'Tomato', 'Mayo'], allergens: ['Wheat', 'Eggs'], calories: 550, preparationTime: '5 mins',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8, name: 'Caprese Sandwich', description: 'Mozzarella, tomato, and basil', price: 7.75, category: 'Food',
    ingredients: ['Ciabatta Bread', 'Fresh Mozzarella', 'Tomatoes', 'Fresh Basil', 'Balsamic Glaze'], allergens: ['Wheat', 'Milk'], calories: 480, preparationTime: '4 mins',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800'
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const categories = ['All', 'Drinks', 'Food']

  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category === selectedCategory)

  return (
    <div className="app-container">
      <header>
        <h1 className="cafe-logo">☕ Cafe Menu</h1>
        <p className="tagline">Scan, Browse, Enjoy</p>
      </header>

      <nav className="category-nav">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <main className="menu-grid">
        {filteredMenu.map(item => (
          <div key={item.id} className="menu-card" onClick={() => setSelectedItem(item)}>
            {item.image && <img src={item.image} alt={item.name} className="item-image" />}
            <div className="item-info">
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>
              <p className="item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="menu-footer" style={{ textAlign: 'center', marginTop: '3rem', color: '#666' }}>
        <p>🕐 Open Daily: 7:00 AM - 8:00 PM</p>
        <p>📍 123 Coffee Street</p>
      </footer>

      {/* Modal for Item Details */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>&times;</button>

            {selectedItem.image && (
              <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
            )}

            <div className="modal-header">
              <h2 className="modal-title">{selectedItem.name}</h2>
              <div className="modal-price">${selectedItem.price.toFixed(2)}</div>
            </div>

            <p className="modal-description">{selectedItem.description}</p>

            <div className="modal-details">
              {selectedItem.category && (
                <div className="detail-row">
                  <span className="detail-label">Category</span>
                  <span className="detail-value">{selectedItem.category}</span>
                </div>
              )}
              {selectedItem.ingredients && (
                <div className="detail-row">
                  <span className="detail-label">Ingredients</span>
                  <span className="detail-value">{selectedItem.ingredients.join(', ')}</span>
                </div>
              )}
              {selectedItem.allergens && (
                <div className="detail-row">
                  <span className="detail-label">Allergens</span>
                  <span className="detail-value">{selectedItem.allergens.join(', ')}</span>
                </div>
              )}
              {selectedItem.calories && (
                <div className="detail-row">
                  <span className="detail-label">Calories</span>
                  <span className="detail-value">{selectedItem.calories} kcal</span>
                </div>
              )}
              {selectedItem.preparationTime && (
                <div className="detail-row">
                  <span className="detail-label">Prep Time</span>
                  <span className="detail-value">{selectedItem.preparationTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
