import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  p1Update;
  p2Update;
  fg: FormGroup;
  characters: String[];
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.p1Update = document.getElementById('p1nameUpdate');
    this.p2Update = document.getElementById('p2nameUpdate');
    this.fg = this.formBuilder.group({
      name1FC : [''],
      name2FC : ['']
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.fg);
    this.p1Update.innerHTML = this.fg.get('name1FC').value;
    this.p2Update.innerHTML = this.fg.get('name2FC').value;
  }
}
