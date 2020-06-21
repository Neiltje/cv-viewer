export * from './cv.service';
import { CvService } from './cv.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CvService, UserService];
