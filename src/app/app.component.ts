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
  fighterImgs: Map<String, HTMLImageElement> = new Map<String, HTMLImageElement>();
  back: HTMLImageElement;
  border: HTMLImageElement;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

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
      name1FC: [''],
      name2FC: [''],
      fighter1: [],
      fighter2: []
    });
    const tempFighterImgs = new Map<String, HTMLImageElement>();
    this.characters.forEach(function (value) {
      const img = new Image(400, 400);
      img.src = 'assets/' + (value.toLowerCase().replace(/\./g, '').replace(/ /g, '_')) + '.png';
      tempFighterImgs.set(value, img);
    });
    this.back = new Image();
    this.back.src = 'assets/background.jpg';
    this.border = new Image();
    this.border.src = 'assets/border.png';
    this.fighterImgs = tempFighterImgs;
    console.log(this.fighterImgs);
    const thumbnail = <HTMLCanvasElement>document.getElementById('thumbnailPreview');
    const ctx = thumbnail.getContext('2d');
    ctx.font = '80px bigNoodle';
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log(this.fg);
    const tempfg = this.fg;
    const tempImgs = this.fighterImgs;
    const thumbnail = <HTMLCanvasElement>document.getElementById('thumbnailPreview');
    const ctx = thumbnail.getContext('2d');
    ctx.font = '90px bigNoodle';
    ctx.fillStyle = 'white';
    const p1 = this.fighterImgs.get(this.fg.get('fighter1').value);
    const p2 = tempImgs.get(tempfg.get('fighter2').value);
    console.log(p1);
    console.log(p2);
    ctx.drawImage(this.back, 0, -100);
    ctx.drawImage(p1, 100, 200, 325, 325);
    console.log('drew p1');
    ctx.drawImage(p2, 825, 200, 325, 325);
    console.log('drew p2');
    ctx.drawImage(this.border, 0, 0);
    ctx.fillText(this.fg.get('name1FC').value, 150, 120);
    ctx.fillText(this.fg.get('name2FC').value, 825, 120);
    ctx.font = '180px bigNoodle';
    ctx.fillText('VS', 560, 400);
    // const newImg = thumbnail.toDataURL();
    // document.write('<img src="' + newImg + '" width="250" height="250"/>');
  }
}
