import {Presentation} from "../../../profile/shared/presentation.model";
import {Tag} from "../../../profile/shared/tag.model";
export class AgendaEntry {
    id: string;
    timeSlotId: string;
    roomId: string;
    label: string;
    presentationId: string;
    presentation: Presentation;
    tags: Tag[];
}
