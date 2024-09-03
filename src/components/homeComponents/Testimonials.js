import classes from "./Home.module.css";
const Testimonials = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <img
            className={classes.test_image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz68b1g8MSxSUqvFtuo44MvagkdFGoG7Z7DQ&s"
          />
          <h3>Testimonials</h3>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            optio dignissimos consequatur, recusandae aliquam odit accusamus
            quos dolores deserunt quis! Sapiente ea corporis laborum ipsa
            nesciunt voluptatem autem molestiae.
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </section>
  );
};
export default Testimonials;
