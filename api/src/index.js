const config = require('./config/environment.config')
const express = require('express')
const companyRouter = require('./routes/company.router')
const jobRouter = require('./routes/job.router')
const authenticateRouter = require('./routes/authenticate.route')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = config.PORT || 3000

const CompanyRouter = companyRouter
const JobRouter = jobRouter
const AuthenticateRouter = authenticateRouter

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (_, res)=> res.send("Trilhando Carreiras v1.0"))
app.use('/companies', CompanyRouter.getRoutes())
app.use('/jobs', JobRouter.getRoutes())
app.use('/authenticate', AuthenticateRouter.getRoutes())

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

app.use((err, req, res, next) => {
    res.status(500).send(err)
})
