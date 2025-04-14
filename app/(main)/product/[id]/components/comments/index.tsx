import SectionTitle from "@/app/lib/design/common/section-title";
import CommentList from "./display/commet-list";

const Comments = () => {
  return (
    <div className="felx flex-col gap-4">
      <SectionTitle title="نظرات کاربران" />
      <CommentList />
    </div>
  );
};
export default Comments;
