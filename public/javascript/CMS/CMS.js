var ProductClass;
(function (ProductClass) {
    var Product = (function () {
        function Product(IDV, NameV, DescriptionV, PriceV, AmountV, IV, IMG, catID) {
            if (IDV === void 0) { IDV = null; }
            if (NameV === void 0) { NameV = null; }
            if (DescriptionV === void 0) { DescriptionV = null; }
            if (PriceV === void 0) { PriceV = null; }
            if (AmountV === void 0) { AmountV = null; }
            if (IV === void 0) { IV = null; }
            if (IMG === void 0) { IMG = null; }
            if (catID === void 0) { catID = null; }
            // init variables
            this.ID = IDV;
            this.Name = NameV;
            this.Description = DescriptionV;
            this.Price = PriceV;
            this.Amount = AmountV;
            this.IsVisable = IV;
            this.Image = IMG;
            this.categoryID = catID;
        }
        Object.defineProperty(Product.prototype, "getID", {
            // public getters
            get: function () {
                return this.ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getName", {
            get: function () {
                return this.Name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getDiscription", {
            get: function () {
                return this.Description;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getPrice", {
            get: function () {
                return this.Price;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getAmount", {
            get: function () {
                return this.Amount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getImage", {
            get: function () {
                return this.Image;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getIsVisable", {
            get: function () {
                return this.IsVisable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getCatagoryID", {
            get: function () {
                return this.categoryID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setName", {
            // pulic setters
            set: function (value) {
                if (value != null) {
                    this.Name = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setDiscription", {
            set: function (value) {
                if (value != null) {
                    this.Description = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setImage", {
            set: function (value) {
                if (value != null) {
                    this.Image = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setPrice", {
            set: function (value) {
                if (value != null) {
                    this.Price = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setAmount", {
            set: function (value) {
                if (value != null) {
                    this.Amount = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setIsVisable", {
            set: function (value) {
                if (value != null) {
                    this.IsVisable = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "setCatagoryID", {
            set: function (value) {
                if (value != null) {
                    this.categoryID = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Product;
    }());
    ProductClass.Product = Product;
})(ProductClass || (ProductClass = {}));
var Enumerators;
(function (Enumerators) {
    var size = (function () {
        function size() {
        }
        return size;
    }());
    Enumerators.size = size;
})(Enumerators || (Enumerators = {}));
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
var utils;
(function (utils) {
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.genericFunction = function (generic) {
            if (generic.getClassRef.prototype[generic.getFunctionRef] && generic.getClassRef.prototype[generic.getFunctionRef] instanceof Function) {
                if (generic.getExtraData != null) {
                    generic.getClassRef.prototype[generic.getFunctionRef](generic.getExtraData);
                }
                else {
                    generic.getClassRef.prototype[generic.getFunctionRef]();
                }
            }
            else {
                throw new Error("Function '" + generic.getFunctionRef + "' is not a valid function");
            }
        };
        return Utilities;
    }());
    utils.Utilities = Utilities;
})(utils || (utils = {}));
var Objects;
(function (Objects) {
    var GenericFunctionOBJ = (function () {
        function GenericFunctionOBJ(classRef, functionRef, extraData) {
            this.classref = classRef;
            this.functionRef = functionRef;
            if (extraData != null) {
                this.extraData = extraData;
            }
        }
        Object.defineProperty(GenericFunctionOBJ.prototype, "getClassRef", {
            //getters
            get: function () {
                return this.classref;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericFunctionOBJ.prototype, "getFunctionRef", {
            get: function () {
                return this.functionRef;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GenericFunctionOBJ.prototype, "getExtraData", {
            get: function () {
                return this.extraData;
            },
            enumerable: true,
            configurable: true
        });
        return GenericFunctionOBJ;
    }());
    Objects.GenericFunctionOBJ = GenericFunctionOBJ;
})(Objects || (Objects = {}));
/// <reference path="../lib/jquery.d.ts" />
/// <reference path="CMSui.ts"/>
/// <reference path="../../../node_modules/angular2/core.d.ts"/>
var Data;
(function (Data) {
    var DataModal = (function () {
        function DataModal() {
        }
        // add Product functions
        DataModal.prototype.initAddProduct = function () {
            database.query("SELECT * FROM category", function (data) {
                for (var i = 0; i < data.length; i++) {
                    $("#BaseModal .modal-content #CategorySelect").append("<option value=" + data[i].ID + ">" + data[i].Name + "</option>");
                }
            });
        };
        DataModal.prototype.submitAddProduct = function () {
            var file = document.getElementById("NewProductImage").files[0]; // ignore error
            if (file != null) {
                var ProductName = $("#BaseModal .modal-content #ProductName").val();
                var ProductDiscription = $("#BaseModal .modal-content #ProductDiscription").val();
                var ProductPrice = $("#BaseModal .modal-content #ProductPrice").val();
                var ProductCatagory = $("#BaseModal .modal-content #CategorySelect").val();
                if (ProductName != undefined && ProductName != "") {
                    if (ProductDiscription != undefined && ProductDiscription != "") {
                        if (ProductPrice != undefined && ProductPrice != "") {
                            if (ProductCatagory != undefined && ProductCatagory != "") {
                                // send product is valid
                                var reader = new FileReader();
                                Data.DataModal.PTempName = ProductName;
                                Data.DataModal.PTempDes = ProductDiscription;
                                Data.DataModal.PTempPrice = ProductPrice;
                                Data.DataModal.PTempCID = ProductCatagory;
                                reader.onload = function (event) {
                                    database.query("INSERT INTO `product`(`ID`, `Name`, `Description`, `Price`, `Amount`, `IsVisible`, `Image`, `categoryID`) VALUES ('','" + Data.DataModal.PTempName + "','" + Data.DataModal.PTempDes + "','" + Data.DataModal.PTempPrice + "','0','0','" + event.target.result + "','" + Data.DataModal.PTempCID + "')", function (data) {
                                        Materialize.toast('Product successfully added', 1000); // ignore error
                                        // zero out last
                                        Data.DataModal.PTempName = null;
                                        Data.DataModal.PTempDes = null;
                                        Data.DataModal.PTempPrice = null;
                                        Data.DataModal.PTempCID = null;
                                        CMSui.CMSuiC.closeModal();
                                        CMSui.CMSuiC.loadProducts();
                                    });
                                };
                                reader.readAsDataURL(file);
                            }
                            else {
                                Materialize.toast('Please enter a valid Product category', 1000); // ignore error
                            }
                        }
                        else {
                            Materialize.toast('Please enter a valid Product price', 1000); // ignore error
                        }
                    }
                    else {
                        Materialize.toast('Please enter a valid Product discription', 1000); // ignore error
                    }
                }
                else {
                    Materialize.toast('Please enter a valid Product name', 1000); // ignore error
                }
            }
            else {
                Materialize.toast('Please select a image', 1000); // ignore error
            }
        };
        // add catagory functions
        DataModal.prototype.initAddCategory = function () {
        };
        DataModal.prototype.initProductSettings = function (product) {
            $("#BaseModal .modal-content #ProductName").val(product.Name);
            $("#BaseModal .modal-content #ProductDiscription").val(product.Description);
            $("#BaseModal .modal-content #ProductPrice").val(product.Price);
            database.query("SELECT * FROM category", function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].ID == product.categoryID) {
                        $("#BaseModal .modal-content #CategorySelect").append("<option selected value=" + data[i].ID + ">" + data[i].Name + "</option>");
                    }
                    else {
                        $("#BaseModal .modal-content #CategorySelect").append("<option value=" + data[i].ID + ">" + data[i].Name + "</option>");
                    }
                }
            });
        };
        DataModal.prototype.submitProductSettings = function (product) {
            //
            //if (file != null) {
            var ProductName = $("#BaseModal .modal-content #ProductName").val();
            var ProductDiscription = $("#BaseModal .modal-content #ProductDiscription").val();
            var ProductPrice = $("#BaseModal .modal-content #ProductPrice").val();
            var ProductCatagory = $("#BaseModal .modal-content #CategorySelect").val();
            if (ProductName != undefined && ProductName != "") {
                if (ProductDiscription != undefined && ProductDiscription != "") {
                    if (ProductPrice != undefined && ProductPrice != "") {
                        if (ProductCatagory != undefined && ProductCatagory != "") {
                            // send product is valid
                            var file = document.getElementById("NewProductImage").files[0]; // ignore error
                            if (file != null) {
                                var reader = new FileReader();
                                Data.DataModal.PTempName = ProductName;
                                Data.DataModal.PTempDes = ProductDiscription;
                                Data.DataModal.PTempPrice = ProductPrice;
                                Data.DataModal.PTempCID = ProductCatagory;
                                reader.onload = function (event) {
                                    database.query("UPDATE `product` SET `Name`='" + Data.DataModal.PTempName + "',`Description`='" + Data.DataModal.PTempDes + "',`Price`='" + Data.DataModal.PTempPrice + "',`categoryID`='" + Data.DataModal.PTempCID + "', `Image`='" + reader.result + "' WHERE ID='" + product.ID + "'", function (data) {
                                        Materialize.toast('Product successfully added', 1000); // ignore error
                                        // zero out last
                                        Data.DataModal.PTempName = null;
                                        Data.DataModal.PTempDes = null;
                                        Data.DataModal.PTempPrice = null;
                                        Data.DataModal.PTempCID = null;
                                        CMSui.CMSuiC.closeModal();
                                        CMSui.CMSuiC.loadProducts();
                                    });
                                };
                                reader.readAsDataURL(file);
                            }
                            else {
                                database.query("UPDATE `product` SET `Name`='" + ProductName + "',`Description`='" + ProductDiscription + "',`Price`='" + ProductPrice + "',`categoryID`='" + ProductCatagory + "' WHERE ID='" + product.ID + "'", function (data) {
                                    Materialize.toast('Product successfully changed', 1000); // ignore error
                                    // zero out last
                                    CMSui.CMSuiC.closeModal();
                                    CMSui.CMSuiC.loadProducts();
                                });
                            }
                        }
                        else {
                            Materialize.toast('Please enter a valid Product category', 1000); // ignore error
                        }
                    }
                    else {
                        Materialize.toast('Please enter a valid Product price', 1000); // ignore error
                    }
                }
                else {
                    Materialize.toast('Please enter a valid Product discription', 1000); // ignore error
                }
            }
            else {
                Materialize.toast('Please enter a valid Product name', 1000); // ignore error
            }
            //} else {
            //Materialize.toast('Please select a image', 1000); // ignore error
            //}
        };
        DataModal.removeCategory = function (categoryID) {
            database.query("DELETE FROM `category` WHERE ID=" + categoryID, function () {
            });
            CMSui.CMSuiC.loadCategorys();
        };
        DataModal.prototype.submitAddCategory = function () {
            var dataCategory = $("#BaseModal .modal-content #CatagoryName").val();
            if (dataCategory != undefined && dataCategory != "" && dataCategory != null) {
                // check if the name is not already taken. load all categorys on load in a list
                database.query("SELECT * FROM category", function (data) {
                    var goTrough = true;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Name.toLowerCase() == dataCategory.toLowerCase()) {
                            goTrough = false;
                            break;
                        }
                    }
                    if (goTrough) {
                        database.query("INSERT INTO `category`(`ID`, `Name`) VALUES ('','" + dataCategory + "')", function (data) {
                            database.query("SELECT * FROM category", function (data) {
                                Data.DataModal.categorysTemp = data;
                            });
                            Materialize.toast('Succefully added a new category', 1000); // ignore error
                            CMSui.CMSuiC.loadCategorys();
                            CMSui.CMSuiC.closeModal();
                        });
                    }
                    else {
                        Materialize.toast('This category name is already taken', 1000); // ignore error
                    }
                });
            }
            else {
                Materialize.toast('Please enter a valid name', 1000); // ignore error
            }
        };
        return DataModal;
    }());
    Data.DataModal = DataModal;
})(Data || (Data = {}));
var constants;
(function (constants) {
    var PartialViews = (function () {
        function PartialViews() {
        }
        return PartialViews;
    }());
    constants.PartialViews = PartialViews;
})(constants || (constants = {}));
/// <reference path="../lib/jquery.d.ts" />
/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="DataModal.ts"/>
/// <reference path="Extra/Constants.ts"/>
/// <reference path="Extra/Enums.ts"/>
var CMSui;
(function (CMSui) {
    var OpenModalOBJ = Modal.OpenModalOBJ;
    var Utils = utils;
    var genericFunctionOBJ = Objects.GenericFunctionOBJ;
    var sizeOBJ = Enumerators.size;
    var CMSuiC = (function () {
        function CMSuiC() {
            this.uiInit();
            CMSuiC.loadCategorys();
            CMSuiC.loadProducts();
        }
        CMSuiC.prototype.uiInit = function () {
            // init base bar
            $('ul.tabs').tabs(); // Ignore error
            $('#addNewProduct').click(function () {
                var openModalTemplate = new OpenModalOBJ();
                openModalTemplate.setModalContent = constants.PartialViews.AddProductPartial;
                openModalTemplate.setInitCallBack = new genericFunctionOBJ(Data.DataModal, "initAddProduct", null);
                openModalTemplate.setSubmitCallBack = new genericFunctionOBJ(Data.DataModal, "submitAddProduct", null);
                openModalTemplate.setModalName = "Add new product";
                openModalTemplate.setSubmitText = "Add product";
                openModalTemplate.setModalSize = new sizeOBJ();
                openModalTemplate.getModalSize.width = "60%";
                openModalTemplate.getModalSize.height = "60%";
                CMSuiC.openModal(openModalTemplate);
            });
            $('#addNewCatagory').click(function () {
                var openModalTemplate = new OpenModalOBJ();
                var modalSize = new sizeOBJ();
                modalSize.width = "450px";
                modalSize.height = "300px";
                openModalTemplate.initModal(constants.PartialViews.AddCatagoryPartial, "Add Catagory", new genericFunctionOBJ(Data.DataModal, "initAddCategory", null), new genericFunctionOBJ(Data.DataModal, "submitAddCategory", null), true, "Add Catagory", modalSize);
                openModalTemplate.setModalScroller = false;
                CMSuiC.openModal(openModalTemplate);
            });
        };
        CMSuiC.prototype.AddNewItem = function () {
        };
        CMSuiC.closeModal = function () {
            $("#BaseModal .modal-content").empty();
            $("#BaseModal").closeModal();
        };
        CMSuiC.loadProducts = function () {
            database.query("SELECT ID,Name,Description,Price,categoryID FROM product", function (data) {
                $("#ProductenCMS .ProductItem").remove();
                for (var i = 0; i < data.length; i++) {
                    var item = $.parseHTML(constants.PartialViews.ProductListItem);
                    $(item).find(".Title").text(data[i].Name);
                    $(item).find(".DiscriptionValue").text(data[i].Description);
                    $(item).find(".PriceValue").text(data[i].Price);
                    database.query("SELECT CONVERT(Image USING utf8)as'Image' FROM `product` WHERE ID='" + data[i].ID + "'", function (data, parms) {
                        $(parms).find(".Image").css('background-image', 'url(' + data[0].Image + ')');
                    }, undefined, undefined, item);
                    $(item).find(".RemoveButton").click({ id: data[i].ID }, function (event) {
                        database.query("DELETE FROM `product` WHERE ID='" + event.data.id + "'", function () {
                        });
                        $(this).closest(".ProductItem").remove();
                    });
                    $(item).find(".Edit").click({ obj: data[i] }, function (event) {
                        CMSuiC.ProductDetails(event.data.obj);
                    });
                    // loopje
                    for (var e = 0; e < Data.DataModal.categorysTemp.length; e++) {
                        if (Data.DataModal.categorysTemp[e].ID == data[i].categoryID) {
                            $(item).find(".CategoryValue").text(Data.DataModal.categorysTemp[e].Name);
                        }
                    }
                    $("#ProductenCMS").append(item);
                }
            });
        };
        CMSuiC.ProductDetails = function (product) {
            var openModalTemplate = new OpenModalOBJ();
            openModalTemplate.setModalContent = constants.PartialViews.AddProductPartial;
            openModalTemplate.setInitCallBack = new genericFunctionOBJ(Data.DataModal, "initProductSettings", product);
            openModalTemplate.setSubmitCallBack = new genericFunctionOBJ(Data.DataModal, "submitProductSettings", product);
            openModalTemplate.setModalName = "Edit product";
            openModalTemplate.setSubmitText = "Save Changes";
            openModalTemplate.setModalSize = new sizeOBJ();
            openModalTemplate.getModalSize.width = "60%";
            openModalTemplate.getModalSize.height = "60%";
            CMSuiC.openModal(openModalTemplate);
        };
        CMSuiC.loadCategorys = function () {
            database.query("SELECT * FROM category", function (data) {
                $("#CatagorieenCMS .CategoryListItem").remove();
                for (var i = 0; i < data.length; i++) {
                    var item = $.parseHTML(constants.PartialViews.CategoryListItem);
                    $(item).find(".Title").text(data[i].Name);
                    $(item).find(".removeButton").click({ category: data[i] }, function (e) {
                        Data.DataModal.removeCategory(e.data.category.ID);
                    });
                    $("#CatagorieenCMS").append(item);
                }
            });
        };
        // open the base modal with the right information
        CMSuiC.openModal = function (ModalOBJ) {
            // clear ui
            $("#BaseModal .modal-content").empty();
            $("#BaseModal .modal-content").append(ModalOBJ.getModalContent);
            // check/set button settings
            $("#BaseModal .modal-footer .Submit").text(ModalOBJ.getSubmitText);
            if (ModalOBJ.getUseSecondButton == false) {
                $("#BaseModal .modal-footer .Close").css("display", "none");
            }
            else {
                $("#BaseModal .modal-footer .Close").css("display", "initial");
            }
            // set click listener buttons
            if (ModalOBJ.getSubmitCallBack != null && ModalOBJ.getSubmitCallBack != undefined) {
                // set callback
                $("#BaseModal .modal-footer .Submit").unbind("click");
                $("#BaseModal .modal-footer .Submit").click(function () {
                    Utils.Utilities.genericFunction(ModalOBJ.getSubmitCallBack);
                });
            }
            // set initCallBack last
            if (ModalOBJ.getInitCallBack != null && ModalOBJ.getInitCallBack != undefined) {
                utils.Utilities.genericFunction(ModalOBJ.getInitCallBack);
            }
            $("#BaseModal").css({
                "width": ModalOBJ.getModalSize.width,
                "height": ModalOBJ.getModalSize.height
            });
            if (ModalOBJ.getModalScrollBool == false) {
                $("#BaseModal .modal-content").css("overflow-y", "hidden");
            }
            else {
                $("#BaseModal .modal-content").css("overflow-y", "auto");
            }
            // finaly open the modal
            $("#BaseModal").openModal(); // ignore error
        };
        return CMSuiC;
    }());
    CMSui.CMSuiC = CMSuiC;
})(CMSui || (CMSui = {}));
/// <reference path="../lib/jquery.d.ts" />
/// <reference path="ProductClass.ts"/>
/// <reference path="CMSui.ts"/>
/// <reference path="Objects/OpenModalOBJ.ts"/>
/// <reference path="Interfaces/Interfaces.ts"/>
/// <reference path="Extra/Utils.ts"/>
/// <reference path="Objects/GenericFunctionOBJ.ts"/>
/// <reference path="Extra/Constants.ts"/>
var mainCMS;
(function (mainCMS) {
    var UI = CMSui.CMSuiC;
    var Main = (function () {
        function Main() {
            database.query("SELECT * FROM category", function (data) {
                Data.DataModal.categorysTemp = data;
            });
            // load all the data
            var getProductPartial = $.get("../../partialviews/AddProductPartial.html", function (data) {
                constants.PartialViews.AddProductPartial = data;
            });
            var getCatagoryItemPartial = $.get("../../partialviews/CatagoryListItem.html", function (data) {
                constants.PartialViews.CategoryListItem = data;
            });
            var getCatagoryPartial = $.get("../../partialviews/AddCatagoryPartial.html", function (data) {
                constants.PartialViews.AddCatagoryPartial = data;
            });
            var getProductItemPartial = $.get("../../partialviews/ProductListItem.html", function (data) {
                constants.PartialViews.ProductListItem = data;
            });
            $.when(getProductPartial, getCatagoryItemPartial, getProductItemPartial, getCatagoryPartial).done(function () {
                this.UIController = new UI();
            });
            // is ready
        }
        return Main;
    }());
    mainCMS.Main = Main;
})(mainCMS || (mainCMS = {}));
