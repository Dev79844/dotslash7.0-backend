const sequelize = require('../db/db')
const Business = require('../models/business')
const Competitors = require('../models/competitors')
const KeyAssets = require('../models/keyAssets')
const Metrics = require('../models/metrics')
const Country = require('../models/country')
const Address = require('../models/address')
const {Op} = require('sequelize')

Business.hasMany(Competitors,{foreignKey:'businessId'})
Business.hasMany(KeyAssets, {foreignKey: 'businessId'})
Business.hasOne(Metrics, {foreignKey: 'businessId'})
Business.hasOne(Address, {foreignKey: 'addressId'})

Country.hasMany(Address, {foreignKey: 'countryId'})
Address.belongsTo(Country, {foreignKey: 'countryId'})

exports.addBusiness = async(req,res) => {
    const t = await sequelize.transaction()
    try {
        const {name,address_line_1,address_line_2,country,city,state,zipCode,short_desc,description, ttm_revenue,ttm_profit,monthly_revenue,monthly_profit, date_found,team_size,business_model,tech_stack,growth_opportunities, reason_for_selling, financing, asking_price, asking_price_reasoning, competitors, keyAssets, customers,arr,agr, gstin, cin, pan, type} = req.body

        const [c,_] = await Country.findOrCreate({
            where:{
                countryName:country
            },
            transaction:t
        })

        console.log("country:",c.countryName);

        const newAddress = await Address.create({
            address_line_1,
            address_line_2,
            countryId: c.countryId,
            city,
            state,
            zipCode,  
        }, {transaction:t})

        const newBusiness = await Business.create({
            name,
            addressId: newAddress.addressId,
            short_desc,
            description,
            ttm_revenue,
            ttm_profit,
            monthly_revenue,
            monthly_profit,
            date_found,
            team_size,
            business_model,
            tech_stack,
            growth_opportunities,
            reason_for_selling,
            financing,
            asking_price,
            asking_price_reasoning,
            pan,
            gstin,
            cin,
            type
        }, {transaction:t})

        console.log("business id: ", newBusiness.businessId);

        for(const competitorName of competitors) {
            await Competitors.create({
                competitor: competitorName,
                businessId: newBusiness.businessId,
            }, { transaction: t });
        }

        for(const name of keyAssets) {
            await KeyAssets.create({
                name,
                businessId: newBusiness.businessId,
            }, { transaction: t });
        }

        await Metrics.create({
            customers,
            arr,
            agr,
            businessId: newBusiness.businessId
        }, {transaction: t})

        await t.commit()
        return res.status(200).json("business added")
    } catch (error) {
        console.error(error);
        await t.rollback()
        return res.status(500).json("Internal Server Error")
    }
}

exports.getAllBusinesses = async(req,res) => {
    try {
        const businesses = await Business.findAll({
            attributes: ['businessId','short_desc','description','ttm_revenue','ttm_profit','monthly_revenue','monthly_profit','date_found','team_size','business_model','tech_stack','growth_opportunities','reason_for_selling','financing','asking_price','asking_price'],
            include:[
                {
                    model: Address,
                    attributes: ['state'],
                    include: [
                        {
                            model: Country,
                            attributes: ['countryName']
                        }
                    ]
                },
                {
                    model:Competitors,
                    attributes:['competitor']
                },
                {
                    model: KeyAssets,
                    attributes: ['name']
                },
                {
                    model: Metrics,
                    attributes: ['customers','arr','agr']
                }
            ]
        })

        return res.status(200).json(businesses)
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error")
    }
}