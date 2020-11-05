import { Abrigo } from '../../../../common/abrigo';
import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';


@Injectable()
export class AbrigoService{
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    requestBuffer = [];
    constructor(private http: HttpClient) {}

    create(abrigo: Abrigo): Observable<Abrigo> {
        this.requestBuffer[0] = "create"
        this.requestBuffer[1] = abrigo
        return this.http.post<any>(this.taURL + "/abrigo", this.requestBuffer, {headers: this.headers})
            .pipe(
                retry(2),
                map( res => {if (res.sucess) {return abrigo} else {return null}})
            )
    }
}
