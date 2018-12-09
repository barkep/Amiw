import {Component} from '@angular/core';
import {ThoughtsService} from './thoughts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public text: String = 'Wprowadź swoją myśl';
  public thoughts: Array<String> = [];

  constructor(
    private thoughtsService: ThoughtsService
  ) {
  }

  public addThought(): void {
    this.thoughts.push(this.text);
    this.text = '';
    ThoughtsService.saveThoughts(this.thoughts);
  }

  public removeThought(i): void {
    this.thoughts.splice(i, 1);
  }

  private ngOnInit() {
    this.thoughts = ThoughtsService.fetchThoughts();
  }
}
