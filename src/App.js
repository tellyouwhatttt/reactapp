import logo from "../src/images/logo.svg";
import mockup from "../src/images/illustration-mockups.svg"
import './App.css';

function App() {

  return (
    <>

      <header>
        <img src={logo} alt="logo"/>
      </header>

      <main>

        <img src={mockup} alt="page mockup"/>

        <div className="content">
          <h2>Build The Community Your Fans Will Love</h2>
          <p> Huddle re-imagines the way we build communties. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion</p>

          <button>Register</button>
        </div>

      </main>

      <footer>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </footer>

    </>
  );
}

export default App;
