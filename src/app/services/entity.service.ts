import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entity, EntityField } from '../models/entity.interface';
import { ENTITIES_DATA } from './data/entities.data';
import { ENTITY_FIELDS_DATA } from './data/entity-fields.data';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private entities: Entity[] = [...ENTITIES_DATA];
  private entityFields: EntityField[] = [...ENTITY_FIELDS_DATA];

  constructor() {}

  getEntities(): Observable<Entity[]> {
    return of(this.entities);
  }

  getEntity(id: number): Observable<Entity | undefined> {
    return of(this.entities.find(e => e.id === id));
  }

  addEntity(entity: Omit<Entity, 'id'>): Observable<Entity> {
    const newEntity = {
      ...entity,
      id: Math.max(...this.entities.map(e => e.id), 0) + 1
    };
    this.entities.push(newEntity);
    return of(newEntity);
  }

  updateEntity(entity: Entity): Observable<Entity> {
    const index = this.entities.findIndex(e => e.id === entity.id);
    if (index !== -1) {
      this.entities[index] = entity;
    }
    return of(entity);
  }

  deleteEntity(id: number): Observable<void> {
    this.entities = this.entities.filter(e => e.id !== id);
    return of(void 0);
  }

  getEntityFields(): Observable<EntityField[]> {
    return of(this.entityFields);
  }

  getEntityFieldsByEntityId(entityId: number): Observable<EntityField[]> {
    return of(this.entityFields.filter(field => field.entityId === entityId));
  }

  getEntityField(id: number): Observable<EntityField | undefined> {
    return of(this.entityFields.find(f => f.id === id));
  }

  addEntityField(field: Omit<EntityField, 'id'>): Observable<EntityField> {
    const entity = this.entities.find(e => e.id === field.entityId);
    const newField = {
      ...field,
      id: Math.max(...this.entityFields.map(f => f.id), 0) + 1,
      entityName: entity?.name || 'Unknown Entity'
    };
    this.entityFields.push(newField);
    return of(newField);
  }

  updateEntityField(field: EntityField): Observable<EntityField> {
    const index = this.entityFields.findIndex(f => f.id === field.id);
    if (index !== -1) {
      this.entityFields[index] = field;
    }
    return of(field);
  }

  deleteEntityField(id: number): Observable<void> {
    this.entityFields = this.entityFields.filter(f => f.id !== id);
    return of(void 0);
  }
} 