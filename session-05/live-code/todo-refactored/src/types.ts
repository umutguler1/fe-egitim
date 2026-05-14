// Birden fazla component aynı tipe ihtiyaç duyduğu için
// tek bir yerde tanımlıyoruz. Bu sayede tip değişirse
// sadece burayı düzeltmemiz yeterli olur.

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
