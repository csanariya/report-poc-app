import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField } from '../models/entity.interface';

@Component({
  selector: 'app-entities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entities.component.html'
})
export class EntitiesComponent implements OnInit {
  entities: Entity[] = [];
  entityFields: { [key: number]: EntityField[] } = {};
  showAddForm = false;
  editingEntity: Entity | null = null;
  entityForm = {
    name: '',
    parentId: null as number | null,
    description: ''
  };

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
      // Load fields for each entity
      entities.forEach(entity => {
        this.loadEntityFields(entity.id);
      });
    });
  }

  loadEntityFields(entityId: number): void {
    this.entityService.getEntityFieldsByEntityId(entityId).subscribe(fields => {
      this.entityFields[entityId] = fields;
    });
  }

  getEntityFields(entityId: number): EntityField[] {
    return this.entityFields[entityId] || [];
  }

  getParentName(parentId: number | null): string {
    if (!parentId) return 'None';
    const parent = this.entities.find(e => e.id === parentId);
    return parent ? parent.name : 'Unknown';
  }

  editEntity(entity: Entity): void {
    this.editingEntity = entity;
    this.entityForm = {
      name: entity.name,
      parentId: entity.parentId,
      description: entity.description
    };
    this.showAddForm = true;
  }

  deleteEntity(entity: Entity): void {
    if (confirm('Are you sure you want to delete this entity?')) {
      // In a real application, you would call a service method here
      this.loadEntities();
    }
  }

  onSubmit(): void {
    if (this.editingEntity) {
      // In a real application, you would call a service method here
      this.showAddForm = false;
      this.editingEntity = null;
      this.entityForm = {
        name: '',
        parentId: null,
        description: ''
      };
      this.loadEntities();
    } else {
      // In a real application, you would call a service method here
      this.showAddForm = false;
      this.entityForm = {
        name: '',
        parentId: null,
        description: ''
      };
      this.loadEntities();
    }
  }

  cancelEdit(): void {
    this.showAddForm = false;
    this.editingEntity = null;
    this.entityForm = {
      name: '',
      parentId: null,
      description: ''
    };
  }
} 