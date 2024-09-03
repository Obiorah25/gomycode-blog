import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero.jpeg";
import classes from "./Home.module.css";
const Hero = () => {
  return (
    <section className={`container $ {classes.hero_container}`}>
      <div className="row">
        <div className={`col-md-6 ${classes.image_div}`}>
          <img 
          src={heroImage} 
          alt="hero_Image"
          className={classes.hero_image} />
        </div>
        <div className="col-md-6">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            optio dignissimos consequatur, recusandae aliquam odit accusamus
            quos dolores deserunt quis! Sapiente ea corporis laborum ipsa
            nesciunt voluptatem autem molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            optio dignissimos consequatur, recusandae aliquam odit accusamus
            quos dolores deserunt quis! Sapiente ea corporis laborum ipsa
            nesciunt voluptatem autem molestiae.
          </p>
          <div>
            <Link className="btn-secondary" to="/about">
            READ MORE... </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
