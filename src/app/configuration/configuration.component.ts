import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entity, EntityField } from '../shared/models/entity.interface';
import { ConfigurationService } from '../services/configuration.service';
import { FilterByEntityIdPipe } from '../shared/pipes/filter-by-entity-id.pipe';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FilterByEntityIdPipe],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  entities: Entity[] = [];
  entityFields: EntityField[] = [];
  selectedEntity: Entity | null = null;
  editingEntity: Entity | null = null;
  editingField: EntityField | null = null;
  newEntity: Partial<Entity> = {};
  newField: Partial<EntityField> = {};

  constructor(private configService: ConfigurationService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.entities = this.configService.getEntities();
    this.entityFields = this.configService.getEntityFields();
  }

  selectEntity(entity: Entity): void {
    this.selectedEntity = entity;
    this.editingEntity = null;
    this.editingField = null;
  }

  startEditEntity(entity: Entity): void {
    this.editingEntity = { ...entity };
  }

  saveEntity(): void {
    if (this.editingEntity) {
      const updatedEntities = this.entities.map(e => 
        e.id === this.editingEntity!.id ? this.editingEntity! : e
      );
      this.configService.updateEntities(updatedEntities);
      this.entities = updatedEntities;
      this.editingEntity = null;
    }
  }

  cancelEditEntity(): void {
    this.editingEntity = null;
  }

  addNewEntity(): void {
    if (this.newEntity.name) {
      const newEntity: Entity = {
        id: Math.max(...this.entities.map(e => e.id)) + 1,
        name: this.newEntity.name,
        parentId: this.newEntity.parentId || null,
        description: this.newEntity.description || '',
        fields: []
      };
      
      const updatedEntities = [...this.entities, newEntity];
      this.configService.updateEntities(updatedEntities);
      this.entities = updatedEntities;
      this.newEntity = {};
    }
  }

  deleteEntity(entity: Entity): void {
    if (confirm(`Are you sure you want to delete the entity "${entity.name}"?`)) {
      const updatedEntities = this.entities.filter(e => e.id !== entity.id);
      const updatedFields = this.entityFields.filter(f => f.entityId !== entity.id);
      
      this.configService.updateEntities(updatedEntities);
      this.configService.updateEntityFields(updatedFields);
      
      this.entities = updatedEntities;
      this.entityFields = updatedFields;
      
      if (this.selectedEntity?.id === entity.id) {
        this.selectedEntity = null;
      }
    }
  }

  startEditField(field: EntityField): void {
    this.editingField = { ...field };
  }

  saveField(): void {
    if (this.editingField) {
      const updatedFields = this.entityFields.map(f => 
        f.id === this.editingField!.id ? this.editingField! : f
      );
      this.configService.updateEntityFields(updatedFields);
      this.entityFields = updatedFields;
      this.editingField = null;
    }
  }

  cancelEditField(): void {
    this.editingField = null;
  }

  addNewField(): void {
    if (this.selectedEntity && this.newField.fieldName) {
      const newField: EntityField = {
        id: Math.max(...this.entityFields.map(f => f.id)) + 1,
        entityId: this.selectedEntity.id,
        entityName: this.selectedEntity.name,
        fieldName: this.newField.fieldName,
        dataType: this.newField.dataType || 'string',
        isRequired: this.newField.isRequired || false,
        description: this.newField.description || ''
      };
      
      const updatedFields = [...this.entityFields, newField];
      this.configService.updateEntityFields(updatedFields);
      this.entityFields = updatedFields;
      this.newField = {};
    }
  }

  deleteField(field: EntityField): void {
    if (confirm(`Are you sure you want to delete the field "${field.fieldName}"?`)) {
      const updatedFields = this.entityFields.filter(f => f.id !== field.id);
      this.configService.updateEntityFields(updatedFields);
      this.entityFields = updatedFields;
    }
  }

  resetToDefault(): void {
    this.configService.resetToDefault();
    this.loadData();
    this.selectedEntity = null;
    this.editingEntity = null;
    this.editingField = null;
    this.newEntity = {};
    this.newField = {};
  }

  // Helper methods to safely access editing objects
  getEditingEntity(): Entity | null {
    return this.editingEntity;
  }

  getEditingField(): EntityField | null {
    return this.editingField;
  }

  // Safe getters for template bindings
  getEditingEntityName(): string {
    return this.editingEntity?.name || '';
  }

  getEditingEntityParentId(): number | null {
    return this.editingEntity?.parentId || null;
  }

  getEditingFieldName(): string {
    return this.editingField?.fieldName || '';
  }

  getEditingFieldDataType(): string {
    return this.editingField?.dataType || 'string';
  }

  getEditingFieldIsRequired(): boolean {
    return this.editingField?.isRequired || false;
  }

  // Safe setters for template bindings
  setEditingEntityName(value: string): void {
    if (this.editingEntity) {
      this.editingEntity.name = value;
    }
  }

  setEditingEntityParentId(value: number | null): void {
    if (this.editingEntity) {
      this.editingEntity.parentId = value;
    }
  }

  setEditingFieldName(value: string): void {
    if (this.editingField) {
      this.editingField.fieldName = value;
    }
  }

  setEditingFieldDataType(value: string): void {
    if (this.editingField) {
      this.editingField.dataType = value;
    }
  }

  setEditingFieldIsRequired(value: boolean): void {
    if (this.editingField) {
      this.editingField.isRequired = value;
    }
  }
} 