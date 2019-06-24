import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { GearNode, GEAR_DATA } from './tree.data.component';

/** Flat node with expandable and level information */
interface GearFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.scss'],
})
export class TreeComponent {
  private transformer = (node: GearNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  };

  constructor() {
    this.dataSource.data = GEAR_DATA;
  }

  // tslint:disable-next-line:member-ordering
  treeControl = new FlatTreeControl<GearFlatNode>(
    node => node.level,
    node => node.expandable
  );

  // tslint:disable-next-line:member-ordering
  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  // tslint:disable-next-line:member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: GearFlatNode) => node.expandable;
}
