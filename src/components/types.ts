export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

export interface SearchResults {
  images: Image[];
  total: number;
}

export interface ModalParams {
  isOpen: boolean;
  url: string;
  alt: string;
}
