export default function Nav(){
    return (
        <nav>
            <div className="logo">
                <img src="../images/logo.png" width={70} height={70} alt="logo" />
            </div>
            <ul>
                <a href="#">Menu</a>
                <a href="#">Location</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </ul>
            <button className="Login">Login</button>
        </nav>
    );
}