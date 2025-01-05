import Image1 from "@/public/images/main-ico.png";
import Image2 from "@/public/images/main-ico-2.png";
import Image3 from "@/public/images/main-ico-3.png";
import { Card } from "./card";

export const ServiceFeatures = () => {
  return (
    <div className="w-sull p-6 bg-gray-200 rounded mt-3 flex flex-col justify-evenly gap-4 sm:flex-row">
      <Card
        src={Image1.src}
        title="تخفیفات واقعی"
        subtitle="تا 60% تخفیف روزانه"
      />
      <Card
        src={Image2.src}
        title="پشتیبانی کامل"
        subtitle="پشتیبانی آنلاین 24/7"
      />
      <Card
        src={Image3.src}
        title="ارسال رایگان"
        subtitle="ارسال به کل کشور"
        hasBorder={false}
      />
    </div>
  );
};
