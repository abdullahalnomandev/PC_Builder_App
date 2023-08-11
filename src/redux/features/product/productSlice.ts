import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import storageDevice from "@/assets/images/device.jpg";

interface IList {
  totalPrice: number;
  length: number;
  features: {
    title: string;
    price: number;
    category: string;
    name: string;
    image: string ;
    route: string;
  }[];
}

const initialState: IList = {
  totalPrice: 0,
  length: 0,
  features: [
    {
      title: "Processor",
      price: 0,
      name: "",
      category: "cpu",
      image:
        "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cooler-48x48.webp",
      route: "cpu"
    },
    {
      title: "Motherboard",
      price: 0,
      name: "",
      category: "motherboard",
      image:
        "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/motherboard-48x48.webp",
      route: "motherboard"
    },
    {
      title: "ram",
      price: 0,
      name: "",
      category: "ram",
      image:
        "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ram-48x48.webp",
      route: "ram"
    },
    {
      title: "Power Supply",
      price: 0,
      name: "",
      category: "power-supply",
      image:
        "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp",
      route: "power-supply"
    },
    {
      title: "Storage Device",
      price: 0,
      name: "",
      image: String(storageDevice),
      category: "storage-device",
      route: "storage-device"
    },
    {
      title: "Monitor",
      price: 0,
      name: "",
      category: "monitor",
      image:
        "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp",
      route: "monitor"
    }
  ]
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToProductList: (state, { payload }) => {
      const { name, image, price } = payload;
      const getProduct = state.features.find(({ category }) => category === payload.category );
      state.features = state.features.filter(({ category }) => category !== getProduct?.category);
      state.features.unshift({
        title: getProduct?.title!,
        name,
        price,
        category: getProduct?.category!,
        route: getProduct?.route!,
        image
      });
      state.totalPrice += Number(price.split("$")[1]);
      state.length += 1;
    }
  }
});

export const { addToProductList } = productSlice.actions;
export default productSlice.reducer;
