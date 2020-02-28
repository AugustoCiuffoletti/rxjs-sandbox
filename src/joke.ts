// Produce una battuta su Chuck Norris
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

ajax("https://api.icndb.com/jokes/random").
	subscribe( 
		data => console.log(data.response.value.joke)
	);
