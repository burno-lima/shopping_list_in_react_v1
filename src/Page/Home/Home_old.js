import React, { useState } from "react";

export default function Home_old() {
    const [items, setItems] = useState([
        { name: "Apples", quantity: 0, price: 1.99 },
        { name: "Oranges", quantity: 0, price: 1.49 },
        { name: "Bananas", quantity: 0, price: 0.99 }
    ]);
    const [newItem, setNewItem] = useState({ name: "", quantity: 0, price: 0 });

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem({ name: "", quantity: 0, price: 0 });
    };

    const deleteItem = (name) => {
        setItems(items.filter((item) => item.name !== name));
    };

    const handleChange = (event, index) => {
        const updatedItems = [...items];
        updatedItems[index][event.target.name] = event.target.value;
        setItems(updatedItems);
    };

    let totalPrice = 0;

    items.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    return (
        <>
            <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <button onClick={addItem}>Add Item</button>
            <table>
                <tr>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Preço Total</th>
                </tr>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={item.name}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="price"
                                value={item.price}
                                onChange={(e) => handleChange(e, index)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                name="price"
                                value={item.quantity * item.price}
                            />
                        </td>
                        <button onClick={() => deleteItem(item.name)} >
                            Delete
                        </button>
                    </tr>

                ))}
            </table>
            <hr></hr>
            <div>Valor Final: ${Math.round(totalPrice)}</div>
        </>
    );
}