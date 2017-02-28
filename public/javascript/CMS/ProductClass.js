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
//# sourceMappingURL=ProductClass.js.map