/* eslint-disable react/prop-types */
export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleItem(item.id)}
              />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.quantity} {item.name}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
