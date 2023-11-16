import { BehaviorSubject } from 'rxjs';

export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
