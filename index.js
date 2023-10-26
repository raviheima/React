function Page() {
   
   return   (
<div>
<img 
width="40"
src="react.png"
/>
   <h1>Fun Facts About React </h1>
    
      <ol>
         <li>was first realeased in 2013</li>
         <li>was originally created by jordan walke</li>
         <li>has well over 100k stars on github</li>
         <li>is maintained by facebook</li>
         <li>powers thousands of enterprise apps including mobile apps</li>
      </ol>
</div>
   );
}
ReactDOM.render(<Page />, document.getElementById("root"));

// why i like react functions scripts
function Love() {
   return (
      <div>
      <img src="react.png" width="40px" />
      <h1>React Ninja </h1>
         <h3> why i'm excited to be learning react. </h3>
         <ul>
            <li> react is cool</li>
            <li> i'm going to build my first android app using react</li>
            <li>react seems easy and neat </li>
         </ul>
      
      </div>
      )
}
ReactDOM.render(<Love />, document.getElementById('love'))

