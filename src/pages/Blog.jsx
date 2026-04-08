
import { Link } from "react-router-dom";

const blogs = [
  {id:1, title:"صحافت کا مستقبل"},
  {id:2, title:"کشمیر رپورٹ"}
];

const Blog = () => (
  <div className="container">
    <h2>بلاگ</h2>
    {blogs.map(b=>(
      <div key={b.id} className="card">
        <h3>{b.title}</h3>
        <Link to={`/blog/${b.id}`}>پڑھیں</Link>
      </div>
    ))}
  </div>
);
export default Blog;
