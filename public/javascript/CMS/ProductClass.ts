module ProductClass {
	
	export class Product {

		private ID: number;
		private Name: string;
		private Description: string;
		private Price: number;
		private Amount: number;
		private IsVisable: boolean;
		private Image: string;
		private categoryID: number;

		constructor(IDV: number = null,
			NameV: string = null,
			DescriptionV: string = null,
			PriceV: number = null,
			AmountV: number = null,
			IV: boolean = null,
			IMG: string = null,
			catID: number = null
		) {
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

		// public getters
		get getID(): number {
			return this.ID;
		}
		get getName(): string {
			return this.Name;
		}
		get getDiscription(): string {
			return this.Description;
		}
		get getPrice(): number {
			return this.Price;
		}
		get getAmount(): number {
			return this.Amount;
		}
		get getImage(): string {
			return this.Image;
		}
		get getIsVisable(): boolean {
			return this.IsVisable;
		}
		get getCatagoryID(): number {
			return this.categoryID;
		}

		// pulic setters
		set setName(value: string) {
			if (value != null) {
				this.Name = value;
			}
		}
		set setDiscription(value: string) {
			if (value != null) {
				this.Description = value;
			}
		}
		set setImage(value: string) {
			if (value != null) {
				this.Image = value;
			}
		}
		set setPrice(value: number) {
			if (value != null) {
				this.Price = value;
			}
		}
		set setAmount(value: number) {
			if (value != null) {
				this.Amount = value;
			}
		}
		set setIsVisable(value: boolean) {
			if (value != null) {
				this.IsVisable = value;
			}
		}
		set setCatagoryID(value: number) {
			if (value != null) {
				this.categoryID = value;
			}
		}
	}
}
