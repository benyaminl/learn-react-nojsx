const e = React.createElement;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { game: false };
  }

  render() {
    let child = [];
    // Always have key!
    //
    child.push(e('li',{key: 'h'}, "halo"));
    child.push(e('li', {key: 'g'}, "halo"));
    return e('div', null, child);
  }
}

const domContainer = document.querySelector('#data');
ReactDOM.render(e(Board), domContainer);


