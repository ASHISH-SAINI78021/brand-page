export default function HeroSection(){
    return (
        <div className="main-page">
        <main className="hero">
            <div className="hero-content">
                <h1>Your feet deserve the best</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim magnam itaque in sit molestiae accusamus et similique reiciendis, animi quisquam quos repellat facilis recusandae sapiente dolor dignissimos quasi officia temporibus deleniti ipsa ut quas!</p>
            </div>
            <div className="hero-btn">
                <button className="Login">Shop now</button>
                <button className="category">Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icons">
                    <img src="https://media.licdn.com/dms/image/C560BAQF6H8gAs-JyFg/company-logo_200_200/0/1630669478258/flipkart_logo?e=2147483647&v=beta&t=LpYgBumozEOQw18Bs8uyp4V4mAksSpBkFurSkRHcc6Q" alt="flip-kart logo" width={30} height={30} />
                </div>
            </div>
           
        </main>
        <div className="hero-image">
                <img src="../images/shoe.jpg" alt=""  width={400} />
            </div>
        </div>
    );
}