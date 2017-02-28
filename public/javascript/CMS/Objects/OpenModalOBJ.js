/// <reference path="../Extra/Enums.ts"/>
var Modal;
(function (Modal) {
    var OpenModalOBJ = (function () {
        function OpenModalOBJ() {
            this.ModalName = "Base Modal";
            this.SecondButton = true;
            this.SubmitText = "Save";
            this.ModalContent = "<h1>Empty modal</h1>";
            this.ModalContentScroller = true;
        }
        OpenModalOBJ.prototype.initModal = function (ModalContent, name, initCall, submitCall, secondB, SubmitT, modalSize) {
            this.ModalName = name;
            this.ModalInitCallBack = initCall;
            this.ModalSubmitCallBack = submitCall;
            this.SecondButton = secondB;
            this.SubmitText = SubmitT;
            this.ModalContent = ModalContent;
            this.ModalSize = modalSize;
        };
        Object.defineProperty(OpenModalOBJ.prototype, "getModalScrollBool", {
            // getters
            get: function () {
                return this.ModalContentScroller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getModalContent", {
            get: function () {
                return this.ModalContent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getModalSize", {
            get: function () {
                return this.ModalSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getModalName", {
            get: function () {
                return this.ModalName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getInitCallBack", {
            get: function () {
                return this.ModalInitCallBack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getSubmitCallBack", {
            get: function () {
                return this.ModalSubmitCallBack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getUseSecondButton", {
            get: function () {
                return this.SecondButton;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "getSubmitText", {
            get: function () {
                return this.SubmitText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setModalScroller", {
            // setters
            set: function (value) {
                if (value != null) {
                    this.ModalContentScroller = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setModalContent", {
            set: function (value) {
                if (value != null) {
                    this.ModalContent = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setModalName", {
            set: function (value) {
                if (value != null) {
                    this.ModalName = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setModalSize", {
            set: function (value) {
                if (value != null) {
                    this.ModalSize = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setInitCallBack", {
            set: function (value) {
                if (value != null) {
                    this.ModalInitCallBack = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setSubmitCallBack", {
            set: function (value) {
                if (value != null) {
                    this.ModalSubmitCallBack = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setSecondButtonVisable", {
            set: function (value) {
                if (value != null) {
                    this.SecondButton = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OpenModalOBJ.prototype, "setSubmitText", {
            set: function (value) {
                if (value != null) {
                    this.SubmitText = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        return OpenModalOBJ;
    }());
    Modal.OpenModalOBJ = OpenModalOBJ;
})(Modal || (Modal = {}));
//# sourceMappingURL=OpenModalOBJ.js.map