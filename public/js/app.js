console.log('here')

class Quote extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        quote: null,
        author: '',
        query: ''
      }
    }
    
    getQuote () {
        const ran = Math.floor(Math.random() * 1000);
        fetch('https://type.fit/api/quotes')
          .then(response => response.json())
          .then(res => this.setState({
          quote: res[ran].text,
          author: res[ran].author,
          query: res[ran].text.replace(/\s/g, "%20")
        }))
    }
    
    componentDidMount() { 
        this.getQuote ()
        
    }
    
    onClickHandler = () => {
         this.getQuote ()
    }
    
    
    render () {
      let who = 'Anonymous .-'
      if (this.state.author !== null) {
        who = `${this.state.author} .-`
      }
      return (
        <div className='quote-box anim'>
          <p className='quote'><i className="fas fa-quote-left"></i> {this.state.quote} </p>
          <p className='author'>{who}</p>
          <div className='footer-q'>
          <div>
          <a target="_blank"
            href={`https://twitter.com/intent/tweet?text=${this.state.query}`}
            data-size="large">
           <i className="fab fab-q fa-twitter"></i>
          </a>
            
          
          </div>
         
          <button id='button-q' onClick={this.onClickHandler}>Another Quote</button>
          </div>
          <footer id='footer-q'>Random Quote Generator by Hyrs</footer>
        </div>
      )
    }
  }
  
  
  class App extends React.Component {
    render () {
      return (
        <div className='container-q'>
          <Quote />
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('root'));