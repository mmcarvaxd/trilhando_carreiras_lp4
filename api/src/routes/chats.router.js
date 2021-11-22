const { Router } = require('express')
const app = Router()
const { job } = require('../repository/implementations/mongo')


class ChartsRouter {
    getRoutes() {
        app.get('/desc', async (req, res) => {
            const aggregatorOpts = [{
                $unwind: "$requirements"
            }, {
                $group: {
                    _id: "$requirements",
                    count: { $sum: 1 }
                }
            }, {
                $sort: {
                    count: -1
                }
            }, {
                $limit: 10
            }]

            let test = await job.aggregate(aggregatorOpts)

            res.json(test)
        })

        app.get('/asc', async (req, res) => {
            const aggregatorOpts = [{
                $unwind: "$requirements"
            }, {
                $group: {
                    _id: "$requirements",
                    count: { $sum: 1 }
                }
            }, {
                $sort: {
                    count: 1
                }
            }, {
                $limit: 10
            }]

            let test = await job.aggregate(aggregatorOpts)

            res.json(test)
        })

        return app
    }


}

module.exports = new ChartsRouter()