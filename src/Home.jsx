import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id='homeContainer'>
            <header>
                <img src='/webflix.png' alt='Webflix logo light blue' width={"200px"} height={"100%"} style={{margin: "10px 0px 0px 15px"}}/>
                <Link to="/signin">Sign In</Link>
            </header>
            <section id='plans'>
                <h1>PLANS</h1>
                <p>$100/month scroll effectt</p>
                <button>Sign Up</button>
            </section>
            <h1>POPULAR 10 year $12,000 Plan</h1>
            <section>
                <img />
                <h1>Watch on your fridge</h1>
            </section>
            <section>
                <img />
                <h1>Or click back on watch on your toaster</h1>
            </section>
            <div>
                <h1>Q+A DROP DOWN</h1>
            </div>
            <footer>
                <div>
                    <p>Questions? Call 1-123-456-789</p>
                    <section>
                        <div>
                            <a>FAQ</a>
                            <a>Help Center</a>
                            <a>Webflix Shop</a>
                        </div>
                        <div>
                            <a>Terms of Use</a>
                            <a>Privacy</a>
                            <a>Cookie Preferences</a>
                        </div>
                        <div>
                            <a>Corporate Information</a>
                            <a>Do Not Sell or Share My Personal Informatoin</a>
                            <a>Ad Choices</a>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
  }

export default Home