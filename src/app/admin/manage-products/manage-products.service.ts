import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ManageProductsService extends ApiService {
  uploadProductsCSV(file: File): Observable<unknown> {
    // console.log('uploadProductsCSV called with file:', file);

    if (!this.endpointEnabled('import')) {
      console.warn(
        'Endpoint "import" is disabled. To enable change your environment.ts config',
      );
      return EMPTY;
    }

    console.log('Endpoint "import" is enabled.');

    // Ensure the token is set for only development, sensitive data
    localStorage.setItem(
      'authorization_token',
      'Basic ' + btoa('szemeredik:TEST_PASSWORD'),
    ); //TODO delete in production

    return this.getPreSignedUrl(file.name).pipe(
      switchMap((url: string) => {
        // console.log('Received signed URL:', url);
        return this.http.put(url, file, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'text/csv',
          },
        });
      }),
    );
  }

  private getPreSignedUrl(fileName: string): Observable<string> {
    const url = this.getUrl('import', 'import');
    console.log('Requesting signed URL for file:', fileName, 'from URL:', url);

    const headers = {
      Authorization: this.getAuthorizationToken() || '', // Ensure the token is added
    };

    return this.http
      .get<{ url: string }>(url, {
        headers,
        params: {
          name: fileName,
        },
      })
      .pipe(
        tap((response: { url: string }) => {
          console.log('Received response from getPreSignedUrl:', response);
        }),
        map((response: { url: string }) => response.url),
      );
  }

  private getAuthorizationToken(): string | null {
    return localStorage.getItem('authorization_token');
  }
}
