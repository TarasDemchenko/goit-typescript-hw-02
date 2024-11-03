import axios from "axios";
import { Image } from "../types";


export const fetchImage = async (page:number, query:string):Promise<Image[]> => {
  const pageNumber = page === 0 ? 1 : page;
  const { data } = await axios.get<Image[]>(
    `https://api.unsplash.com/photos/random?query=${query}&count=12&client_id=cf5iq-jJ6yM89Z5DDBTaZ0Ii47Yz9A20NtZiGiEVnKs&page=${pageNumber}&orientation=landscape`
  );
  return data;
};

export const fetchImageLarge = async (imageId: string):Promise<string> => {
  const { data } = await axios.get <{
    urls: { regular: string }
  }>(
    `https://api.unsplash.com/photos/${imageId}?client_id=cf5iq-jJ6yM89Z5DDBTaZ0Ii47Yz9A20NtZiGiEVnKs`
  );
  return data.urls.regular;
};
