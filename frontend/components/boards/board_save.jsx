import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BoardSaveListItem from "./board_save_list_item";

class BoardSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin_id: this.props.pinId,
            board_id: null,
            displayedBoardIndex: 0,
            menuOpen: false
        };
        this.retreivedBoards = false;
        this.currUserBoards = null;
        this.pinSaves = null;
        this.toggleMenu = this.toggleMenu.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleUnsave = this.handleUnsave.bind(this);
    }

    componentDidMount() {
        this.props.requestAllSaves();
        // Get alphabetical array of current users boards, setting selection to the first
        this.props.requestCurrentUserBoards().then(({ boards }) => {
            this.currUserBoards = Object.values(boards).sort((a, b) => (a.name > b.name) ? 1 : -1);
            if (this.currUserBoards.length > 0) this.setState({ board_id: this.currUserBoards[0].id })
        }
        );
    }

    toggleMenu (e) {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    selectBoard (board, i) {
        this.toggleMenu();
        this.setState({board_id: board.id, displayedBoardIndex: i});
        // Ok this part isn't DRY at all but the state doesn't update in time for calls to handleSave or handleUnsave here
        // When calling handleSave/handleUnsave, default board gets saved/unsaved regardless when another board is selected
        // Have to manually specify the board ID in these calls
        if (this.pinSaves.has(board.id)) {
            const save = Object.values(this.props.boards_pins)
                .filter((save) => save.board_id === board.id && save.pin_id === this.state.pin_id);
            this.props.unsavePinFromBoard(save[0].id)
                .then(() => this.props.notify("pin unsaved from board"));
        } else {
            const save = {board_id: board.id, pin_id: this.state.pin_id};
            this.props.savePinToBoard(save)
                .then(() => this.props.notify("pin saved to board"));
        }
    }

    handleSave () {
        const save = (({ board_id, pin_id }) => ({ board_id, pin_id }))(this.state);
        this.props.savePinToBoard(save)
            .then(() => this.props.notify("pin saved to board"));
    }

    handleUnsave () {
        const save = Object.values(this.props.boards_pins)
            .filter((save) => save.board_id === this.state.board_id && save.pin_id === this.state.pin_id);
        this.props.unsavePinFromBoard(save[0].id)
            .then(() => this.props.notify("pin unsaved from board"));
    }

    render () {
        if (!this.state.board_id) return null;

        // Pull out displayed board and truncate name if needed
        const displayedBoard = this.currUserBoards[this.state.displayedBoardIndex];
        const displayedBoardName = (displayedBoard.name.length > 10) ? `${displayedBoard.name.slice(0,10)}...` : displayedBoard.name;

        // (Re)create set of boards to which pin is already saved- used to check whether to show a save or saved button
        this.pinSaves = new Set();
        Object.values(this.props.boards_pins).forEach((save) => { if (save.pin_id === this.props.pinId) this.pinSaves.add(save.board_id); });

        const menuModal = (
            <div className="board-save-list shadowed">
                <h4>Save to board</h4>
                {this.currUserBoards.map((board, i) => 
                    <div key={`bsli${i}`} onClick={() => this.selectBoard(board, i)}>
                        <BoardSaveListItem board={board} saved={this.pinSaves.has(board.id)}/></div>)}
            </div>
        );

        const {menuOpen} = this.state;

        return (
            <div className={menuOpen ? "board-save opened" : "board-save"} onClick={e => e.stopPropagation()}>
                <div className="expander" onClick={this.toggleMenu}>
                    <h2>{displayedBoardName}</h2>
                    {this.props.indexView ? 
                        <ExpandMoreIcon sx={{ color: "white" }}/> :
                        <ExpandMoreIcon />
                    }
                </div>
                {this.pinSaves.has(displayedBoard.id) ? 
                    <button className="styled-button black" onClick={this.handleUnsave}>Saved</button> :
                    <button className="styled-button red" onClick={this.handleSave}>Save</button>
                }

                {menuOpen ? menuModal : null}
            </div>
        );
    }
}

export default BoardSave;