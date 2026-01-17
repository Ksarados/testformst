export type Onboarding = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

export type Product = {
  name: string;
  price: number;
  fullPrice?: number;
  icon: React.ReactNode;
};

export type Service = {
  id: number;
  name: string;
};
