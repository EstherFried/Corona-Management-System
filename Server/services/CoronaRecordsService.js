// const model = require('../models/coronaRecordsModel');

// class CoronaRecordsService {
//     async getAll() {
//         let result = await model.find({});
//         if (result) {
//             return result;
//         }
//         else throw new Error('records not found');
//     }

//     async get(memberId) {
//         let foundRecord = await model.findOne({ member_id: memberId });
//         if (!foundRecord) {
//             throw new Error('corona records not found');
//         }
//         return foundRecord;
//     }

//     async insert(newCoronaRecord) {
//         let foundRecordWithSameId = await model.findOne({ member_id: newCoronaRecord.member_id });
//         if (foundRecordWithSameId)
//             throw new Error('invalid new member id');
//         else {
//             await model.create(newCoronaRecord);
//             return newCoronaRecord;
//         }
//     }

//     async update(memberId, recordToUpdate) {
//         let existingRecord = await model.findOne({ member_id: memberId });
//         if (!existingRecord) {
//             throw new Error('could not update record');
//         }
//         else {
//             await model.findOneAndUpdate({ member_id: memberId }, { $set: recordToUpdate });
//             return recordToUpdate;
//         }
//     }

//     async delete(memberId) {
//         let foundRecordToDelete = await model.findOne({ member_id: memberId });
//         if (!foundRecordToDelete) {
//             throw new Error('could not delete record');
//         }
//         else {
//             await model.deleteOne({ member_id: memberId });
//             return foundRecordToDelete;
//         }
//     }

// }


// const service = new CoronaRecordsService;
// module.exports = service;