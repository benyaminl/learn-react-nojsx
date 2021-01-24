const e = React.createElement;
class Kotak extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: null};
        // Binding this state
        this.click = this.click.bind(this);
    }

    click() {
        if (this.state.value == null) {
            this.setState({value: this.props.game.value}, this.props.check);
            // Lanjut ke yang selanjutnya
            this.props.game.value = this.props.game.value == "O" ? "X" : "O";
            // this.props.check();
        }
    }

    render() {
        return e("div", {   
            onClick: this.click,
            style: {
                border: "1px solid black",
                width: "50px",
                height: "50px",
                backgroundColor: (this.state.value == "X") ? "aqua" : (this.state.value == "O") ? "lightgreen" : "white"
            }
        }, this.state.value);
    }
}

$(function(){
    let game = {value : null, board: null, status: null};

    function checkMenang() {
        let board = game.board;
        // Horizontal
        for(let i = 0; i<3; i++) {
            let sama = true;
            let who = board[i][0].state.value;
            for(let j = 0; j<3; j++) {
                sama &= who == board[i][j].state.value;
                who = board[i][j].state.value;
            }
            
            if (sama && who != null) alert(who + " Menang!");
        }
        
        // Vertikal
        for(let i = 0; i<3; i++) {
            let sama = true;
            let who = board[0][i].state.value;
            for(let j = 0; j<3; j++) {
                sama &= who == board[j][i].state.value;
                who = board[j][i].state.value;
            }
            
            if (sama && who != null) alert(who + " Menang!");
        }

        // Diagonal
        let kiri = true; let whoKiri = board[0][0].state.value;;
        let kanan = true; let whoKanan = board[0][2].state.value;;
        for (let i=0; i<3; i++) {
            kiri &= whoKiri == board[i][i].state.value;
            whoKiri = board[i][i].state.value;
            kanan &= whoKanan == board[i][2-i].state.value;
            whoKanan = board[i][2-i].state.value;
        }

        if (kiri && whoKiri != null) alert(whoKiri + " Menang!");
        if (kanan && whoKanan != null) alert(whoKanan + " Menang!");
    }

    function startGame() {
        // Set Giliran Random
        game.value = Math.random() > 0.5 ? "X" : "O";
        game.board = [];
        // Create the Row, 3 row
        for(let i=1; i<=3; i++) {
            board = []; 
            let div = $(`<div id='row-`+i+`' style='display: flex;max-width: 150px'>
                <div id='col-`+i+`-1' style='flex:auto'></div>
                <div id='col-`+i+`-2' style='flex:auto'></div>
                <div id='col-`+i+`-3' style='flex:auto'></div>
            </div>`);
            
            $("div#container").append(div);
            // Append the kotak on each row
            board.push(ReactDOM.render(e(Kotak, {game : game, check: checkMenang}),$("#col-"+i+"-1")[0]));
            board.push(ReactDOM.render(e(Kotak, {game : game, check: checkMenang}),$("#col-"+i+"-2")[0]));
            board.push(ReactDOM.render(e(Kotak, {game : game, check: checkMenang}),$("#col-"+i+"-3")[0]));
            
            game.board.push(board);
        }
    }

    $("#btnStart").click(startGame);
});