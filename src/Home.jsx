import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id='homeContainer'>
            <header>
                <img src='/webflix.png' alt='Webflix logo light blue' width={"200px"} height={"100%"} style={{margin: "10px 0px 0px 15px"}}/>
                <button>
                    <Link to="/signin" 
                        style={{
                            textDecoration: "none", 
                            color: "white"
                        }}>
                        Sign In
                    </Link>
                </button>
            </header>
            <section id='signUpHome'>
                <div>
                    <h1>Unlimted moives, shows, and more</h1>
                    <p style={{fontSize: "25px"}}>Watch anywhere. Cancel Never.</p>
                    <p style={{fontSize: "19px"}}>Ready to join? Click below!</p>
                    <button style={{
                        color: "white",
                        backgroundColor: "#399afb",
                        width: "300px",
                        padding: "10px 15px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "19px",
                    }}>Sign Up</button>
                </div>
            </section>
            <h1 id="ad" style={{marginTop: "0px"}}> 🔥SALE! Sign up for 10 years today get $5,000 off!🔥</h1>
            <section className='watchDevices'>
                <div>
                    <h1>Watch on your fridge</h1>
                    <p>With our industry leading smart fridge app you can watch your favorite content while you peruse your fridge</p>
                </div>
                <img src='/smartFridge-backgroundremove.png' alt='Gray smart fridge with screen' width={"20%"} />
            </section>
            <section className='watchDevices'>
                <img src='/toaster-removedback.png' alt='Gray smart toaster with screen and toast in it' width={"20%"} />
                <div>
                    <h1>Or Watch On Your Toaster</h1>
                    <p>A greaterly anticipated feature, you can now watch Webflix on your toaster! Sit back relax enjoy your waffles and let the movie magic take you away!</p>
                </div>
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