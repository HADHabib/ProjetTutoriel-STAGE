import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
  private data: string = 'ListData';

  constructor() {}

  setSettings(data: any) {
    localStorage.setItem(this.data, JSON.stringify(data));
  }

  getUserSettings() {
    let data = localStorage.getItem(this.data);
    return JSON.parse(data || '{}');
  }

  clearUserSettings() {
    localStorage.removeItem(this.data);
  }

  cleanAll() {
    localStorage.clear();
  }
}
