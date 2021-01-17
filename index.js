const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

class DivColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'black'};
        // This binding is necessary to make `this` work in the callback
        this.randomColor = this.randomColor.bind(this);
    }
    
    randomColor() {
        let colors = ['black', 'blue', 'green', 'yellow', 'red'];
        let result = '';

        do {
            let random = parseInt(Math.random() * 5);
            result = colors[random];
        } while(result == this.state.color)

        this.setState(state => ({
            color: result 
        }));
    }

    render() {
        return e("div", 
            {
                style: 
                {
                    'witdh':'30px',
                    'height':'30px',
                    'display': 'inline-block',
                    'background': this.state.color,
                    'cursor': 'pointer',
                    'user-select': 'none'
                }, 
                onClick: this.randomColor 
            }, "kotak");
        //return (
        //   <div style='width: 30px; height: 30px; display: inline-block, background: {this.state.color}' 
        //        onClick={this.randomColor}>
        //    </div>
        //);
    }
}

let divColor = document.getElementsByTagName("DivColor");
console.log(divColor);
ReactDOM.render(e(DivColor), divColor.coba);
