export type HealthResponse = {
  status: "ok";
  app: "antique9ja";
  message: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
};
