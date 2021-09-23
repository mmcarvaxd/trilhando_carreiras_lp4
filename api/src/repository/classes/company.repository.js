const { company: companyRepository } = require('../implementations/mongo')

class CompanyRepository {
    async getCompanies(filter) {
        if(!filter) {
            filter = {}
        }

        const companies = await companyRepository.find(filter)

        return companies
    }

    async getCompany(id) {
        const company = await companyRepository.findOne({
            _id: id
        })

        return company
    }

    async createCompany(company) {
        const companyResp = await companyRepository.create(company)

        return companyResp
    }

    async updateCompany(company) {
        const companyResp = await companyRepository.updateOne({_id: company._id}, company)

        return companyResp
    }

    async deleteCompany(id) {
        const company = await companyRepository.deleteOne({_id: id})

        return company
    }
}

module.exports = new CompanyRepository()