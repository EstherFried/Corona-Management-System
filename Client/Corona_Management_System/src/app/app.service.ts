import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberModel } from './models/memberModel';

@Injectable({
    providedIn: 'root'
})

export class AppService {
    apiUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) { }

    getAllMembers(): Observable<MemberModel[]> {
        return this.http.get<MemberModel[]>(`${this.apiUrl}members`);
    }

    getItemById(id: string): Observable<MemberModel> {
        return this.http.get<MemberModel>(`${this.apiUrl}members/${id}`);
    }

    addItem(member: MemberModel): Observable<MemberModel> {
        return this.http.post<MemberModel>(`${this.apiUrl}members`, member);
    }

    updateItem(id: string, member: MemberModel): Observable<MemberModel> {
        return this.http.put<MemberModel>(`${this.apiUrl}members/${id}`, member);
    }

    deleteItem(id: string): Observable<MemberModel> {
        return this.http.delete<any>(`${this.apiUrl}members/${id}`);
    }
}
