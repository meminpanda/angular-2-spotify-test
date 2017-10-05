import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlSpotify:string= "https://api.spotify.com/v1/";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){
    let headers = new Headers();
        headers.append('Authorization', 'Bearer BQCaEWdARrOR-4IAt3NlpHezPJ2plQvXhVCNhAqXel8gwFheUmEJWCh_IC4VTUj10fzJUOhWfgWBUwd6pj-qKQ');

    let query = `search?q=${ termino }&type=artist`;
    let url   = this.urlSpotify + query;

    return this.http.get( url, { headers } )
            .map( res =>{
              //console.log(res.json().artists.items);
              return this.artistas = res.json().artists.items;
            })

  }

  getArtista( id:string ){
    let headers = new Headers();
        headers.append('Authorization', 'Bearer BQCaEWdARrOR-4IAt3NlpHezPJ2plQvXhVCNhAqXel8gwFheUmEJWCh_IC4VTUj10fzJUOhWfgWBUwd6pj-qKQ');

    let query = `artists/${ id }`;
    let url   = this.urlSpotify + query;

    return this.http.get( url, { headers } )
            .map( res =>{
              return res.json();
            })

  }

  getTop( id:string ){
    let headers = new Headers();
        headers.append('Authorization', 'Bearer BQCaEWdARrOR-4IAt3NlpHezPJ2plQvXhVCNhAqXel8gwFheUmEJWCh_IC4VTUj10fzJUOhWfgWBUwd6pj-qKQ');

    let query = `artists/${ id }/top-tracks?country=US`;
    let url   = this.urlSpotify + query;

    return this.http.get( url, { headers } )
            .map( res =>{
              return res.json().tracks;
            })

  }



}
