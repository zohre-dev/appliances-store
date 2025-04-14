"use client";

import { useGetProductById } from "@/app/lib/hooks/product";
import { useParams } from "next/navigation";
import TechnicalSpecificationList from "./technical-specification-list";
import { useState } from "react";

const TechnicalList = () => {
  // !! Get Product By Id Params
  const param = useParams();
  const id = param.id;
  const { data } = useGetProductById({ id: String(id) });
  const product = data?.data.product;

  // !! State
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white p-6 rounded-lg ">
      {product && (
        <TechnicalSpecificationList
          sepecifications={product.technicalSpecifications}
          showMore={showMore}
          onToggleShowMore={() => setShowMore((prev) => !prev)}
        />
      )}
    </section>
  );
};
export default TechnicalList;
