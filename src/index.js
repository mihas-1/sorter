class Sorter {
  constructor() {
	// your implementation
	this.sortArr = [];
    this.functionCompare;
  }

  add(element) {
	// your implementation
    this.sortArr.push(element);
  }

  at(index) {
	// your implementation
    return this.sortArr[index];
  }

  get length() {
	// your implementation
    return this.sortArr.length;
  }

  toArray() {
	// your implementation
    return this.sortArr;
  }

  sort(indices) {
 

	indices.sort();
	var massiveElements = [];
	for(var i = 0; i < indices.length; i++){
       massiveElements.push(this.sortArr[indices[i]]);
      }
	  
	massiveElements.sort (function (a, b) {return a - b;}); 

	if (this.functionCompare) massiveElements.sort(this.functionCompare);
	
	for(var i = 0; i < indices.length; i++){
        this.sortArr[indices[i]] = massiveElements[i];
      }
     

	console.log(this.sortArr);
	console.log(indices);
	 
  }
  
  

  setComparator(compareFunction) {
	// your implementation 
	this.functionCompare = compareFunction;
	
	
	//if (functionCompare) massiveElements.sort(functionCompare);
 
  }
}
module.exports = Sorter;