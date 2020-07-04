import { FormGroup } from '@angular/forms';
import { PropData } from '../models/props';
export declare function generateFormFromProps<R extends any>(data: PropData<R>): FormGroup;
