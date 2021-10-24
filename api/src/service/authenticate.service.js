const companyRepository = require('../repository/classes/company.repository')
const Company = require('../classes/Company')
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

        return {
            company,
            jwt
        }
    }

}

module.exports = new CompanyService()
