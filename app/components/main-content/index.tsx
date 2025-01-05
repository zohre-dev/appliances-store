import { Banner } from "./banner";
import { CategorySideBar } from "./category-sidebar";
import { ProductCard } from "./product-card";
import { ServiceFeatures } from "./services-features";

export const MainContent = () => {
  return (
    <section className="" style={{ border: "5px solid black" }}>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-2">
        <CategorySideBar />
        <div className="flex flex-col col-span-3">
          <Banner />
          <ServiceFeatures />
        </div>
        <ProductCard />
      </div>
    </section>
  );
};
