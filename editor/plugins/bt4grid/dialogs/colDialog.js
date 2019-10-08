CKEDITOR.dialog.add( 'colDialog', function( editor ) {
	return {
		title: 'Добавить сетку Bootstrap4',
		minWidth: 400,
		minHeight: 200,
		contents: [
			{
				id: 'tab-basic',
				label: 'Основные настройки',
				elements: [
					{
						type: 'select',
						id: 'col',
						width: '100%',
						items: [ 
							['Авто - по ширине контейнера' , '0'],
							['Авто - по ширине контента' , 'auto'],
							['1/12' , '1'],
							['2/12' , '2'],
							['3/12' , '3'], 
							['4/12' , '4'], 
							['5/12' , '4'], 
							['6/12' , '6'], 
							['7/12' , '7'], 
							['8/12' , '8'], 
							['9/12' , '9'], 
							['10/12' , '10'], 
							['11/12' , '11'], 
							['12/12' , '12'] 
						],
						label: 'Ширина колонки',
						setup: function( element ) {
							value = element.$.className.match( /col-md-?(.*?)(?:\s+|$)/)[1];
							if (value && value != "") {
								this.setValue( value );
							}
							else {
								this.setValue( 0 );
							}
						},
						commit: function( element ) {
							element.removeClass( 'col-md' ) ;				
							element.removeClass( 'col-md-auto' );
							element.removeClass( 'col-md-1' );
							element.removeClass( 'col-md-2' );
							element.removeClass( 'col-md-3' );
							element.removeClass( 'col-md-4' );
							element.removeClass( 'col-md-5' );
							element.removeClass( 'col-md-6' );
							element.removeClass( 'col-md-7' );
							element.removeClass( 'col-md-8' );
							element.removeClass( 'col-md-9' );
							element.removeClass( 'col-md-10' );
							element.removeClass( 'col-md-11' );
							element.removeClass( 'col-md-12' );

							if ( this.getValue() )
								if ( this.getValue() === '0' )
									element.addClass( 'col-md' );
								else 
									element.addClass( 'col-md-' + this.getValue() );
						},
						validate: CKEDITOR.dialog.validate.notEmpty( 'Укажите количество строк.' ),
					},
					// {
					// 	type: 'select',
					// 	id: 'justify_content',
					// 	width: '100%',
					// 	items: [ 
					// 		['С начала' , 'start'],
					// 		['С конца' , 'end'],
					// 		['По центру' , 'center'], 
					// 		['Между' , 'between'], 
					// 		['Вокруг' , 'around'], 
					// 	],
					// 	label: 'Горизонтальное выравнивание',
					// },
					// {
					// 	type: 'select',
					// 	id: 'align_items',
					// 	width: '100%',
					// 	items: [ 
					// 		['Сверху' , 'start'],
					// 		['Снизу' , 'end'],
					// 		['По центру' , 'center'], 
					// 		['Базово' , 'baseline'], 
					// 		['Растянуть' , 'stretch'], 
					// 	],
					// 	label: 'Вертикальное выравнивание',
					// }
				]
			},
		],
		onShow: function() {
			var selection = editor.getSelection();
			var element = selection.getStartElement();
			if ( element )
				element = element.getAscendant(  function( el ) {
					if ( el.$.className ) {
						return el.$.className.match(/(col-md-?.*?)(?:\s+|$)/);
					}
				    return false;
				}, true  );

			if ( element  )
				this.insertMode = false;
			else 
				this.insertMode = true;

			this.element = element;

			if ( !this.insertMode )
				this.setupContent( this.element );
		},
		onOk: function() {
			var el = this.element;
			this.commitContent( el );
			if ( this.insertMode )
				editor.insertElement( el );
		}
	};
});
