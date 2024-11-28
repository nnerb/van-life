export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: "Simple" | "Rugged" | "Luxury";
}

export interface FetchError {
  message: string;
  statusText: string;
  status: number;
  name: string;
}