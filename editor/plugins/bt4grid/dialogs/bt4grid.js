CKEDITOR.dialog.add( 'bt4grid', function( editor ) {
	// return {
	// 	title: 'Edit Simple Box',
	// 	minWidth: 200,
	// 	minHeight: 100,
	// 	contents: [
	// 		{
	// 			id: 'info',
	// 			elements: [
	// 				{
	// 					id: 'align',
	// 					type: 'select',
	// 					label: 'Align',
	// 					items: [
	// 						[ editor.lang.common.notSet, '' ],
	// 						[ editor.lang.common.alignLeft, 'left' ],
	// 						[ editor.lang.common.alignRight, 'right' ],
	// 						[ editor.lang.common.alignCenter, 'center' ]
	// 					],
	// 					// When setting up this field, set its value to the "align" value from widget data.
	// 					// Note: Align values used in the widget need to be the same as those defined in the "items" array above.
						// setup: function( widget ) {
						// 	this.setValue( widget.data.align );
						// },
						// // When committing (saving) this field, set its value to the widget data.
						// commit: function( widget ) {
						// 	widget.setData( 'align', this.getValue() );
						// }
	// 				},
	// 				{
	// 					id: 'width',
	// 					type: 'text',
	// 					label: 'Width',
	// 					width: '50px',
	// 					setup: function( widget ) {
	// 						this.setValue( widget.data.width );
	// 					},
	// 					commit: function( widget ) {
	// 						widget.setData( 'width', this.getValue() );
	// 					}
	// 				}
	// 			]
	// 		}
	// 	]
	// };
	return {
		title: 'Добавить сетку Bootstrap4',
		minWidth: 400,
		minHeight: 200,
		contents: [
			{
				id: 'tab-basic',
				label: 'Основные настройки',
				elements: [
					// {
					// 	type: 'text',
					// 	id: 'row',
					// 	label: 'Строки',
					// 	validate: function(){
					// 		var value = this && this.getValue ? this.getValue() : args[ 0 ];
					// 		if ( CKEDITOR.dialog.validate.notEmpty()(value) === true )
					// 			return	CKEDITOR.dialog.validate.number( 'Количество строк должно числом.' )(value);
					// 		else 
					// 			return CKEDITOR.dialog.validate.notEmpty( 'Укажите количество строк.' )(value);
					// 	},
					// },
					{
						type: 'select',
						id: 'colCount',
						width: '100%',
						items: [ 
							['1 колонка' , '1'],
							['2 колонки' , '2'],
							['3 колонки' , '3'], 
							['4 колонки' , '4'], 
							['6 колонок' , '6'], 
							['12 колонок' , '12'], 
							['Свое' , '0'],
						],
						label: 'Количество колонок',
						setup: function( widget ) {
							this.setValue( widget.data.colCount );
						},
						commit: function( widget ) {
							widget.setData( 'colCount', this.getValue() );
						},
						validate: function(){
							var value = this && this.getValue ? this.getValue() : args[ 0 ];
							if ( CKEDITOR.dialog.validate.notEmpty()(value) === true )
								return	CKEDITOR.dialog.validate.number( 'Количество строк должно числом.' )(value);
							else 
								return CKEDITOR.dialog.validate.notEmpty( 'Укажите количество строк.' )(value);
						},
					},
					{
						type: 'select',
						id: 'justify_content',
						width: '100%',
						items: [ 
							['С начала' , 'start'],
							['С конца' , 'end'],
							['По центру' , 'center'], 
							['Между' , 'between'], 
							['Вокруг' , 'around'], 
						],
						label: 'Горизонтальное выравнивание',
						setup: function( widget ) {
							this.setValue( widget.data.justify_content );
						},
						commit: function( widget ) {
							widget.setData( 'justify_content', this.getValue() );
						},
					},
					{
						type: 'select',
						id: 'align_items',
						width: '100%',
						items: [ 
							['Сверху' , 'start'],
							['Снизу' , 'end'],
							['По центру' , 'center'], 
							['Базово' , 'baseline'], 
							['Растянуть' , 'stretch'], 
						],
						label: 'Вертикальное выравнивание',
						setup: function( widget ) {
							this.setValue( widget.data.align_items );
						},
						commit: function( widget ) {
							widget.setData( 'align_items', this.getValue() );
						},
					}
				]
			},
			// {
			// 	id: 'tab-adv',
			// 	label: 'Дополнительно',
			// 	elements: [
			// 		{
			// 			type: 'text',
			// 			id: 'id',
			// 			label: 'Id'
			// 		}
			// 	]
			// }
		],
	};

	// 	onOk: function() {
	// 		var dialog = this;
	// 		var rows = dialog.getValueOf( 'tab-basic', 'row' );
	// 		var columns = dialog.getValueOf( 'tab-basic', 'column' );

	// 		for (var i = 0; i < Number(rows); i++) {
	// 			var bt4grid = editor.document.createElement( 'div' );
	// 			bt4grid.setAttribute( 'class', 'row' );

	// 			for (var j = 0; j < Number(columns); j++) {
	// 				col = editor.document.createElement( 'div' );
	// 				col.setAttribute( 'class', 'col-12 col-sm-' + (12 / columns) );
	// 				p = editor.document.createElement( 'p' );
	// 				p.setText( 'col-12 col-sm-' + (12 / columns) );
	// 				col.append( p );
	// 				bt4grid.append( col );
	// 			}
	// 			editor.insertElement( bt4grid );
	// 		}
	// 		editor.updateElement();

	// 	}
	// };
});
