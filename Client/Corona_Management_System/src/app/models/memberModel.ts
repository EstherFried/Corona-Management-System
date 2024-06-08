import { vaccinationModel } from "./vaccinationModel";

export interface MemberModel {
    full_name: string;
    id_number: string;
    address: {
        city: string;
        street: string;
        number: string;
    };
    date_of_birth: Date;
    phone: string;
    mobile_phone: string;
    vaccinations : vaccinationModel[];
    positive_result_date: Date;
    recovery_date: Date;
}