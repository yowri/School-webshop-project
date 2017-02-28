/// <reference path="../Extra/Enums.ts"/>

module Modal{
	import genericFunctionOBJ = Objects.GenericFunctionOBJ;
	import sizeOBJ = Enumerators.size;
	

	export class OpenModalOBJ{

		private ModalName: string = "Base Modal";
		private ModalInitCallBack: genericFunctionOBJ;
		private ModalSubmitCallBack: genericFunctionOBJ;
		private SecondButton: boolean = true;
		private SubmitText: string = "Save";
		private ModalContent: string = "<h1>Empty modal</h1>";
		private ModalSize: sizeOBJ;
		private ModalContentScroller = true;

		public initModal(ModalContent:string
						,name: string
						, initCall: genericFunctionOBJ
						, submitCall: genericFunctionOBJ
						, secondB: boolean
						, SubmitT: string
						, modalSize:sizeOBJ): void {

			this.ModalName = name;
			this.ModalInitCallBack = initCall;
			this.ModalSubmitCallBack = submitCall;
			this.SecondButton = secondB;
			this.SubmitText = SubmitT;
			this.ModalContent = ModalContent;
			this.ModalSize = modalSize;
		}


		// getters
		get getModalScrollBool():boolean{
			return this.ModalContentScroller;
		}
		get getModalContent(): string {
			return this.ModalContent;
		}
		get getModalSize(): sizeOBJ{
			return this.ModalSize;
		}
		get getModalName(): string {
			return this.ModalName;
		}
		get getInitCallBack(): genericFunctionOBJ {
			return this.ModalInitCallBack;
		}
		get getSubmitCallBack(): genericFunctionOBJ {
			return this.ModalSubmitCallBack;
		}
		get getUseSecondButton(): boolean {
			return this.SecondButton;
		}
		get getSubmitText(): string {
			return this.SubmitText;
		}

		// setters
		set setModalScroller(value: boolean) {
			if (value != null) {
				this.ModalContentScroller = value;
			}
		}
		set setModalContent(value: string) {
			if (value != null) {
				this.ModalContent = value;
			}
		}
		set setModalName(value: string) {
			if (value != null) {
				this.ModalName = value;
			}
		}
		set setModalSize(value: sizeOBJ) {
			if (value != null) {
				this.ModalSize = value;
			}
		}
		set setInitCallBack(value: genericFunctionOBJ) {
			if (value != null) {
				this.ModalInitCallBack = value;
			}
		}
		set setSubmitCallBack(value:genericFunctionOBJ) {
			if (value != null) {
				this.ModalSubmitCallBack = value;
			}
		}
		set setSecondButtonVisable(value: boolean) {
			if (value != null) {
				this.SecondButton = value;
			}
		}
		set setSubmitText(value: string) {
			if (value != null) {
				this.SubmitText = value;
			}
		}
	}
}