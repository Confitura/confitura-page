import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AgendaEntry} from "./agenda.model";
import {CustomHttp} from "../../shared/custom-http.service";
import {Response} from "@angular/http";
import {Room} from "./room.model";
import {TimeSlot} from "./time-slot.model";
@Injectable()
export class AgendaService {


    constructor(private http: CustomHttp) {
    }

    getAll(): Observable<AgendaEntry[]> {
        return this.http.get('/agenda')
            .map((response: Response) => response.json()["_embedded"]["agendaEntries"] as AgendaEntry[]);
    }

    getRooms(): Observable<Room[]> {
        return this.http.get('/rooms?sort=displayOrder')
            .map((response: Response) => response.json()["_embedded"]["rooms"] as Room[]);
    }
    getTimeSlots(): Observable<TimeSlot[]> {
        return this.http.get('/time-slots?sort=displayOrder')
            .map((response: Response) => response.json()["_embedded"]["timeSlots"] as TimeSlot[]);
    }

    save(participant: AgendaEntry) {
        return this.http.post(`/agenda/${participant.id}`, participant);
    }

    addRoom(param: { label: string; displayOrder: number }) {
        return this.http.post(`/rooms/`, param);
    }

    addTimeSlot(param: { label: string; displayOrder: number, forAllRooms: boolean }) {
        return this.http.post(`/time-slots/`, param);
    }
}
