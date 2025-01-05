import Card from "./card";
import { items } from "./cardItems";

const ProductCard = () => {
  return (
    <section className="flex mt-5">
      {items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </section>
  );
};
export default ProductCard;
