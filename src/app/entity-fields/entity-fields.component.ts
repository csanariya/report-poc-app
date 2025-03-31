import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField } from '../shared/models/entity.interface';

@Component({
  selector: 'app-entity-fields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entity-fields.component.html'
})
export class EntityFieldsComponent implements OnInit {
  entities: Entity[] = [];
  entityFields: EntityField[] = [];
  showAddForm = false;
  editingField: EntityField | null = null;
  fieldForm: Omit<EntityField, 'id'> = {
    entityId: 0,
    entityName: '',
    fieldName: '',
    description: '',
    dataType: 'string',
    isRequired: false
  };

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
    this.loadEntityFields();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

  loadEntityFields(): void {
    this.entityService.getEntityFields().subscribe(fields => {
      this.entityFields = fields;
    });
  }

  getEntityName(entityId: number): string {
    const entity = this.entities.find(e => e.id === entityId);
    return entity ? entity.name : 'Unknown Entity';
  }

  editField(field: EntityField): void {
    this.editingField = field;
    this.fieldForm = {
      entityId: field.entityId,
      entityName: field.entityName,
      fieldName: field.fieldName,
      description: field.description,
      dataType: field.dataType,
      isRequired: field.isRequired
    };
    this.showAddForm = true;
  }

  deleteField(field: EntityField): void {
    if (confirm('Are you sure you want to delete this field?')) {
      this.entityService.deleteEntityField(field.id).subscribe(() => {
        this.loadEntityFields();
      });
    }
  }

  onSubmit(): void {
    if (this.editingField) {
      const updatedField: EntityField = {
        ...this.fieldForm,
        id: this.editingField.id
      };
      this.entityService.updateEntityField(updatedField).subscribe(() => {
        this.showAddForm = false;
        this.editingField = null;
        this.fieldForm = {
          entityId: 0,
          entityName: '',
          fieldName: '',
          description: '',
          dataType: 'string',
          isRequired: false
        };
        this.loadEntityFields();
      });
    } else {
      const selectedEntity = this.entities.find(e => e.id === this.fieldForm.entityId);
      const fieldToAdd: Omit<EntityField, 'id'> = {
        ...this.fieldForm,
        entityName: selectedEntity?.name || 'Unknown Entity'
      };
      this.entityService.addEntityField(fieldToAdd).subscribe(() => {
        this.showAddForm = false;
        this.fieldForm = {
          entityId: 0,
          entityName: '',
          fieldName: '',
          description: '',
          dataType: 'string',
          isRequired: false
        };
        this.loadEntityFields();
      });
    }
  }

  cancelEdit(): void {
    this.showAddForm = false;
    this.editingField = null;
    this.fieldForm = {
      entityId: 0,
      entityName: '',
      fieldName: '',
      description: '',
      dataType: 'string',
      isRequired: false
    };
  }
} 