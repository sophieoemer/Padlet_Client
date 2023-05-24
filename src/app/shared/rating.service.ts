import { Injectable } from '@angular/core';
import {Entry} from "./entry";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';

@Injectable()

export class RatingService {

}
