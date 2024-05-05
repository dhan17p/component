using {db} from '../db/schema';
service MyService {

    entity parent as projection on db.parent;

}