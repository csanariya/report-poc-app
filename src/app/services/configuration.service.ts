import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Entity, EntityField } from '../shared/models/entity.interface';
import { ENTITIES_DATA } from './data/entities.data';
import { ENTITY_FIELDS_DATA } from './data/entity-fields.data';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private entitiesSubject = new BehaviorSubject<Entity[]>([...ENTITIES_DATA]);
  private entityFieldsSubject = new BehaviorSubject<EntityField[]>([...ENTITY_FIELDS_DATA]);

  entities$ = this.entitiesSubject.asObservable();
  entityFields$ = this.entityFieldsSubject.asObservable();

  constructor() {
    // Load any saved configuration from localStorage if available
    this.loadSavedConfiguration();
  }

  private loadSavedConfiguration(): void {
    const savedEntities = localStorage.getItem('entities');
    const savedFields = localStorage.getItem('entityFields');

    if (savedEntities) {
      this.entitiesSubject.next(JSON.parse(savedEntities));
    }

    if (savedFields) {
      this.entityFieldsSubject.next(JSON.parse(savedFields));
    }
  }

  getEntities(): Entity[] {
    return this.entitiesSubject.value;
  }

  getEntityFields(): EntityField[] {
    return this.entityFieldsSubject.value;
  }

  updateEntities(entities: Entity[]): void {
    this.entitiesSubject.next(entities);
    localStorage.setItem('entities', JSON.stringify(entities));
  }

  updateEntityFields(fields: EntityField[]): void {
    this.entityFieldsSubject.next(fields);
    localStorage.setItem('entityFields', JSON.stringify(fields));
  }

  resetToDefault(): void {
    this.entitiesSubject.next([...ENTITIES_DATA]);
    this.entityFieldsSubject.next([...ENTITY_FIELDS_DATA]);
    localStorage.removeItem('entities');
    localStorage.removeItem('entityFields');
  }
} 