const model = require('../models/membersModel');

class MembersService {
    async getAll() {
        let result = await model.find({});
        if (result) {
            return result;
        }
        else throw new Error('members not found');
    }

    async get(memberId) {
        let foundMember = await model.findOne({ id_number: memberId });
        if (!foundMember) {
            throw new Error('member not found');
        }
        return foundMember;
    }

    async insert(newMember) {
        let foundMemberWithSameId = await model.findOne({ id_number: newMember.id_number });
        if (foundMemberWithSameId)
            throw new Error('invalid new member id');
        else {
            await model.create( newMember );
            return newMember;
        }
    }

    async update(memberId, memberToUpdate) {
        let existingMember = await model.findOne({ id_number: memberId });
        if (!existingMember) {
            throw new Error('could not update member');
        }
        else{
            await model.findOneAndUpdate({ id_number: memberId }, { $set: memberToUpdate });
            return memberToUpdate;
        }
    }

    async delete(memberId){
        let foundMemberToDelete=await model.findOne({id_number: memberId});
        if(!foundMemberToDelete){
            throw new Error('could not delete member');
        }
        else{
            await model.deleteOne({id_number:memberId});
            return foundMemberToDelete;
        }
    }

}


const service = new MembersService;
module.exports = service;