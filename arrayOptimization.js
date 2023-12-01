var Input1=  ([["John", "Impact Analytics", 40000], ["Jill", "Wallmart", 50000]]);
var Output1=  [["John","Jill"],["Impact Analytics","Wallmart"],[40000,50000]]


var Input2=  ([["John", 40000, true], ["Jill", 50000],["Jog",2000]])
var Output2=  [["John","Jill"],[40000,50000],[true]]


const transformData=(arg)=>{
    let data=[]
      for (let valueIndex=0;valueIndex<arg.length;valueIndex++){
            arg[valueIndex].forEach((innerVal,index)=>{
                if(!data[index]){
                  data[index]=[innerVal] 
                }else{
                    data[index].push(innerVal)
                }
            })
        }
}

const transformData=(arg)=>{
    return arg[0].map(function(col, i) {
  return arg.map(function(row) {
    return row[i];
  });
})
}

const transformData=(arg)=>{
    return arg.reduce((acc, row, i) => {
  row.forEach((item, j) => {
    if (!acc[j]) {
      acc[j] = [];
    }
    acc[j][i] = item;
  });
  return acc;
}, []);
}

console.log(transformData(Input1))

