1. What Is a React Component
A react component is a self contained reusable piece of code that performs a
specific function or is part of a larger system 

2. What's  wrong with this code?
```
function myComponents() {
  return (
    <small>I'm tiny text ! </small>
  )
}
```
the defined component starts wih a small letter.

3.  What's wrong with this code ?
```
funtion Header() {
    return (
      <header>
          <nav>
            <img src="react.png" width="40px" />
          </nav>
      </header>
    )
}
ReactDOM.render(Header(), document.getElementById("root"))
```
the component is called in a normal javascript syntax