CKEDITOR.plugins.add( 'bt4grid', {
	requires: 'widget',
    icons: 'bt4grid',	

    init: function( editor ) {
    	//  editor.widgets.add( 'bt4grid', {
    	//  	button: 'Добавить сетку',
    	//  	 template:
		   //      '<div class="row">' +
		   //      '</div>'
	    //     // Widget code.
	    // } );
		
		editor.addCommand( 'col', new CKEDITOR.dialogCommand( 'colDialog' ) );

		CKEDITOR.dialog.add( 'bt4grid', this.path + 'dialogs/bt4grid.js' );
		CKEDITOR.dialog.add( 'colDialog', this.path + 'dialogs/colDialog.js' );


		if ( editor.contextMenu ) {
			
			editor.addMenuGroup( 'bt4gridGroup' );
			editor.addMenuItem( 'bt4gridItem', {
				label: 'Редактировать ячейку',
				icon: this.path + 'icons/bt4grid.png',
				command: 'col',
				group: 'bt4gridGroup'
			});

			editor.contextMenu.addListener( function( element ) {
				if ( element.getAscendant(  function( el ) {
					if ( el.$.className ) {
						return el.$.className.match(/(col-md-?.*?)(?:\s+|$)/);
					}
				    return false;
				}, true  ) ) {
					return { bt4gridItem: CKEDITOR.TRISTATE_OFF };
				}
			});
		}

		// if ( editor.contextMenu ) {
			
		// 	// Add a context menu group with the Edit Abbreviation item.
		// 	editor.addMenuGroup( 'bt4gridGroup' );
		// 	editor.addMenuItem( 'bt4gridItem', {
		// 		label: 'Редактировать ячейку',
		// 		icon: this.path + 'icons/bt4grid.png',
		// 		command: 'col',
		// 		group: 'bt4grid'
		// 	});

		// 	editor.contextMenu.addListener( function( element ) {
		// 		if ( element.getAscendant( 'p', true ) ) {
		// 			return { bt4gridItem: CKEDITOR.TRISTATE_OFF };
		// 		}
		// 	});
		// }

	    editor.widgets.add( 'bt4grid', {
            allowedContent: 'div(!row);div(!col-*-*)',
			button: 'Создать сетку',
			parts: {
				bt4grid: 'div.row',
			},
			requiredContent: 'div(row)',
   			dialog: 'bt4grid',
		    editables: {
	            content: {
	            	selector: '.row',
	            },
			},
			template:
				'<div class="row">' +
				'</div>',

			upcast: function( element ) {
				return element.hasClass( 'row' );
			},
			init: function() {
				var colCount = this.element.getChildCount();
				// for (var i = 1; i <= colCount; i++) {
				// 	this.initEditable( 'content' + i, {
				// 		selector: '.row ' +' > div:nth-child('+ i +') '
				// 	} );
				// }
				if (( colCount == 1 ) || (colCount == 2) || (colCount == 3) || (colCount == 4) || (colCount == 6) || (colCount == 12))
					this.setData( 'colCount', colCount );
				else 
					this.setData( 'colCount', '0' );

				if ( this.element.hasClass( 'justify-content-start' ) )
					this.setData( 'justify_content', 'start' );
				if ( this.element.hasClass( 'justify-content-end' ) )
					this.setData( 'justify_content', 'end' );
				if ( this.element.hasClass( 'justify-content-center' ) )
					this.setData( 'justify_content', 'center' );
				if ( this.element.hasClass( 'justify-content-between' ) )
					this.setData( 'justify_content', 'between' );
				if ( this.element.hasClass( 'justify-content-around' ) )
					this.setData( 'justify_content', 'around' );

				if ( this.element.hasClass( 'align-items-start' ) )
					this.setData( 'align_items', 'start' );
				if ( this.element.hasClass( 'align-items-end' ) )
					this.setData( 'align_items', 'end' );
				if ( this.element.hasClass( 'align-items-center' ) )
					this.setData( 'align_items', 'center' );
				if ( this.element.hasClass( 'align-items-baseline' ) )
					this.setData( 'align_items', 'baseline' );
				if ( this.element.hasClass( 'align-items-stretch' ) )
					this.setData( 'align_items', 'stretch' );

			},
			data: function() {
           		if (this.data.colCount ) {
	               	var colCount = this.data.colCount;
	                var content = '';
	         		for (var i = 1; i <= colCount; i++) {
	               		content = content + '<div class="col-12 col-md-' + 12/colCount + '">' +
		                                   '    Col ' + i + ' контент' +
		                                   '</div>';
	             	}
	                if ( colCount != '0' ) {
		             	if ( this.element.getChildCount() < 1 ) {
		             		this.element.appendHtml(content);
		             	} else if ( this.data.colCount != this.element.getChildCount() ){
		             		this.element.setHtml(content);
		             	}
		            }
	    //          	for (var i = 1; i <= colCount; i++) {
					// 	this.initEditable( 'content' + i, {
					// 		selector: '.row ' +' > div:nth-child('+ i +') '
					// 	} );
					// }
				}

				this.element.removeClass( 'justify-content-start' );
				this.element.removeClass( 'justify-content-end' );
				this.element.removeClass( 'justify-content-center' );
				this.element.removeClass( 'justify-content-between' );
				this.element.removeClass( 'justify-content-around' );
				this.element.removeClass( 'align-items-start' );
				this.element.removeClass( 'align-items-end' );
				this.element.removeClass( 'align-items-center' );
				this.element.removeClass( 'align-items-baseline' );
				this.element.removeClass( 'align-items-stretch' );

				if ( this.data.align_items )
					this.element.addClass( 'align-items-' + this.data.align_items );

				if ( this.data.justify_content )
					this.element.addClass( 'justify-content-' + this.data.justify_content );
			
			}
		} );

		// editor.widgets.add( 'col', {
  //           allowedContent: 'div(!col-md*)',
		// 	button: 'Редактировать ячейку',
		// 	requiredContent: 'div(col-md*)',
		// 	draggable: false,
		// 	wrapper: false,
  //  			dialog: 'col',
		//     editables: {
	 //            content: {
	 //            	selector: '.col-md',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-auto',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-1',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-2',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-3',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-4',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-5',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-6',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-7',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-8',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-9',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-10',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-11',
	 //            },
	 //            content: {
	 //            	selector: '.col-md-12',
	 //            },
		// 	},
		// 	template:
		// 		'<div>' +
		// 		'</div>',

		// 	upcast: function( element ) {
		// 		if ( element.attributes.class ) {
		// 			return element.attributes.class.match(/(col-md-.*?)(?:\s+|$)/);
		// 		}
		// 		else 
		// 			return false;
		// 	},
		// 	init: function() {
		// 		if ( this.element.hasClass( 'col-md' ) )
		// 			this.setData( 'col', '0' );
		// 		if ( this.element.hasClass( 'col-md-auto' ) )
		// 			this.setData( 'col', 'auto' );
		// 		if ( this.element.hasClass( 'col-md-1' ) )
		// 			this.setData( 'col', '1' );
		// 		if ( this.element.hasClass( 'col-md-2' ) )
		// 			this.setData( 'col', '2' );
		// 		if ( this.element.hasClass( 'col-md-3' ) )
		// 			this.setData( 'col', '3' );
		// 		if ( this.element.hasClass( 'col-md-4' ) )
		// 			this.setData( 'col', '4' );
		// 		if ( this.element.hasClass( 'col-md-5' ) )
		// 			this.setData( 'col', '5' );
		// 		if ( this.element.hasClass( 'col-md-6' ) )
		// 			this.setData( 'col', '6' );
		// 		if ( this.element.hasClass( 'col-md-7' ) )
		// 			this.setData( 'col', '7' );
		// 		if ( this.element.hasClass( 'col-md-8' ) )
		// 			this.setData( 'col', '8' );
		// 		if ( this.element.hasClass( 'col-md-9' ) )
		// 			this.setData( 'col', '9' );
		// 		if ( this.element.hasClass( 'col-md-10' ) )
		// 			this.setData( 'col', '10' );
		// 		if ( this.element.hasClass( 'col-md-11' ) )
		// 			this.setData( 'col', '11' );
		// 		if ( this.element.hasClass( 'col-md-12' ) )
		// 			this.setData( 'col', '12' );
		// 	},
		// 	data: function() {
		// 		this.element.removeClass( 'col-md' ) ;				
		// 		this.element.removeClass( 'col-md-auto' );
		// 		this.element.removeClass( 'col-md-1' );
		// 		this.element.removeClass( 'col-md-2' );
		// 		this.element.removeClass( 'col-md-3' );
		// 		this.element.removeClass( 'col-md-4' );
		// 		this.element.removeClass( 'col-md-5' );
		// 		this.element.removeClass( 'col-md-6' );
		// 		this.element.removeClass( 'col-md-7' );
		// 		this.element.removeClass( 'col-md-8' );
		// 		this.element.removeClass( 'col-md-9' );
		// 		this.element.removeClass( 'col-md-10' );
		// 		this.element.removeClass( 'col-md-11' );
		// 		this.element.removeClass( 'col-md-12' );

		// 		if ( this.data.col )
		// 			if ( this.data.col === '0' )
		// 				this.element.addClass( 'col-md' );
		// 			else 
		// 				this.element.addClass( 'col-md-' + this.data.col );
			
		// 	}
		// } );

  //       editor.ui.addButton( 'col', {
		//     label: 'Редактировать ячейку',
		//     command: 'col',
		// });
        editor.addContentsCss( this.path + 'styles/bt4grid.css' );
		// editor.addCommand( 'bt4grid', new CKEDITOR.dialogCommand( 'bt4gridDialog' ) );
    	
    }
});