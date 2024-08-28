import { IconBookmark, IconShoppingCart } from "@tabler/icons-react";
import { useState } from "react";
import ItemProduct from "./ItemProduct";

const product_list = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuw8_nYFLRAUgyGXoXN6kiXpr2Y6Dw89dVKw&s",
    title: "Wow Spageti Carbonara",
    price: 3000,
  },
  {
    id: 2,
    image:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/7/12/889dfd13-8088-4205-b549-17f7d2b27bc9.jpg",
    title: "Wow Spageti Bolognese",
    price: 3000,
  },
  {
    id: 3,
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-87933714/golda_golda_kopi_cappucino_200_ml_full01_golp7kr4.jpg",
    title: "Golda Cappucino",
    price: 3500,
  },
  {
    id: 4,
    image:
      "https://cdn1-production-images-kly.akamaized.net/KvlLVMnrraUQWZOiLkERsKz7qww=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3320398/original/017529400_1607584571-800px-Tahu_Bulat.jpg",
    title: "Tahu Bulat",
    price: 3000,
  },
];

function ListProduct() {
  const [itemCount, setItemCount] = useState(10);
  const [savedCount, setSavedCount] = useState(0);

  const handleChangeSavedCount = (number) => {
    setSavedCount(savedCount + number);
  };

  return (
    <section>
      <div className="container shadow-sm p-4 my-4 rounded-2">
        <div className="d-flex justify-content-between">
          <h2 className="my-2">List Product Turing Shop</h2>
          <div className="d-flex justify-content-end column-gap-2">
            <p className="text-end my-2">
              <IconBookmark />
              <span className="badge text-bg-secondary rounded-pill">
                {savedCount}
              </span>
            </p>
            <p className="text-end my-2">
              <IconShoppingCart />
              <span className="badge text-bg-secondary rounded-pill">
                {itemCount}
              </span>
            </p>
          </div>
        </div>
        <div className="row row-cols-lg-4 row-cols-1 g-4">
          {/* Product */}
          {product_list.map((item) => {
            return (
              <div className="col" key={item.id}>
                <ItemProduct
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  changeSavedCount={handleChangeSavedCount}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ListProduct;
