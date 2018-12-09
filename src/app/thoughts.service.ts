import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  constructor() { }

  public static saveThoughts(thoughts: Array<String>): void {
    localStorage.setItem('thoughtsList', JSON.stringify(thoughts));
  }

  public static fetchThoughts(): Array<String> {
    const data = JSON.parse(localStorage.getItem('thoughtsList'));
    return data ? data : [];
  }
}
