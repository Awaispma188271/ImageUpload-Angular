import { PictureService } from './../../shared/picture.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/picture.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [PictureService],
})
export class ImageComponent implements OnInit {
  public ImageFile!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {
    this.ImageFile = this.formBuilder.group({
      Title: [null, Validators.compose([])],

      ImagePath: ['', Validators.compose([])],
    });
  }
  submit() {
    var image: User = this.ImageFile.value;
    this.pictureService.ImageSave(image).subscribe((res) => {
      console.log('res', res);
      alert('File Uploaded');
    });
  }
}
