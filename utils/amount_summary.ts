export interface AmountSummary{
    earned : number;
    spend : number;
    net : number;
};

export function calculateSpendVsEarned(amounts : string[]) : AmountSummary{
let earned = 0;
let spend = 0;
let net = 0;
for(const amount of amounts ){
    const value = parseFloat(
        amount.replace('USD', '').replace(/,/g, '').replace(/\s/g, '')
    )

    if(value > 0){
        earned += value;
    }else{
        spend += Math.abs(value);
    }  
}
return {
    earned,
    spend,
    net: Number((earned - spend).toFixed(2))
};
}