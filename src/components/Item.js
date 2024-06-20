import React from "react"

// function Item({ name, category }) {
//   const [isInCart, setIsInCart] = useState(false);

//   function handleAddToCartClick() {
//     setIsInCart((isInCart) => !isInCart);
//   }

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this)

    this.state = {
      isInCart: false,
    }
  }

  handleAddToCartClick() {
    console.log("state: ", this.state)
    console.log("setState: ", this.setState)

    this.setState({ isInCart: !this.state.isInCart })
  }

  render() {
    console.log("isInCart: ", this.state.isInCart)

    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    )
  }
}

export default Item
