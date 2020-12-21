export interface IImage {
  downloadUrl: string;
  fileName: string;
  path: string;
  size: number;
}
export interface IProduct {
  name: string;
  price: number;
  photos?: string[];
  description?: string;
  disabled?: boolean;
  size: number;
  material: string;
  type: string;
}
