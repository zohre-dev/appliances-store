import SectionTitle from "@/app/lib/design/common/section-title";
import TechnicalList from "./technical-list";

const TechnicalSpecifications = () => {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="مشخصات فنی محصول" />
      <TechnicalList />
    </section>
  );
};
export default TechnicalSpecifications;
