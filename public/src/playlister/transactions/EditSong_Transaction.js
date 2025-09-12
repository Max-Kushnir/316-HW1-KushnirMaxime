export default class EditSong_Transaction {
    constructor(initModel, initIndex, initOldSong, initNewSong) {
        this.model = initModel;
        this.index = initIndex;
        this.oldSong = initOldSong;
        this.newSong = initNewSong;
    }

    doTransaction() {
        this.model.editSong(this.index, this.newSong);
    }
    
    undoTransaction() {
        this.model.editSong(this.index, this.oldSong);
    }
}