import cors from "cors";
import express from "express";
import type { HealthResponse, Product } from "@antique9ja/shared";

const sampleProducts: Product[] = [
  {
    id: "prod-brass-lamp",
    name: "Vintage Brass Table Lamp",
    description: "A restored brass lamp with warm patina and hand-carved detailing.",
    price: 45000,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    category: "Lighting",
    isFeatured: true
  },
  {
    id: "prod-yoruba-stool",
    name: "Carved Yoruba Stool",
    description: "A decorative wooden stool inspired by traditional Yoruba craftsmanship.",
    price: 70000,
    imageUrl: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=900&q=80",
    category: "Furniture",
    isFeatured: true
  },
  {
    id: "prod-record-player",
    name: "Classic Record Player",
    description: "A compact record player for collectors who enjoy analog sound.",
    price: 120000,
    imageUrl: "https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?auto=format&fit=crop&w=900&q=80",
    category: "Audio",
    isFeatured: false
  }
];

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.WEB_ORIGIN ?? "http://localhost:5173"
    })
  );
  app.use(express.json());

  app.get("/health", (_request, response) => {
    const payload: HealthResponse = {
      status: "ok",
      app: "antique9ja",
      message: "Antique9ja API is running"
    };

    response.json(payload);
  });

  app.get("/api/products", (_request, response) => {
    response.json({ products: sampleProducts });
  });

  app.get("/api/products/:id", (request, response) => {
    const product = sampleProducts.find((item) => item.id === request.params.id);

    if (!product) {
      response.status(404).json({ message: "Product not found" });
      return;
    }

    response.json({ product });
  });

  return app;
}
