const config = require('./config/environment.config')
const express = require('express')
const companyRouter = require('./routes/company.router')
const userRouter = require('./routes/user.router')
const jobRouter = require('./routes/job.router')
const authenticateRouter = require('./routes/authenticate.route')
const subjectRouter = require('./routes/subject.router')
const chatsRouter = require('./routes/chats.router')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = config.PORT || 3000

const CompanyRouter = companyRouter
const UserRouter = userRouter
const JobRouter = jobRouter
const AuthenticateRouter = authenticateRouter
const SubjectRouter = subjectRouter

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (_, res)=> res.send("Trilhando Carreiras v1.0"))
app.use('/companies', CompanyRouter.getRoutes())
app.use('/jobs', JobRouter.getRoutes())
app.use('/authenticate', AuthenticateRouter.getRoutes())
app.use('/users', UserRouter.getRoutes())
app.use('/subjects', SubjectRouter.getRoutes())
app.use('/charts', chatsRouter.getRoutes())

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

app.use((err, req, res, next) => {
    res.status(500).send(err)
})
