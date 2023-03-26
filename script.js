
const arr=["Mulberry", "Guava","Raspberry", "Papaya", "Pineapple", "Raspberry", "Watermelon"];

const arr2=[2,45,7,23,6,87,26,12,57];

document.write("Length of an array is.... "+arr.length);

document.write("<br>Return the Index number start from first occurance...... "+arr.indexOf('Papaya')+" is the index number</br>");

document.write("<br>Return the Index number start from last occurance...... "+arr.lastIndexOf('Raspberry')+" is the index number</br>"); // search the element from last and return the index number from starting

document.write("<br>String contains in array or not.... "+arr.includes("Watermelon")+"</br>"); // return true or false 

document.write("<br>Sorting the Array.... "+arr.sort()+"</br>");

document.write("<br>Reversing the Array.... "+arr.reverse()+"</br>");

document.write("<br>Adding the value at the end into Array.... "+arr.push("Banana")+"</br>");
document.write("<br>After adding the value into the Array.... "+arr+"</br>");

document.write("<br>Adding the value at the beginning into Array.... "+arr.unshift("Lichi")+"</br>");
document.write("<br>After adding the value into the Array.... "+arr+"</br>");

document.write("<br>Remove the last value into the Array.... "+arr.pop()+"</br>");
document.write("<br>After removing the value into the Array.... "+arr+"</br>");


document.write("<br>Remove the first value into the Array.... "+arr.shift()+"</br>");
document.write("<br>After removing the value into the Array.... "+arr+"</br>");


document.write("<br>Add & Remove element from Array.... "+arr.splice(3,2,"NewValue1","NewValue2")+"</br>");
document.write("<br>After removing the value into the Array.... "+arr+"</br>");

document.write("<br>Concat two Array.... "+arr.concat(arr2)+"</br>");

document.write("<br>Copying the array value.... "+arr.copyWithin(1,4,6)+"</br>");// (taget value from where to start, copy value start, copy value end)

document.write("<br>Change the value with another value.... "+arr.fill(20,2,5)+"</br>");

document.write("<br>String representation of an Array.... "+arr2.toString()+"</br>");

document.write("<br>return the value into the Array.... "+arr.slice(2,5)+"</br>");

document.write("<br>return Index Number in Callback function.... "+arr2.findIndex(value=> value>30)+"</br>");

document.write("<br>Return the value into the Array.... "+arr.find(e => e >=745)+"</br>");

document.write("<br>Add a seperator into the Array values.... "+arr.join(" or ")+"</br>");

document.write("<br>Return the index number of array values.... "+Object.keys(arr)+"</br>");

document.write("<br>Returning the values of array.... "+Object.values(arr)+"</br>");

const val= arr.entries();
for(let x of val){
    document.write("<br>Retun the Key Value pair.... "+x+"</br>");
}

document.write("<br>Check all values are same or not.... "+arr2.every(val=> val>78)+"</br>");

document.write("<br>tests whether at least one element in the array passes the test implemented by the provided function.... "+arr2.some(e=>e>=18)+"</br>");

document.write("<br>Get element based on condition.... "+arr2.filter(val=> val%2==0)+"</br>");

const arr3=[1,2,3,4,5,6]
document.write("<br>Iterate on each element.... "+arr3.map(ele=>ele*2)+"</br>");

const arr4 =[1,2,[3,4,5],34,65,[76,8],[],99]
document.write("<br>Remove empty slots into the Array.... "+arr4.flat()+"</br>");
