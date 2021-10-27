import { Level } from '../../shared/enum/level.enum';
import { WorkingTime } from '../../shared/enum/working-time.enum';
import { Location } from '../../shared/enum/location.enum';
export class Job {
  _id?: string
  name: string = ""
  description: string = ""
  requirements: string = ""
  salary?: number
  level: Level = Level.ASSISTANT
  workingTime: WorkingTime = WorkingTime.FULL
  status: string = ""
  quantitiesCandidates: number = 0
  companyId: string = ""
  location: Location = Location.OFFICE
}
