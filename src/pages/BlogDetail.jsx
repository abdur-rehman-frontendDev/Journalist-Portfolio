
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const {id} = useParams();
  return (
    <div className="container">
      <h1>آرٹیکل {id}</h1>
      <p>تفصیل یہاں آئے گی...</p>
    </div>
  );
};
export default BlogDetail;
