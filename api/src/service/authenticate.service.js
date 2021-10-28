const companyRepository = require('../repository/classes/company.repository')
const Company = require('../classes/Company')
const userRepository = require('../repository/classes/user.repository')
const User = require('../classes/User')
const AuthenticateError = require('../errors/auth.error')
const tokenUtil = require('../Util/token.util')

class CompanyService {

    /**
     * @param {Auth} auth Authenticate Object
     */
    async authCompany(auth) { 
        const companyResponse = await companyRepository.getCompanyByEmail(auth.email)
        if(!companyResponse) {
            throw new AuthenticateError("E-mail or password was invalid")
        }

        let company = new Company(companyResponse)
        let isValid = company.login(auth.password)

        if(!isValid) {
            throw new AuthenticateError("E-mail or password was invalid")
        }

        let token = tokenUtil.createRandomStringForToken(20)

        await companyRepository.updateToken(company._id, token)

        let jwt = tokenUtil.generateCompanyJWT(company, token)
        company.token = jwt
        return {
            company,
            jwt
        }
    }

    async authUser(auth) { 
        const userResponse = await userRepository.getUserByEmail(auth.email)
        if(!userResponse) {
            throw new AuthenticateError("E-mail or password was invalid")
        }

        let user = new User(userResponse)
        let isValid = user.login(auth.password)

        if(!isValid) {
            throw new AuthenticateError("E-mail or password was invalid")
        }

        let token = tokenUtil.createRandomStringForToken(25)

        await userRepository.updateToken(user._id, token)

        let jwt = tokenUtil.generateUserJWT(user, token)
        user.token = jwt
        return {
            user,
            jwt
        }
    }
}

module.exports = new CompanyService()
