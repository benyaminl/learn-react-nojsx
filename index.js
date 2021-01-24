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

class Coba extends React.Component {
  render() {
    // @see https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AhgM70dv2ECMiFogAMiAPyIA5GwBGEKYgBc0-qmBSAvok71dtAPSNWAbiKaiQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.12&externalPlugins=
    // Without JSX could be compiled there
    return e('p', null, "Hasil : ", 1 > 0 ? 'abc' : 'def', " Haii!");
  }
}

const coba = document.querySelector('#coba');
ReactDOM.render(e(Coba), coba);

let divColor = document.getElementsByTagName("DivColor");
console.log(divColor);
ReactDOM.render(e(DivColor), divColor.coba);

class Jam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('div', null, "Jam : ", new Date().toDateString());
  }
}

let jam = document.getElementsByTagName("Jam").jam;
ReactDOM.render(e(Jam), jam);