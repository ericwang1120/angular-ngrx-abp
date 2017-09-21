import { Http, Headers, Response, RequestOptions } from '@angular/http';

export function jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let localization = localStorage.getItem('localization');
    let headers = new Headers({ 'Content-Type': 'application/json' });

    if (currentUser && currentUser.accessToken) {
        headers.append('Authorization', 'Bearer ' + currentUser.accessToken);
    }

    if (localization) {
        headers.append('.AspNetCore.Culture', localization);
    }

    return new RequestOptions({ headers: headers });
}
