module utils{
	import genericFunctionOBJ = Objects.GenericFunctionOBJ;
	
	export class Utilities {
		
		static genericFunction(generic: genericFunctionOBJ): void {
			if (generic.getClassRef.prototype[generic.getFunctionRef] && generic.getClassRef.prototype[generic.getFunctionRef] instanceof Function) {
				if (generic.getExtraData != null) {
					generic.getClassRef.prototype[generic.getFunctionRef](generic.getExtraData);
				} else {
					generic.getClassRef.prototype[generic.getFunctionRef]();
				}
			} else {
				throw new Error("Function '" + generic.getFunctionRef + "' is not a valid function");
			}
		}
	}
}