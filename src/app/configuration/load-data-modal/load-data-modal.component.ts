import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-load-data-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './load-data-modal.component.html',
  styleUrls: ['./load-data-modal.component.scss']
})
export class LoadDataModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() loadData = new EventEmitter<{ entities: any[], fields: any[] }>();

  pastedContent: string = '';
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.pastedContent = e.target?.result as string;
      };
      reader.readAsText(this.selectedFile);
    }
  }

  handleLoadData(): void {
    try {
      // Extract the data from the TypeScript content
      const entitiesMatch = this.pastedContent.match(/export const ENTITIES_DATA = (\[[\s\S]*?\]);/);
      const fieldsMatch = this.pastedContent.match(/export const ENTITY_FIELDS_DATA = (\[[\s\S]*?\]);/);

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
} 