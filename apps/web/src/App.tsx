import { useEffect, useState } from "react";
import type { HealthResponse, Product } from "@antique9ja/shared";

const apiBaseUrl = "http://localhost:4000";

export function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadInitialData() {
      const [healthResponse, productsResponse] = await Promise.all([
        fetch(`${apiBaseUrl}/health`),
        fetch(`${apiBaseUrl}/api/products`)
      ]);

      const healthData = (await healthResponse.json()) as HealthResponse;
      const productsData = (await productsResponse.json()) as { products: Product[] };

      setHealth(healthData);
      setProducts(productsData.products);
    }

    loadInitialData().catch((error) => {
      console.error("Failed to load Antique9ja data", error);
    });
  }, []);

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Antique9ja</p>
          <h1>Curated antique finds with a real full-stack foundation.</h1>
          <p className="hero-copy">
            This first milestone connects React to an Express API. Next we will replace the sample
            products with PostgreSQL and Prisma.
          </p>
        </div>
        <div className="status-panel">
          <span>API status</span>
          <strong>{health?.message ?? "Checking API..."}</strong>
        </div>
      </section>

      <section className="product-grid" aria-label="Featured products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>
              <p>{product.category}</p>
              <h2>{product.name}</h2>
              <span>{new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(product.price)}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
