import { Button, Textarea } from "@nextui-org/react";
import { FC } from "react";

interface Iprops {
  isActiveReply: boolean;
}
const SubmitReplyComment: FC<Iprops> = ({ isActiveReply }) => {
  return (
    <>
      {isActiveReply && (
        <div className="flex flex-col gap-4 mt-4 bg-gray-50 p-6 rounded-lg shadow-lg border border-blue-600">
          <Textarea placeholder="پاسخ خود را بنویسید" />
          <Button className="w-fit bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg transition duration-300 ease-in-out rounded-xl hover:bg-gradient-to-l hover:from-red-500 hover:to-orange-400">
            ارسال پاسخ
          </Button>
        </div>
      )}
    </>
  );
};

export default SubmitReplyComment;
