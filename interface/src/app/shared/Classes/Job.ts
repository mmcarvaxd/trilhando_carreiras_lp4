import { Level } from '../../shared/enum/level.enum';
import { WorkingTime } from '../../shared/enum/working-time.enum';
import { Location } from '../../shared/enum/location.enum';
import { Company } from './Company';
export class Job {
  _id?: string
  name: string = ""
  description: string = ""
  requirements: string[] = []
  salary?: number
  level: Level = Level.ASSISTANT
  workingTime: WorkingTime = WorkingTime.FULL
  status: string = "openned"
  quantitiesCandidates: number = 0
  companyId: string = "6175cb7ecd370343c1b984f4"
  company: any
  location: Location = Location.OFFICE
}
