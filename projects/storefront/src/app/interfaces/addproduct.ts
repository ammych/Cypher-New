export interface AddproductData {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    email: string;
    phone: string;
}

export interface Addproduct extends AddproductData {
    id: number;
    default: boolean;
}
