export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface SignUpFormPayload {
  email: string;
  password: string;
}