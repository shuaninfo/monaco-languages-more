export default class EditStackElement {
 	beforeVersionId;
 	beforeCursorState;
 	afterCursorState;
 	afterVersionId = -1;
 	editOperations = [];
 	constructor(json) {
 		for (let key in json) {
 			this[key] = json[key];
 		}
 	}
 	undo(model) {
 		for (var i = this.editOperations.length - 1; i >= 0; i--) {
 			this.editOperations[i] = {
 				operations: model.applyEdits(this.editOperations[i].operations)
 			};
 		}
 	} // end undo
 	redo(model) {
 		for (var i = 0; i < this.editOperations.length; i++) {
 			this.editOperations[i] = {
 				operations: model.applyEdits(this.editOperations[i].operations)
 			};
 		}
 	} // end redo
 }
