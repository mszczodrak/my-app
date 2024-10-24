
import Specials from "./Specials";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import About from "./About";
import Header from "./Header";


function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <Header />
            <Specials />
            <Dishes />
            <Testimonials />
            <About />
        </>
    );
}

export default HomePage;