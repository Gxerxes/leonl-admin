declare const sessionStorage, localStorage;

import {Injectable, Optional} from '@angular/core'
import {IStorageSetConfig} from './IStorage'
import {Driver, DRIVERS} from './Driver'
import {isNil} from './helpers'

@Injectable()
export class LockerConfig {

    constructor(
        @Optional() public driverNamespace?: string,
        @Optional() public defaultDriverType?: Driver,
        @Optional() public namespaceSeparator?: string
    ) {
        if (isNil(this.driverNamespace)) {
            this.driverNamespace = '';
        }

        if (isNil(this.defaultDriverType)) {
            this.defaultDriverType = DRIVERS.SESSION;
        }

        if (isNil(this.namespaceSeparator)) {
            this.namespaceSeparator = ':';
        }
    }
}

@Injectable()
export class Locker {

    public static DRIVERS = DRIVERS;

    private driver: Driver;
    private namespace: string;
    private separator: string;

    constructor(public lockerConfig: LockerConfig) {
        const {defaultDriverType} = lockerConfig;


    }

    public setNamespace(namespace: string = this.lockerConfig.driverNamespace) {
        this.namespace = namespace;
    }

    public setSeparator(separator: string = this.lockerConfig.namespaceSeparator) {
        this.separator = separator;
    }

    public useDriver(driver: Driver) {
        return new Locker({
            defaultDriverType: driver.isSupported() ? driver: DRIVERS.MEMORY,

        });
    }
}

