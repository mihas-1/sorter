class Sorter {
  constructor() {
	// your implementation
	this.array1 = [];    
  }

  add(element) {
	// your implementation
    this.array1.push(element);
  }

  at(index) {
	// your implementation
    return this.array1[index];
  }

  get length() {
	// your implementation
    return this.array1.length;
  }

  toArray() {
	// your implementation
    return this.array1;
  }

  sort(indices) {
      
	var massiveSort = [];
	indices.sort();
	for(var i = 0; i < indices.length; i++){
       massiveSort.push(this.array1[indices[i]]);
      }
    massiveSort.sort();
	for(var i = 0; i < indices.length; i++){
        this.array1[indices[i]] = massiveSort[i];
      }
	console.log(this.array1);
	console.log(indices);
	 
  }

  setComparator(compareFunction) {
	// your implementation 
  }
}
module.exports = Sorter;