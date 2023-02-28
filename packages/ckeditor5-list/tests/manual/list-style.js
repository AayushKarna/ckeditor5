/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import {
	Table,
	TablePropertiesEditing,
	TableCellPropertiesEditing
} from '@ckeditor/ckeditor5-table';
import List from '../../src/list';
import ListProperties from '../../src/listproperties';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import TodoList from '../../src/todolist';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [
			Essentials,
			Bold,
			Italic,
			Code,
			Heading,
			List,
			TodoList,
			Paragraph,
			ListProperties,
			Table,
			TablePropertiesEditing,
			TableCellPropertiesEditing,
			Indent,
			IndentBlock,
			RemoveFormat
		],
		toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'|',
			'removeFormat',
			'|',
			'bulletedList', 'numberedList', 'todoList',
			'|',
			'outdent',
			'indent',
			'|',
			'undo', 'redo'
		]
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
