// Sorting Algorithms
// 1. Bubble Sort in javascript

// Following are the Time and Space complexity for the Bubble Sort algorithm.
// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

function bubbleSort(values)
{
    var length = values.length;
    var i, j, temp;
    for(i = 0; i < length; i++)
    {
        for(j = 0; j < length-i-1; j++)
        {
            if( values[j] > values[j+1])
            {
                // swapping the elements
                temp = values[j];
                values[j] = values[j+1];
                values[j+1] = temp;
            } 
        }
    }
    // printing the sorted array
    console.log("Sorted Array: ", values);
}

bubbleSort([5,4,3,2,1]);
bubbleSort([4,5,2,1,3]);
bubbleSort([9,7,8,6,5]);


// 2. Insertion Sort

// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

 
function insertionSort(values)
{
    var length = values.length;
    var i, j, key;
	for (i = 1; i < length; i++) 
	{
		j = i;
 		while (j > 0 && values[j - 1] > values[j]) 
 		{
 			key = values[j];
 			values[j] = values[j - 1];
 			values[j - 1] = key;
 			j--;
 		}
	}
    // printing the sorted array
    console.log("Sorted Array: ", values);
}

insertionSort([5,4,3,2,1]);
insertionSort([4,5,2,1,3]);
insertionSort([9,7,8,6,5]);


// 3. Selection sort

// Worst Case Time Complexity [ Big-O ]: O(n2)
// Best Case Time Complexity [Big-omega]: O(n2)
// Average Time Complexity [Big-theta]: O(n2)
// Space Complexity: O(1)

// function to swap elements at the given index values

function swap(values, firstIndex, secondIndex) 
{   
    var temp;
    temp = values[firstIndex];
    values[firstIndex] = values[secondIndex];
    values[secondIndex] = temp;
}

// function to look for smallest element in the given subvaluesay
function indexOfMinimum(values, startIndex, n) 
{
    var minValue = values[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < n; i++) {
        if(values[i] < minValue) 
        {
            minIndex = i;
            minValue = values[i];
        }
    } 
    return minIndex;
}

function selectionSort(values){
    var length = values.length;
    for(var i = 0; i < length; i++){
        var index = indexOfMinimum(values, i, length);
        swap(values, i, index);
    }
        // printing the sorted array
        console.log("Sorted Array: ", values);

} 

selectionSort([5,4,3,2,1]);
selectionSort([4,5,2,1,3]);
selectionSort([9,7,8,6,5]);

// 4. Quick sort

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]


// 5. Merge Sort

function mergeSort(a, p, r)
{
    var q;
    if(p < r)
    {
        q = Math.floor((p + r) / 2);
        mergeSort(a, p, q);
        mergeSort(a, q+1, r);
        merge(a, p, q, r);
    }
}

// function to merge the subarrays

function merge(a, p, q, r)
{
    var b = [];   //same size of a[]
    var i, j, k;
    k = 0;
    i = p;
    j = q + 1;
    while(i <= q && j <= r)
    {
        if(a[i] < a[j])
        {
            b[k++] = a[i++];    // same as b[k]=a[i]; k++; i++;
        }
        else
        {
            b[k++] = a[j++];
        }
    }
  
    while(i <= q)
    {
        b[k++] = a[i++];
    }
  
    while(j <= r)
    {
        b[k++] = a[j++];
    }
  
    for(i=r; i >= p; i--)
    {
        a[i] = b[--k];  // copying back the sorted list to a[]
    } 
}
function printArray(a)
{
    // printing the sorted array
    console.log("Sorted Array is: ", a);
}

//var arr = [5,4,3,2,1];
var arr = [32, 45, 67, 2, 7];
var len = arr.length; 
console.log("Given Array is:", arr);    
// calling merge sort
mergeSort(arr, 0, len - 1);
printArray(arr);


// 6. Heap Sort

function heapify(arr, n, i)
{
    var largest = i;
    var l = 2*i + 1;
    var r = 2*i + 2;
 
    // if left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;
 
    // if right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;
 
    // if largest is not root
    if (largest != i)
    {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        //swap(arr[i], arr[largest]);
 
        // recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

function heapSort(arr, n)
{
    // build heap (rearrange array)
    for (var i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
 
    // one by one extract an element from heap
    for (var i=n-1; i>=0; i--)
    {
        // move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        //swap(arr[0], arr[i]);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
 
// function to print array

function printArray(a)
{
    // printing the sorted array
    console.log("Sorted Array is: ", a);
}

var arr = [121, 10, 130, 57, 36, 17];
var n = arr.length; 
console.log("Given Array is:", arr);    
heapSort(arr, n);
printArray(arr);


// 7. Counting Sort 

// Method to sort the array
function countingSort(A,B,n){
    var count = [k+1];
    var t;
	for(var i = 0; i <= k; i++)
	{
		//Initialize array count
		count[i] = 0;
	}
	for(var i = 0; i < n; i++)
	{
	    // count the occurrence of elements u of A 
	    // & increment count[u] where u=A[i]
		t = A[i];
		count[t]++;			
	}
	for(var i = 1; i <= k; i++)
	{
	    // Updating elements of count array 
		count[i] = count[i] + count[i-1];            
	}
	for(var i = 0; i < n; i++)
	{
		// Add elements of array A to array B
		t = A[i];
		B[count[t]] = t;          
	    // Decrement the count value by 1
		count[t] = count[t]-1;		
	}
}

function printArray(a)
{
    // printing the sorted array
    console.log("Sorted Array is: ", a);
}
// A is the input array and will store elements entered by the user
// B is the output array having the sorted elements	

//var A = [23,45,12,64,25,67,53,41,98,74]
var A = [121, 10, 130, 57, 36, 17];
var B = []; 
var n = A.length;	
var k=0; 	// for storing the maximum element of input array
      
console.log("Given Array is:", A);    

for(var i = 0; i < n; i++)        
	{
		if(A[i]>k)
		{
			// k will have the maximum element of A[]
			k = A[i];              
		}
	}
countingSort(A,B,n);
B.shift();
console.log("Sorted Array is:", B);






