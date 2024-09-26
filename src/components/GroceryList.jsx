/* eslint-disable react/prop-types */
export default function GroceryList({ data }) {
  return (
    <>
      <div className="list">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.quantity} {item.name}
              </span>
              <button>&times;</button>
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
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}
