import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entity, EntityField, TreeNode, SelectedColumn } from '../../models/entity.interface';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
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