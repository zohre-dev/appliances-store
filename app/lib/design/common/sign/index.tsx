import { LinkContainer } from "../link-container";
import * as Icons from "react-icons/md";
import { Text } from "../text";
import { SignInSquareIcon } from "@/app/lib/design/common/icons";

export const Sign = () => {
  return (
    <LinkContainer>
      {/* <section className="flex items-center gap-2">
        <Icons.MdPerson size={30} />
        <Text as="span" className="text-white">
          ورود / ثبت نام
        </Text>
      </section> */}

      <section className="flex items-center gap-2">
        <SignInSquareIcon />
        <Text as="span" className="text-white">
          ورود / ثبت نام
        </Text>
      </section>
    </LinkContainer>
  );
};
