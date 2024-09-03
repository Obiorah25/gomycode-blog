import { useEffect } from "react";
import { useGetAllBlogsMutation } from "../../lib/blogsApi/blogsApi";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  // initialize rtk query hook
  const [getAllBlogs, response] = useGetAllBlogsMutation();
  useEffect(() => {
    getAllBlogs();
  }, []);
  console.log(response.error);
  console.log(response.error);

  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <BlogCard />
      </div>
    </section>
  );
};
export default AllBlogs;
