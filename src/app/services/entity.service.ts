import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Entity, EntityField } from '../shared/models/entity.interface';
import { ENTITIES_DATA } from './data/entities.data';
import { ENTITY_FIELDS_DATA } from './data/entity-fields.data';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private entities: Entity[] = [...ENTITIES_DATA];
  private entityFields: EntityField[] = [...ENTITY_FIELDS_DATA];

  constructor(private http: HttpClient) { }

  getEntities(): Observable<Entity[]> {
    // Map the entities and add their fields
    const entitiesWithFields = this.entities.map(entity => ({
      ...entity,
      fields: this.entityFields.filter(field => field.entityId === entity.id)
    }));
    return of(entitiesWithFields);
  }

  getEntity(id: number): Observable<Entity> {
    const entity = this.entities.find(e => e.id === id);
    if (entity) {
      return of({
        ...entity,
        fields: this.entityFields.filter(field => field.entityId === entity.id)
      });
    }
    throw new Error('Entity not found');
  }

  createEntity(entity: Entity): Observable<Entity> {
    const newEntity = {
      ...entity,
      id: this.entities.length + 1
    };
    this.entities.push(newEntity);
    return of(newEntity);
  }

  updateEntity(id: number, entity: Entity): Observable<Entity> {
    const index = this.entities.findIndex(e => e.id === id);
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
    const newField = {
      ...field,
      id: this.entityFields.length + 1
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