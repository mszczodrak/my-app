
function Nav() {
    return (
        <nav>
            <ul>
                <li><img src="/Logo.svg" alt="Logo" /></li>
                <li><a href="/" role="button">Homepage</a></li>
                <li><a href="/#about" role="button">About Us</a></li>
                <li><a href="/menu" role="button">Menu</a></li>
                <li><a href="/booking" role="button">Reservations</a></li>
                <li><a href="/order" role="button">Order Online</a></li>
                <li><a href="/login" role="button">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;