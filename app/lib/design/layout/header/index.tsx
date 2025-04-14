import Button from "../../common/button";
import { Cart } from "../../common/cart";
import { LinkContainer } from "../../common/link-container";
import { Search } from "../../common/search";
import { Sign } from "../../common/sign";
import { Title } from "../../common/title";

import { items } from "./menuItems";
import SearchBar from "./searchbar";

const Header = () => {
  return (
    <header className="w-full p-6 z-20 bg-gray-900 text-white flex flex-col gap-10">
      {/* <section className="flex items-center justify-around">
        <section className="flex justify-between gap-10">
          <Button isOutline className="px-6 py-4 border-teal-400">
            سایت لوازم خانگی
          </Button>
          <div className="flex gap-6">
            {headerMenuItems.map((item, index) => (
              <LinkContainer href={item.href} key={index}>
                {item.title}
              </LinkContainer>
            ))}
          </div>
        </section>
        <section className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Text as="span" className="text-white">
              Info@example.com
            </Text>
            <Icons.MdOutlineEmail />
          </div>
          <span className="w-[1px] h-7 bg-white"></span>
          <div className="flex items-center gap-2">
            <Text className="text-white" as="span">
              021 2522441
            </Text>
            <Icons.MdPhone />
          </div>
        </section>
      </section>
      <section className="flex items-center justify-evenly">
        <Title className="text-white" level={1}>
          سایت آماده فروشگاه لوازم خانگی
        </Title>
        <Search className="w-[500px]" />
        <div className="flex items-center gap-4">
          <Sign />
          <span className="w-[1px] h-7 bg-white"></span>
          <Cart />
        </div>
      </section> */}
      <section className="flex items-center gap-4 justify-around border border-white">
        <div className="flex items-center gap-4 bg-green-400">
          <Sign />
          <span className="w-[1px] h-7 bg-white"></span>
          <Cart />
        </div>
        <section className="flex items-center bg-yellow-500">
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <LinkContainer href={item.href} key={index}>
                {item.title}
              </LinkContainer>
            ))}
          </div>
        </section>
        <SearchBar />
        <Title className="text-white" level={3}>
          سایت آماده فروشگاه لوازم خانگی
        </Title>
      </section>
    </header>
  );
};

export default Header;
