import "./Header.css"


export const Header = () => {
    return (
        <header className="header">
            
            <section className="header-banner">
                 
                <div id="menuToggle">
    
                    <input type="checkbox" />
    
                    <span></span>
                    <span></span>
                    <span></span>
        
                    <ul id="menu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>               
                    </ul>
                </div>
                <div>
                    <h2>Mash-Up</h2>
                </div>
                
                <div className="logo-container">
                    <img className="logo" src="https://thumbs.dreamstime.com/z/logo-de-musique-clef-triple-17275468.jpg" alt=""/>
                    </div>
            </section>
        </header>
    )
}