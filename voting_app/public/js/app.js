
class ProductList extends React.Component {

    handleProductUpvote(productId){
        // left off here on page 41...next up
        // increment votes instead of just logging upvoted
        console.log(productId + ' was upvoted');
    }
    render() {
        const products = Seed.products.sort((a,b) =>(
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpvote}
            />
        ));
        return (
            <div className='ui unstackable items'>
            {productComponents}
            </div>
        );
    }
}

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
      }
    handleUpVote() {
        this.props.onVote(this.props.id);
      }
    render(){
        return(
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl}/>
                </div>
                <div className='middle aligned content'>
                  <div className='header'>
                    <a onClick={this.handleUpVote}>
                        <i className='large caret up icon' />
                    </a>
                    {this.props.votes}
                  </div>
                <div className='description'>
                    <a href={this.props.url}>
                        {this.props.title}
                    </a>
                    <p>Authentic renaissance actors, delivered in just two weeks.</p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img 
                        className='ui avatar image'
                        src={this.props.submitterAvatarUrl}
                     />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList/>,
    document.getElementById('content')
);
