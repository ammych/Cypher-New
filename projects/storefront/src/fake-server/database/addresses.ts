import { Address } from '../../app/interfaces/address';

let lastId = 0;

export function getId(): number {
    return ++lastId;
}

export const addresses: Address[] = [
    {
        id: getId(),
		selleraddress: '',
        sellerstate: '',
        sellerzipcode: '',
        sellercountry: '',
        selleremail: '',
        sellerphone: '',
        bankaccountholdername: '',
        bankaccountnumber: '',
        ifsccode: '',
        aadharnumber: '',
        default: true,
    },
];
