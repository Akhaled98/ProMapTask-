import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Project} from 'src/app/shared/models/project.model';


@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent implements OnInit, OnChanges {

  @ViewChild('close') modal!: ElementRef;
  @Input() project: Project = {};
  @Output() addEditEventEmitter: EventEmitter<{ project: Project }> = new EventEmitter();
  projectForm: FormGroup = new FormGroup({});

  constructor() {
  }

  resetForm() {
    this.projectForm.reset();
  }

  ngOnChanges() {
    this.projectForm.patchValue({
      projectName: this.project.projectName,
      projectDate: this.project.projectDate,
      description: this.project.description,
      projectUrl: this.project.projectUrl,
    })
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      projectDate: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      projectUrl: new FormControl(null, [Validators.required,Validators.pattern('^https://[a-z .]*[0-9]*')])
    });
  }
 

  addEditProject() {
    const newEditedProject: Project = {
      id: this.project.id || undefined,
      projectName: this.projectForm.get('projectName')?.value,
      projectDate: this.projectForm.get('projectDate')?.value,
      description: this.projectForm.get('description')?.value,
      projectUrl: this.projectForm.get('projectUrl')?.value,
    }
    this.addEditEventEmitter.emit({project: newEditedProject});
    this.projectForm.reset();
    this.modal.nativeElement.click();
  }


}




