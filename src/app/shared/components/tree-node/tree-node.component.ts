import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity, EntityField, TreeNode, SelectedColumn } from '../../models/entity.interface';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tree-node" [style.--level]="level">
      <div class="entity-item">
        <span class="toggle-icon" (click)="toggleLocalNode()">
          {{ hasChildren ? (isExpanded ? '▼' : '▶') : '⬤' }}
        </span>
        <span class="level-label">
          {{ getLevelLabel(level) }}
        </span>
        <span class="entity-name">{{ node.entity.name }}</span>
        <button class="toggle-fields-btn" (click)="toggleLocalFields()">
          {{ isFieldsExpanded ? 'Hide Fields' : 'Show Fields' }}
        </button>
      </div>

      <div class="fields-section" *ngIf="isFieldsExpanded">
        <div class="field-item" *ngFor="let field of node.entity.fields">
          <span class="field-name">{{ field.fieldName }}</span>
          <span class="badge" [attr.data-type]="field.dataType">{{ field.dataType }}</span>
          <span class="badge" [attr.data-optional]="field.isRequired">{{ field.isRequired ? 'Required' : 'Optional' }}</span>
          <button 
            *ngIf="showColumnButtons"
            class="add-column-btn" 
            [class.remove-column-btn]="isColumnSelected(field)"
            (click)="toggleColumn(field)">
            {{ isColumnSelected(field) ? 'x' : '+' }}
          </button>
        </div>
      </div>

      <div *ngIf="isExpanded && node.children">
        <ng-container *ngFor="let child of node.children">
          <app-tree-node
            [node]="child"
            [level]="level + 1"
            [selectedColumns]="selectedColumns"
            [showColumnButtons]="showColumnButtons"
            (addColumn)="addColumn.emit($event)"
            (removeColumn)="removeColumn.emit($event)">
          </app-tree-node>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['../../styles/tree-view.scss', '../../styles/badges.scss']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  @Input() level!: number;
  @Input() selectedColumns: SelectedColumn[] = [];
  @Input() showColumnButtons: boolean = true;
  @Output() addColumn = new EventEmitter<EntityField>();
  @Output() removeColumn = new EventEmitter<number>();

  private _isExpanded: boolean = true;
  private _isFieldsExpanded: boolean = false;

  get hasChildren(): boolean {
    return this.node.children && this.node.children.length > 0;
  }

  toggleLocalNode(): void {
    this._isExpanded = !this._isExpanded;
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  toggleLocalFields(): void {
    this._isFieldsExpanded = !this._isFieldsExpanded;
  }

  get isFieldsExpanded(): boolean {
    return this._isFieldsExpanded;
  }

  isColumnSelected(field: EntityField): boolean {
    return this.selectedColumns.some(col => col.field.id === field.id);
  }

  toggleColumn(field: EntityField): void {
    if (this.isColumnSelected(field)) {
      this.removeColumn.emit(field.id);
    } else {
      this.addColumn.emit(field);
    }
  }

  getLevelLabel(level: number): string {
    return `L${level}`;
  }
} 