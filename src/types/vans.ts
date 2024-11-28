export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: VanType
}

export type VanType = "Simple" | "Rugged" | "Luxury";
export interface FetchError {
  message: string;
  statusText: string;
  status: number;
  name: string;
}