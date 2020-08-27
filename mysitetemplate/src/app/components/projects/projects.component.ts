import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  editorText = '';
  constructor() { }

  ngOnInit() {
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log('changed', event);
    this.editorText = event['editor']['root']['innerHTML'];
  }
}
