import Header from "./Header"
import Maincontent from "./Maincontent"
import Footer from "./Footer"
function App() {
    return(
        <div>
        <Header />
        <Maincontent />
        <Footer />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("love"))