import { Component, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import loader from '@monaco-editor/loader';

@Component({
  selector: 'app-load-data-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './load-data-modal.component.html',
  styleUrls: ['./load-data-modal.component.scss']
})
export class LoadDataModalComponent implements AfterViewInit, OnDestroy {
  @Output() closeModal = new EventEmitter<void>();
  @Output() loadData = new EventEmitter<{ entities: any[], fields: any[] }>();
  @ViewChild('editorContainer') editorContainer!: ElementRef;

  private editor: any = null;
  selectedFile: File | null = null;

  ngAfterViewInit() {
    this.initializeEditor();
  }

  private async initializeEditor() {
    // Configure the loader
    loader.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
    
    // Load monaco
    const monaco = await loader.init();
    
    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: '',
      language: 'typescript',
      theme: 'vs-light',
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 14,
      lineNumbers: 'on',
      roundedSelection: false,
      scrollbar: {
        vertical: 'visible',
        horizontal: 'visible',
        useShadows: false,
        verticalScrollbarSize: 10,
        horizontalScrollbarSize: 10
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (this.editor) {
          this.editor.setValue(e.target?.result as string);
        }
      };
      reader.readAsText(this.selectedFile);
    }
  }

  handleLoadData(): void {
    if (!this.editor) return;

    try {
      const content = this.editor.getValue();
      const entitiesMatch = content.match(/export const ENTITIES_DATA = (\[[\s\S]*?\]);/);
      const fieldsMatch = content.match(/export const ENTITY_FIELDS_DATA = (\[[\s\S]*?\]);/);

      if (entitiesMatch && fieldsMatch) {
        const entities = JSON.parse(entitiesMatch[1]);
        const fields = JSON.parse(fieldsMatch[1]);

        this.loadData.emit({
          entities,
          fields
        });
        this.close();
      } else {
        alert('Invalid data format. Please provide valid ENTITIES_DATA and ENTITY_FIELDS_DATA.');
      }
    } catch (error) {
      console.error('Parsing error:', error);
      alert('Error parsing data. Please check the format and try again.');
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.dispose();
    }
  }
} 