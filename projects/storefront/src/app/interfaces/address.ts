export interface AddressData
{
    selleraddress: string;
	sellerstate: string;
	sellerzipcode: string;
	sellercountry: string;
	selleremail: string;
    sellerphone: string;
	bankaccountholdername: string;
	bankaccountnumber: string;
	ifsccode: string;
	aadharnumber: string;
}

export interface Address extends AddressData
{
    id: number;
    default: boolean;
}
