export default function ProductCard({ product, onDelete }) {
    return (
        <div style={{ border: "1px solid #d41616", padding: "10px", margin: "10px" }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
    );
}