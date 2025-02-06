import React, { useState, useEffect } from 'react';

const JavaScriptDemo = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [newItem, setNewItem] = useState('');
  const [result, setResult] = useState('');

  // ES6 Features Demo
  const demoArrowFunction = () => {
    console.log('Arrow Function Demo');
    const numbers = [1, 2, 3, 4, 5];
    
    // Template Literals
    setResult(`Working with array: ${numbers.join(', ')}`);
  };

  // Array Methods Demo
  const demoArrayMethods = () => {
    const numbers = [1, 2, 3, 4, 5];
    
    // Map
    const doubled = numbers.map(num => num * 2);
    
    // Filter
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Reduce
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    
    setResult(`
      Original: ${numbers.join(', ')}
      Doubled: ${doubled.join(', ')}
      Even Numbers: ${evenNumbers.join(', ')}
      Sum: ${sum}
    `);
  };

  // DOM Manipulation
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  // Destructuring Demo
  const demoDestructuring = () => {
    const person = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    
    // Object Destructuring
    const { name, age } = person;
    
    // Array Destructuring
    const colors = ['red', 'green', 'blue'];
    const [firstColor, secondColor] = colors;
    
    setResult(`
      Person: ${name}, ${age}
      Colors: ${firstColor}, ${secondColor}
    `);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">JavaScript Features Demo</h1>
      
      {/* DOM Manipulation Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">DOM Manipulation</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
            placeholder="Add new item"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 rounded"
            >
              {item}
              <button
                onClick={() => handleRemoveItem(index)}
                className="px-2 py-1 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Array Methods Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Array Methods & ES6 Features</h2>
        <div className="space-x-4">
          <button
            onClick={demoArrayMethods}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Demo Array Methods
          </button>
          <button
            onClick={demoArrowFunction}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Demo Arrow Function
          </button>
          <button
            onClick={demoDestructuring}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Demo Destructuring
          </button>
        </div>
        {result && (
          <pre className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </section>

      {/* ES6 Features List */}
      <section className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">ES6 Features Demonstrated</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Arrow Functions</li>
          <li>Template Literals</li>
          <li>Destructuring</li>
          <li>Spread Operator</li>
          <li>const/let declarations</li>
          <li>Array Methods (map, filter, reduce)</li>
        </ul>
      </section>
    </div>
  );
};

export default JavaScriptDemo;