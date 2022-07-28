import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileuploadService {
  constructor(private http: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();

    formData.append('file', file, file.name);
    return this.http.post('https://file.io', formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
