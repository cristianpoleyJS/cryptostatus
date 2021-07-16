export default class Asset {
    constructor ({ id,
                   rank,
                   symbol,
                   price,
                   changePercent24Hr,
                   favorite,
                   name,
                   time,
                   valuePerCurrency,
                   volume24Hr,
                   marketCap,
                   explorer
                }) {
        this.id = id
        this.rank = rank
        this.symbol = symbol
        this.price = price
        this.changePercent24Hr = changePercent24Hr
        this.favorite = favorite
        this.name = name
        this.time = time
        this.valuePerCurrency = valuePerCurrency
        this.volume24Hr = volume24Hr
        this.marketCap = marketCap
        this.explorer = explorer
    }
}
