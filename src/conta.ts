import { Observable } from 'rxjs';
 
const observable = new Observable( (publisher) => {
  publisher.next(1);
  publisher.next(2);
  publisher.next(3);
  setTimeout(() => {
    publisher.next(4);
    publisher.complete();
  }, 1000);
});
 
console.log('Prima della subscribe');
observable.subscribe({
  next: (x) => { console.log('Ricevo ' + x); },
  error: (err) => { console.error("Si e' verificato un errore: " + err); },
  complete: () => { console.log('Fine!'); }
});
console.log('Subito dopo la subscribe');
