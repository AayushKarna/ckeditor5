/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module table
 */

export { default as PlainTableOutput } from './plaintableoutput';
export { default as Table } from './table';
export { default as TableEditing } from './tableediting';
export { default as TableUI } from './tableui';
export { default as TableToolbar } from './tabletoolbar';
export { default as TableCellProperties } from './tablecellproperties';
export { default as TableCellPropertiesEditing } from './tablecellproperties/tablecellpropertiesediting';
export { default as TableCellPropertiesUI } from './tablecellproperties/tablecellpropertiesui';
export { default as TableCellWidthEditing } from './tablecellwidth/tablecellwidthediting';
export { default as TableProperties } from './tableproperties';
export { default as TablePropertiesEditing } from './tableproperties/tablepropertiesediting';
export { default as TablePropertiesUI } from './tableproperties/tablepropertiesui';
export { default as TableCaption } from './tablecaption';
export { default as TableCaptionEditing } from './tablecaption/tablecaptionediting';
export { default as TableCaptionUI } from './tablecaption/tablecaptionui';
export { default as TableClipboard } from './tableclipboard';
export { default as TableMouse } from './tablemouse';
export { default as MouseEventsObserver } from './tablemouse/mouseeventsobserver';
export { default as TableKeyboard } from './tablekeyboard';
export { default as TableSelection } from './tableselection';
export { default as TableUtils } from './tableutils';
export { default as TableColumnResize } from './tablecolumnresize';
export { default as TableColumnResizeEditing } from './tablecolumnresize/tablecolumnresizeediting';

export type { TableConfig } from './tableconfig';
export { default as InsertColumnCommand } from './commands/insertcolumncommand';
export { default as InsertRowCommand } from './commands/insertrowcommand';
export { default as InsertTableCommand } from './commands/inserttablecommand';
export { default as MergeCellCommand } from './commands/mergecellcommand';
export { default as MergeCellsCommand } from './commands/mergecellscommand';
export { default as RemoveColumnCommand } from './commands/removecolumncommand';
export { default as RemoveRowCommand } from './commands/removerowcommand';
export { default as SelectColumnCommand } from './commands/selectcolumncommand';
export { default as SelectRowCommand } from './commands/selectrowcommand';
export { default as SetHeaderColumnCommand } from './commands/setheadercolumncommand';
export { default as SetHeaderRowCommand } from './commands/setheaderrowcommand';
export { default as SplitCellCommand } from './commands/splitcellcommand';
export { default as ToggleTableCaptionCommand } from './tablecaption/toggletablecaptioncommand';
export { default as TableCellBackgroundColorCommand } from './tablecellproperties/commands/tablecellbackgroundcolorcommand';
export { default as TableCellBorderColorCommand } from './tablecellproperties/commands/tablecellbordercolorcommand';
export { default as TableCellBorderStyleCommand } from './tablecellproperties/commands/tablecellborderstylecommand';
export { default as TableCellBorderWidthCommand } from './tablecellproperties/commands/tablecellborderwidthcommand';
export { default as TableCellHeightCommand } from './tablecellproperties/commands/tablecellheightcommand';
export { default as TableCellHorizontalAlignmentCommand } from './tablecellproperties/commands/tablecellhorizontalalignmentcommand';
export { default as TableCellPaddingCommand } from './tablecellproperties/commands/tablecellpaddingcommand';
export { default as TableCellVerticalAlignmentCommand } from './tablecellproperties/commands/tablecellverticalalignmentcommand';
export { default as TableCellWidthCommand } from './tablecellwidth/commands/tablecellwidthcommand';
export { default as TableAlignmentCommand } from './tableproperties/commands/tablealignmentcommand';
export { default as TableBackgroundColorCommand } from './tableproperties/commands/tablebackgroundcolorcommand';
export { default as TableBorderColorCommand } from './tableproperties/commands/tablebordercolorcommand';
export { default as TableBorderStyleCommand } from './tableproperties/commands/tableborderstylecommand';
export { default as TableBorderWidthCommand } from './tableproperties/commands/tableborderwidthcommand';
export { default as TableHeightCommand } from './tableproperties/commands/tableheightcommand';
export { default as TableWidthCommand } from './tableproperties/commands/tablewidthcommand';

import './augmentation';
