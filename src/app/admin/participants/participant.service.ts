import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Participant} from './participant.model';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class ParticipantService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Participant[]> {
    return this.http.get<EmbeddedParticipants>('/participants')
      .pipe(
        map(response => response._embedded.participants)
      );
  }


  getOne(id: string): Observable<Participant> {
    return this.http.get<Participant>(`/participants/${id}`);
  }

  save(participant: Participant) {
    if (participant.id) {
      return this.http.put(`participants/${participant.id}`, participant);
    } else {
      return this.http.post(`participants`, participant);
    }
  }

  sendReminder() {
    return this.http.post(`/participants/reminder`, {});
  }

  sendTickets() {
    return this.http.post(`/participants/ticket`, {});
  }

  sendSurveys() {
    return this.http.post(`/participants/survey`, {});
  }

  arrived(id: string): Observable<any> {
    return this.http.post<any>(`/participants/${id}/arrived`, {}, {observe: 'response'})
      .pipe(
        map((response: HttpResponse<any>) => ({status: response.status, json: response.body}))
      );
  }
}

class EmbeddedParticipants {
  _embedded: { participants: Participant[] };
}
