import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from "rxjs/operators";
import { TitleService } from './title.service';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  buttonState: boolean = false;
  formValues = {
    title: '',
    firstName: '',
    lastName: '',
    acceptTerms: false
  };
  titleValues: any = [];
  titleresponse: [] = [];

  constructor(private titleService : TitleService ) { }

  ngOnInit() {
    this.buttonState = false;

    this.titleService.getTitles().pipe(map(items => {
      const final = items.filter( item => {
          if (item.name !== "!") {
            return true
          }
        });

        final.sort((a, b) => {
          return a.name < b.name ? -1 : 1;
        });

        return final;
      })
    ).subscribe(response => { 
      response.forEach(title => {
        if(title.isDefault === true) 
        this.formValues.title = title.name;
      });

      this.titleValues = response;    
    });
  }

  angularTestForm = (formValues) => {
    console.log(formValues);
  }

  acceptTerms = (value) => {
    this.buttonState = value;
  }
}
