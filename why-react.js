import Header from "Header.js";

function Maincontent() {
    return (

        <div>
        <h1> Reasons: i'm excited to learn React</h1>
            <ol>
                <li>just a list</li>
                <li> React is Popular</li>
                <li> I'm more likely to get a job with react  </li>
                <li> i'd like to broaden my horizon in the scope of software development </li>
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