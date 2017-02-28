module Objects{

	export class GenericFunctionOBJ {
		
		private classref;
		private functionRef: string;
		private extraData;

		constructor(classRef,functionRef:string,extraData) {
			this.classref = classRef;
			this.functionRef = functionRef;
			if (extraData != null) {
				this.extraData = extraData;
			}
		}

		//getters
		get getClassRef(){
			return this.classref;
		}
		get getFunctionRef():string {
			return this.functionRef;
		}
		get getExtraData() {
			return this.extraData;
		}
	}
}