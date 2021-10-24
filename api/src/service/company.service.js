const companyRepository = require('../repository/classes/company.repository')
const Company = require('../classes/Company')

class CompanyService {
    async getCompanies() { 
        const companies = await companyRepository.getCompanies()

        return companies
    }

    /**
     * @param {Number} id Company id
     */
     async getCompany(id) {
        const company = await companyRepository.getCompany(id)
        
        return company
     }

    /**
     * @param {Company} company Company
     */
     async createCompany(company) { 
        company.validateName()
        company.validateDescription()
        company.validateBusinessField()
        company.validateCompanyRegister()
        company.validateEmail()
        company.validatePassword()
        company.hashPassword()
        
        delete company._id 

        const companyResponse = await companyRepository.createCompany(company)

        return companyResponse
    }

    /**
     * @param {Company} company Company
     */
     async updateCompany(company) {
        company.validateName()
        company.validateDescription()
        company.validateBusinessField()
        company.validateCompanyRegister()

        const companyResponse = await companyRepository.updateCompany(company)

        return companyResponse
    }

    /**
     * @param {Number} id Company id
     */
    async deleteCompany(id) {
        await companyRepository.deleteCompany(id)
        return
    }
}

module.exports = new CompanyService()
