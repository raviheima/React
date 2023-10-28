function Header() {
    return(
           <header>
           <nav className="nav">
                <img src="/react.png" className="nav-img"/>
                <ul className="nav-items">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            </header>
    )
}
function Maincontent() {
    return (

        <div>
        <h1>Why i Love React</h1>
            <ol>
                <li>React Is Fun and easy going</li>
                <li> React is Popular</li>
                <li> I'm more likely to get a job with react</li>
                <li>i'd like to broaden my horizon in the scope of software development</li>
            </ol>
        </div>
    )
}
function Footer() {
    return(
            <footer className="footer">
                <small>© 2023 Rav Developments. All Rights Reserved </small>
            </footer>

    )
}
function Page() {
    return(
        <div>
        <Header />
        <Maincontent />,
        <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("love"))