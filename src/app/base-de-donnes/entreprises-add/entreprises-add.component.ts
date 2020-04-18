import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/models/Entreprise';
import { EntreprisesService } from 'src/app/utils/services/entreprises.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entreprises-add',
  templateUrl: './entreprises-add.component.html',
  styleUrls: ['./entreprises-add.component.scss']
})
export class EntreprisesAddComponent implements OnInit {
  entreprise: Entreprise = new Entreprise();
  constructor(private entrepriseService:EntreprisesService, private toastr: ToastrService, private router: Router) { }
  nom = new FormControl(this.entreprise.nom, [
    Validators.required
  ]);

  adresse = new FormControl(this.entreprise.adresse, [
    Validators.required
  ]);

  Tel = new FormControl(this.entreprise.Tel, [
    Validators.required
  ]);

  type = new FormControl(this.entreprise.type, [
    Validators.required
  ]);

  mail = new FormControl(this.entreprise.mail, [
    Validators.required
  ]);

  visavis = new FormControl(this.entreprise.visavis, [
    Validators.required
  ]);

  postevisavis = new FormControl(this.entreprise.postevisavis, [
    Validators.required
  ]);

  mailvisavis = new FormControl(this.entreprise.mailvisavis, [
    Validators.required
  ]);

  telvisavis = new FormControl(this.entreprise.telvisavis, [
    Validators.required
  ]);
  entrepriseForm: FormGroup;
  ngOnInit(): void {
    this.entrepriseForm  =  new FormGroup({
      'nom':this.nom,
      'adresse':this.adresse,
      'Tel':this.Tel,
      'type':this.type,
      'mail':this.mail,
      'visavis':this.visavis,
      'mailvisavis':this.mailvisavis,
      'telvisavis':this.telvisavis,
      'postevisavis':this.postevisavis,
    });

  }

  addNewEntreprise() {
    
    if(this.entrepriseForm.invalid){
      return this.toastr.error('Veuillez saisir les champs manquants');
    }
    this.entreprise.nom = this.nom.value;
    this.entreprise.adresse = this.adresse.value;
    this.entreprise.Tel =  this.Tel.value;
    this.entreprise.type = this.type.value;
    this.entreprise.mail = this.mail.value;
    this.entreprise.visavis =  this.visavis.value;
    this.entreprise.postevisavis =  this.postevisavis.value;
    this.entreprise.telvisavis = this.telvisavis.value;
    this.entreprise.mailvisavis = this.mailvisavis.value;
    this.entrepriseService.addEntreprise(this.entreprise).subscribe(res => {
      this.entreprise = res;
      

      this.toastr.success('Entreprise ajoutée avec succès');
      this.router.navigate(['/dashboard/baseDeDonnees/']);
      
    
    
    }, (err) => {
      console.log(err);
      this.toastr.error(err.error.message);

    })
  }

}
