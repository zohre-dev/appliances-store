import SectionTitle from "@/app/lib/design/common/section-title";
import CommentCard from "./comment-card";

const UserComments = () => {
  return (
    <div className="flex flex-col mt-4 gap-2">
      <SectionTitle title="نظرات کاربران" />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        <CommentCard
          name="علیرضا"
          description="  من از خرید این محصولات بسیار راضی هستم، کاملاً مطابق توضیحات است."
        />
        <CommentCard
          name="محمد"
          description="  من از خرید این محصولات بسیار راضی هستم، کاملاً مطابق توضیحات است."
        />
        <CommentCard
          name="سامان"
          description="  من از خرید این محصولات بسیار راضی هستم، کاملاً مطابق توضیحات است."
        />
      </div>
    </div>
  );
};
export default UserComments;
