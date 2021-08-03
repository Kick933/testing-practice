function analyse(arg){
    let sum = 0;
    for(let i =0; i < arg.length; i++){
        sum += arg[i];
    }
    const sorted = arg.sort((a,b) => a>b ? 1 : -1);
    let max = sorted[arg.length -1]
    let min = sorted[0]
    
    let avg = sum/arg.length;



    return `Average: ${avg}, Max: ${max}, Min: ${min}, Length: ${arg.length}`
}

module.exports = analyse