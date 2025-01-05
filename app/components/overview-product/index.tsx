import Button from "@/app/lib/design/common/button";
import { ImgContainer } from "@/app/lib/design/common/img-container";
import { Text } from "@/app/lib/design/common/text";
import { Title } from "@/app/lib/design/common/title";
import Image from "@/public/images/slider-img-1-min.png";
import { FiCheckCircle } from "react-icons/fi"; // آیکون برای نمایش ویژگی‌های مثبت

const OverviewProduct = () => {
  return (
    <div className="grid grid-cols-6 grid-row-6 gap-6 m-2 h-[650px]">
      <section className="row-span-6 col-span-2 bg-gradient-to-r from-gray-600 to-gray-400 p-8 flex flex-col justify-between items-center text-white rounded-lg shadow-lg hover:scale-105 transform duration-300 ease-in-out transition-all">
        <div className="text-center mb-4">
          <Title level={2} className="text-sm font-medium text-yellow-300">
            تلویزیون هوشمند
          </Title>
          <Title level={4} className="text-xl font-bold text-white">
            {" "}
            صفحه نمایش ۴K
          </Title>
        </div>
        <ImgContainer
          src={Image.src}
          classes="w-[220px] h-[220px] rounded-md shadow-xl mb-6"
        />
        <div className="text-center mb-6">
          <Text className="text-sm text-gray-200">
            تلویزیون هوشمند با صفحه نمایش ۴K برای تجربه‌ای بی‌نظیر از تماشای
            فیلم و برنامه‌های تلویزیونی. مجهز به فناوری‌های پیشرفته و قابلیت
            اتصال به اینترنت برای استفاده از خدمات استریمینگ.
          </Text>
        </div>
        <Button
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full transition hover:bg-yellow-600"
          type="button"
        >
          خرید
        </Button>
      </section>

      <section className="row-span-3 col-span-2 bg-gradient-to-r from-blue-500 to-blue-300 p-8 flex flex-col justify-between items-center text-white rounded-lg shadow-lg hover:scale-105 transform duration-300 ease-in-out transition-all">
        <div className="text-center mb-4">
          <Title level={4} className="text-sm font-medium text-yellow-300">
            یخچال فریزر
          </Title>
          <Title level={2} className="text-xl font-bold mt-2 text-white">
            مدل ۶۰۰ لیتری
          </Title>
        </div>
        <div className="text-center mb-6">
          <Text as="p" className="text-sm text-gray-200">
            یخچال فریزر با ظرفیت ۶۰۰ لیتری و طراحی مدرن، مناسب برای خانواده‌های
            بزرگ. مجهز به سیستم‌های سرمایشی پیشرفته برای حفظ تازگی مواد غذایی
            شما.
          </Text>
        </div>
        <div className="flex items-center mb-6 space-x-2 space-x-reverse">
          <FiCheckCircle className="text-green-500" />
          <Text as="span" className="text-sm text-gray-200">
            صرفه‌جویی در انرژی
          </Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full transition hover:bg-blue-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>

      <section className="row-span-6 col-span-2 bg-gradient-to-r from-yellow-500 to-yellow-300 p-8 flex flex-col justify-between items-center text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="text-center mb-4">
          <Title level={2} className="text-sm font-medium text-gray-700">
            جاروبرقی رباتیک
          </Title>
          <Title level={4} className="text-xl font-bold mt-2 text-white">
            با تکنولوژی پیشرفته
          </Title>
        </div>
        <ImgContainer
          src={Image.src}
          classes="w-[220px] h-[220px] rounded-md shadow-xl mb-6"
        />
        <div className="text-center mb-6">
          <Text className="text-sm text-gray-200">
            جاروبرقی رباتیک با توانایی پاکسازی هوشمند و تکنولوژی نقشه‌برداری
            پیشرفته. قادر به تمیز کردن تمامی سطوح و دسترسی به نقاط سخت.
          </Text>
        </div>
        <Button
          className="px-6 py-3 bg-white text-yellow-700 font-semibold rounded-full transition hover:bg-yellow-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>

      <section className="row-span-3 col-span-2 bg-gradient-to-r from-green-500 to-green-300 p-8 flex flex-col justify-between items-center text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="text-center mb-4">
          <Title level={4} className="text-sm font-medium text-gray-700">
            ماشین لباسشویی
          </Title>
          <Title level={2} className="text-xl font-bold mt-2 text-white">
            ظرفیت ۱۰ کیلوگرم
          </Title>
        </div>
        <div className="text-center mb-6">
          <Text as="p" className="text-sm text-gray-200">
            ماشین لباسشویی با ظرفیت ۱۰ کیلوگرم، طراحی بهینه برای شست‌وشوی سریع و
            موثر لباس‌ها. مجهز به فناوری‌های مصرف بهینه آب و انرژی.
          </Text>
        </div>
        <div className="flex items-center mb-6 space-x-2 space-x-reverse">
          <FiCheckCircle className="text-green-500" />
          <span className="text-sm text-gray-200">شست‌وشو سریع</span>
        </div>
        <Button
          className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full transition hover:bg-green-600 hover:text-white"
          type="button"
        >
          خرید
        </Button>
      </section>
    </div>
  );
};

export default OverviewProduct;
