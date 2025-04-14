import { Title } from "@/app/lib/design/common/title";

const PurchaseBenefits = () => {
  return (
    <div className="mt-10 p-6  bg-gray-100 rounded-md border border-gray-300 shadow-md w-full">
      <Title level={1} className="text-large font-bold text-gray-300 mb-3">
        چرا از ما خرید کنید؟
      </Title>
      <ul className="flex flex-col gap-2 pl-5 text-sm text-gray-600 list-disc ">
        <li>۷ روز ضمانت بازگشت کالا</li>
        <li>ارسال سریع به تمام نقاط کشور</li>
        <li>پرداخت امن و آسان</li>
        <li>پشتیبانی ۲۴ ساعته در ۷ روز هفته</li>
      </ul>
    </div>
  );
};
export default PurchaseBenefits;
