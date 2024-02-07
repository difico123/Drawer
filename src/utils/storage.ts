import { isJson } from './helpers';

class AppStorage {
    get(key: string): string {
        if (!localStorage) {
            return '';
        }
        return localStorage.getItem(key) || '';
    }

    set(key: string, value: string): void {
        if (!localStorage) {
            return;
        }
        localStorage.setItem(key, value);
    }

    getObjectFromKey<T>(key: string): T | Record<string, unknown> {
        const jsonString = this.get(key);
        if (isJson(jsonString)) {
            return JSON.parse(jsonString) as T;
        }
        return {};
    }

    load(key: string, getObject = false) {
        if (getObject) {
            return JSON.parse(localStorage.getItem(key) || '{}');
        } else {
            return localStorage.getItem(key);
        }
    }

    save(key: string, data: any) {
        return localStorage.setItem(key, JSON.stringify(data));
    }
}

export const storage = new AppStorage();
