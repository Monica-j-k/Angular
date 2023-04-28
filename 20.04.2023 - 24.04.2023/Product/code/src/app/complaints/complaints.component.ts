import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {
      name: 'Electronics',
      flag: 'http://localhost/mac.jpg',
    },
    {
      name: 'Cosmetics',
      flag: 'http://localhost/lipgloss.jpg',
    },
    {
      name: 'Books',
      flag: 'http://localhost/book1.jpg',
    },
    {
      name: 'Groceries',
      flag: 'http://localhost/coffee.jpg',
    },
  ];
  //
  fname: any;
  email: any;
  message: any;
  product: any;
  errors: string[] = [];
  
  constructor(private cs: ComplaintsService) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((prod) => (prod ? this._filterStates(prod) : this.pproducts.slice()))
    );
  }

  ngOnInit(): void {}
  submit() {
    this.errors = [];
    if (this.errors.length == 0) {
      let obj = {
        id: Math.round(Math.random() * 100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product: this.product,
      };
      this.cs.postComplaint(obj).subscribe({
        next: () => {
          console.log(obj);
          alert('Submitted Successfully');
          (this.fname = ''),
            (this.email = ''),
            (this.message = ''),
            (this.product = '');
        },
        error: () => alert('please fill appropriately'),
      });
    }
  }
  
  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
