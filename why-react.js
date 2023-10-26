
// why i like react functions scripts
function Header() {
    return(
      <header>
        <nav>
            <img src="react.png" width="40px" />
          
        </nav>
      </header>
            
      )
}
function Love() {
   return (
      <div>
     <Header /> 
        <h1>React Ninja </h1>
           <h3> why i'm excited to be learning react. </h3>
           <ol>
              <li> react is cool</li>
              <li> i'm going to build my first android app using react</li>
              <li>react seems easy and neat </li>
           </ol>
    <footer>
      <small> 2023 ~ rav developments All right reserved</small>
    </footer>
      </div>
      )
}
ReactDOM.render(<Love />, document.getElementById('love'))
