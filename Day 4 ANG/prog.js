//Question-1

function prime(n)
{
    x=n/2
    flag=true
    if (n == 0 || n == 1) 
        flag = false; 
    for(i = 2; i <= x; i++)
    { 
        if((n % i == 0))  
        {  
           flag=false
          break
        }  
    }  

    if(flag)
    return n
      
}
arr = [57,11,8,36,43]
var pn = arr.filter(prime)
console.log(pn)

//------------------------------------------------------
//Question-2
function upper(s){
    return s.toUpperCase()
    }    
array = ["Judi","Moni","Reba","Ruba"]
var str = array.map(upper)
console.log(str);


//---------------------------------------------------------------
//Question3

function lengthiest_str(arr)
{
    max = arr[0].length;
    arr.map(str => max = Math.max(max, str.length));
    result = arr.filter(str => str.length == max);
    return result;
}

arr = ["Judi","Monica","Rubashree","Naresh","Mohan"]
console.log(lengthiest_str(arr))

//----------------------------------------------------------
//Question4

function strlength(s)
{
    return s.length;
}
function sum_length(l1,l2)
{
    return l1+l2
}

arr=new Array("Judi","Moni","Reba","Ruba")
len=arr.map(strlength)
sum=len.reduce(sum_length)
console.log(sum)

//--------------------------------------------------------------
//Question-5

 function mark(s1,s2)
{
    if(s1.mark>s2.mark)
        return s1.name
    else    
        return s2.name
}


student = [
    {sno:1,name:"Chandana",mark:90},
    {sno:2,name:"Kishore",mark:97},
    {sno:3,name:"Monica",mark:89},
    {sno:4,name:"Vinith",mark:60},
    {sno:5,name:"Arvind",mark:55},
]

student_name=student.reduce(mark)
 console.log(student_name)

//-----------------------------------------------------------------
//Question-6

function positive(num)
{
    return Math.abs(num)
}

arr=[-8,-24,-8,-30]
narr=arr.map(positive)
console.log(narr)

//----------------------------------------------------------------
//Question-7

function percentage(student)
{
    return student.percentage>70
}

student = [
    {sno:1,name:"Monica",percentage:70},
    {sno:2,name:"Naresh",percentage:80},
    {sno:3,name:"Chandana",percentage:99},
    {sno:4,name:"Suresh",percentage:65},
    {sno:5,name:"Kishore",percentage:77},
]

result=student.filter(percentage)
console.log(result)



