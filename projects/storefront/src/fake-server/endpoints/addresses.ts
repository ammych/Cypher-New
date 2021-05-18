import { Address } from '../../app/interfaces/address';
import { addresses, getId } from '../database/addresses';
import { Observable, of } from 'rxjs';
import { clone, delayResponse } from '../utils';
import { EditAddressData } from '../../app/api/base';

export function getDefaultAddress(): Observable<Address> {
    return of(clone(addresses.find(x => x.default) || null));
}

export function getAddress(addressId: number): Observable<Address> {
    return of(clone(addresses.find(x => x.id === addressId) || null));
}

export function getAddresses(): Observable<Address[]> {
    return of(clone(addresses));
}

export function addAddress(data: EditAddressData): Observable<Address> {
    const address: Address = {
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
        ...data,
    };

    if (addresses.length < 1) {
        address.default = true;
    }

    if (address.default) {
        addresses.forEach(x => x.default = false);
    }

    addresses.push(address);

    return delayResponse(of(address));
}

export function editAddress(addressId: number, data: EditAddressData): Observable<Address> {
    const address = addresses.find(x => x.id === addressId);

    address.selleraddress = data.selleraddress;
    address.sellerstate = data.sellerstate;
    address.sellerzipcode = data.sellerzipcode;
    address.sellercountry = data.sellercountry;
    address.selleremail = data.selleremail;
    address.sellerphone = data.sellerphone;
    address.bankaccountholdername = data.bankaccountholdername;
    address.bankaccountnumber = data.bankaccountnumber;
    address.ifsccode = data.ifsccode;
    address.aadharnumber = data.aadharnumber;
    address.default = data.default;

    if (address.default) {
        addresses.forEach(x => x.default = x.id === addressId);
    }

    return delayResponse(of(address));
}

export function delAddress(addressId: number): Observable<void> {
    const index = addresses.findIndex(x => x.id === addressId);

    if (index !== -1) {
        const address = addresses.splice(index, 1)[0];

        if (address.default && addresses.length > 0) {
            addresses[0].default = true;
        }
    }

    return delayResponse(of(null));
}
