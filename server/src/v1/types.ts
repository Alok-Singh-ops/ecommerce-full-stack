export interface JWT_USER {
  userId: string;
  email: string;
  createdAt: Date;
}

export interface Product {
  title: string;
  description?: string;
  price: number;
  imgUrl?: string;
}
