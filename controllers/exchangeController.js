const exchangeService = require("../services/exchangeService");

module.exports = async (req, res, next) => {
    
    let {base, amount} = req.query

    if(!base) return next('Base is required')

    try{

        let data;
        let resp = await exchangeService(base.toUpperCase())

        if(resp.status !== 200) return next(resp.statusText)
        
        amount = Number(amount)
        data = resp.data.rates

        if( typeof amount === 'number' && amount > 0 ){
            for(let key in data){
                data[key] = data[key] * amount
            }
        }

        res.send({ success:true, data })
  
    }catch(e){

        next(e.message)
    }
}