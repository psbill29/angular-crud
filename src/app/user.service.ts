import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}` + '/get')
  }

  addUser(user: User): Observable<Object> {
    return this.httpClient.post<User[]>(`${this.baseUrl}` + '/post', user)
  }

  getUserById(id: number): Observable<Object> {
    return this.httpClient.get<User>(`${this.baseUrl}` + '/getById/' + `${id}`)
  }


  deleteUserByName(name: string): Observable<Object> {
    return this.httpClient.delete<User>(`${this.baseUrl}` + '/deleteByName/' + `${name}`)
  }
}
