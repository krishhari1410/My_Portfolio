import "./Hero.css";
import profile from "./mine.png"
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h3>Hello, I'm</h3>
        <h1>Hari Krishnan S</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Passionate full stack developer and technical trainer.
        </p>

        <button>View Projects</button>
      </div>

      <div className="hero-right">
        <img
          src={profile}
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Hero;