import {SuppliersAndFlowersDetails} from "./SuppliersAndFlowersDetails";

export interface Supplier {
    supplier_id?: number;
    supplier_name: string;
    supplier_phone: string;
    supplier_email: string;
    supplier_address: string;
    supplied_Flowers: SuppliersAndFlowersDetails[]
}