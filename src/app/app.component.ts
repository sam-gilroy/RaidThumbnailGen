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
  fighterImgs: Map<String, string> = new Map<String, string>();
  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.characters = ['Bayonetta',
      'Bowser',
      'Bowser Jr.',
      'Captain Falcon',
      'Chrom',
      'Cloud',
      'Corrin',
      'Daisy',
      'Dark Pit',
      'Dark Samus',
      'Diddy Kong',
      'Donkey Kong',
      'Dr. Mario',
      'Falco',
      'Fox',
      'Ganondorf',
      'Ice Climbers',
      'Ike',
      'Incineroar',
      'Isabelle',
      'Inkling',
      'Jigglypuff',
      'Ken',
      'King Dedede',
      'King K. Rool',
      'Kirby',
      'Link',
      'Little Mac',
      'Lucario',
      'Lucas',
      'Lucina',
      'Luigi',
      'Mario',
      'Marth',
      'Mega Man',
      'Meta Knight',
      'Mewtwo',
      'Mii Brawler',
      'Mii Swordfighter',
      'Mii Gunner',
      'Mr. Game & Watch',
      'Ness',
      'Olimar',
      'Pac-Man',
      'Palutena',
      'Peach',
      'Pichu',
      'Pikachu',
      'Piranha Plant',
      'Pit',
      'Pokemon Trainer',
      'Richter',
      'Ridley',
      'R.O.B.',
      'Robin',
      'Rosalina',
      'Roy',
      'Ryu',
      'Samus',
      'Sheik',
      'Shulk',
      'Simon',
      'Snake',
      'Sonic',
      'Toon Link',
      'Villager',
      'Wario',
      'Wii Fit Trainer',
      'Wolf',
      'Yoshi',
      'Young Link',
      'Zelda',
      'Zero Suit Samus'];
    console.log(this.characters);
    this.p1Update = document.getElementById('p1nameUpdate');
    this.p2Update = document.getElementById('p2nameUpdate');
    this.fg = this.formBuilder.group({
      name1FC : [''],
      name2FC : [''],
      fighter1 : [],
      fighter2 : []
    });
    const tempFighterImgs = new Map<String, string>();
    this.characters.forEach(function (value) {
      tempFighterImgs.set(value, 'assets/' + (value.toLowerCase().replace(/\./g, '').replace(/ /g, '_')) + '.png');
    });
    this.fighterImgs = tempFighterImgs;
    console.log(this.fighterImgs);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.fg);
    const tempfg = this.fg;
    const tempImgs = this.fighterImgs;
    this.p1Update.innerHTML = this.fg.get('name1FC').value;
    this.p2Update.innerHTML = this.fg.get('name2FC').value;
    const thumbnail = <HTMLCanvasElement>document.getElementById('thumbnailPreview');
    const ctx = thumbnail.getContext('2d');
    const p1 = new Image();
    const p2 = new Image();
    p1.src = this.fighterImgs.get(this.fg.get('fighter1').value);
    p1.onload = function() {
      p2.src = tempImgs.get(tempfg.get('fighter2').value);
      ctx.drawImage(p1, 0, 0, 250, 250);
      p2.onload = function() {
        ctx.drawImage(p2, 830, 0, 250, 250);
        const newImg = thumbnail.toDataURL();
        document.write('<img src="' + newImg + '" width="250" height="250"/>');
      };
    };
  }
}
