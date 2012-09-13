/*
 *
 * Form Customizer: A UI Plugin for jQuery
 * 
 * Version: 1.1.0
 * Released: Unreleased
 * Author:  Blake Struhs
 * Email: blakejasonstruhs@gmail.com
 * Github:  @blakestruhs
 *
 * Copyright ©2012 Blake Jason Struhs UI/UX Design & Development
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to dealin the
 * Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
(function($){

	$.fn.formCustomizer = function(options) {
		
		var elements = $.extend({
			text:     true,
			textarea: true,
			password: true,
			checkbox: true,
			radio:    true,
			select:   true,
			file:     true,
			submit:   true,
			button:   true,
			reset:    true,
			label:    true
		}, options);

		var settings = $.extend({
			theme:          'light',
 			containerType:  'div',
			containerClass: 'customized',
			fileButtonText: 'Browse',
			fileMaxLength:  25,
			inlineCheckbox: true,
			inlineRadio:    true,
			inlineSubmit:   true,
			inlineButton:   true,
			inlineReset:    true
		}, options);

		if (this.length) {

			return this.each(function(){

				if ($(this).prop('tagName').toLowerCase() == 'form') {

					/* Create the array of theme options */
					var themeOptions = ['light', 'dark'];

					/* Create the array of container type options */
					var containerTypeOptions = ['div', 'span', 'p'];

					/* If a container type is specified in the settings options, check if it matches
					 * an available container type in the array, if not, default to first type */
					var container = '<' + (($.inArray(settings.containerType, containerTypeOptions) === -1) ? containerTypeOptions[0] : settings.containerType) + ' class="' + settings.containerClass + '" />';

					/* If a theme is specified in the settings options, check if it matches an available theme
					 * in the array, if not, default to first theme, then add the css class to the form object */
					$(this).addClass((settings.theme === false) ? 'custom-theme' : (($.inArray(settings.theme, themeOptions) === -1) ? themeOptions[0] : settings.theme));
					
					/* Create and return the element list object */
					function createElementList(object) {

						/* Associate a key pairing with the element */ 
						var elementMap = {
							text:     'input:text',
							textarea: 'textarea',
							password: 'input:password',
							checkbox: 'input:checkbox',
							radio:    'input:radio',
							select:   'select',
							file:     'input:file',
							submit:   'input:submit',
							button:   'input:button',
							reset:    'input:reset',
							label:    'label'
						};

						/* Filter out element specified as false in the elements options */
						var elementFilter = $.map(elements, function(val, option){
							if (val === true) {
								return option;
							}
						});

						/* Compare the element map to the returned element filter array, assign
						 * the filtered element map keys to the new element list object paired
						 * with the elements */ 
						var elementList = {}

						$.each(elementMap, function(key, e){
							if ($.inArray(key, elementFilter) != -1) {
								elementList[key] = object.find(e);
							}
						});

						return elementList;
					}
					
					/* Initialize each item in the element list */
					$.each(createElementList($(this)), function(key, obj){

						/* Wrap the element with the parent container and add a relative css class */
						obj.wrap(container).parent().addClass(key);

						/* Sort each element for custom tasks */
						function itemIs(val) {
							return (key === val);
						}

						/* Custom tasks */
						// if (itemIs('text')) {}
			        	// if (itemIs('textarea')) {}
			      		// if (itemIs('password')) {}

			        	if (itemIs('checkbox')) {
			        		obj.after('<span class="faux-' + key + '"></span>');
			        		obj.change(function() {
								$(this).next('.faux-' + key).toggleClass('selected', this.checked);
							});

							if (settings.inlineCheckbox) {
								obj.parent().addClass('inline');
							}
			        	}

			        	if (itemIs('radio')) {
			        		obj.after('<span class="faux-' + key + '"></span>');
							obj.change(function() {
								obj.each(function(){
						            if (this.checked) {
						            	$(this).next('.faux-' + key).addClass('selected');
							            $('.faux-' + key + ':has([name="' + $(this).attr('name') + '])').removeClass('selected');
							        } else {
							        	$(this).next('.faux-' + key).removeClass('selected');
							        }	
						        });
						    });

							if (settings.inlineRadio) {
								obj.parent().addClass('inline');
							}
			        	}

			        	if (itemIs('select')) {
			        		obj.each(function() {
								var title = $(this).attr('title');

					            if ($('option:selected', this).val() != '') {
					            	title = $('option:selected', this).text();
					            }

				                $(this).after('<span class="faux-' + key + '">' + title + '<span class="arrow"></span></span>');
				                $(this).change(function() {
				                    val = $('option:selected', this).text();
				                    $(this).next().html(val + '<span class="arrow"></span>');
				        		});
			        		});
			        	}

			        	if (itemIs('file')) {
			        		obj.each(function() {
				                $(this).after('<div class="faux-' + key + '"><span class="input"></span><span class="button">' + settings.fileButtonText + '</span></div>');

				                var input  = $(this).next('.faux-' + key).children('.input');
			        			var button = $(this).next('.faux-' + key).children('.button');

			        			input.add(button).click(function() {
			        				return ($(this).parent().prev('input:file').is(':disabled') ? false : $(this).parent().prev('input:file').trigger('click'));
			        			});
			        			
			        			$(this).change(function() {
				                    input.html($(this).val().length < settings.fileMaxLength ? $(this).val() : $(this).val().substr(0, settings.fileMaxLength) + '...');
				        		});
			        		});
			        	}

			        	if (itemIs('submit')) {
			        		if (settings.inlineSubmit) {
								obj.parent().addClass('inline');
							}
			        	}

			        	if (itemIs('button')) {
			        		if (settings.inlineButton) {
								obj.parent().addClass('inline');
							}
			        	}

			        	if (itemIs('reset')) {
			        		obj.each(function() {
			        			$(this).click(function() {
									$('.selected').removeClass('selected');
			        				$('.faux-select').each(function() {
			        					$(this).html($($(this).prev($('select')).children()[0]).text() + '<span class="arrow"></span>');
			        				});
			        				$('.faux-file .input').html('');
			        			});
			        		});

			        		if (settings.inlineReset) {
								obj.parent().addClass('inline');
							}
			        	}

			        	if (itemIs('label')) {
							obj.each(function(){
								var el    = $('#' + $(this).attr('for'));
								var label = {}

								label['el']       = el;
								label['type']     = el.prop('tagName').toLowerCase() == 'input' ? el.attr('type') : el.prop('tagName').toLowerCase();
								label['disabled'] = el.is(':disabled') ? true : false;

								$(this).parent().addClass('for-' + label.type + (label.disabled ? ' disabled' : '')); 
								$(this).bind('mouseenter', function() {
									label.el.addClass('over');
								});
								$(this).bind('mouseleave', function() {
									label.el.removeClass('over');
								});
							});
			        	}

			        	/* Grouped tasks */
						if (itemIs('text') || itemIs('textarea') || itemIs('password') || itemIs('submit') || itemIs('button') || itemIs('reset') || itemIs('label')) {
							obj.bind('mouseenter', function() {
								$(this).addClass('over');
							});
				        	obj.bind('mouseleave', function() {
				        		$(this).removeClass('over');
				        	});
				        	obj.bind('mousedown', function() {
			        			$(this).addClass('down');
			        		});
			        		obj.bind('mouseup', function() {
			        			$(this).removeClass('down');
			        		});
				        	obj.bind('focus', function() {
				    			$(this).addClass('focus');
				        	});
				        	obj.bind('blur', function() {
				    			$(this).removeClass('focus');
				        	});
				        	obj.each(function() {
				        		$(this).addClass(($(this).is(':disabled')) ? ' disabled' : '');
				        	});
						} else if (itemIs('checkbox') || itemIs('radio') || itemIs('select')) {
							obj.bind('mouseenter', function() {
			        			$(this).next('.faux-' + key).addClass('over');
				        	});
				        	obj.bind('mouseleave', function() {
				        		$(this).next('.faux-' + key).removeClass('over');
				        	});
				        	obj.bind('mousedown', function() {
			        			$(this).next('.faux-' + key).addClass('down');
			        		});
			        		obj.bind('mouseup', function() {
			        			$(this).next('.faux-' + key).removeClass('down');
			        		});
				        	obj.bind('focus', function() {
				    			$(this).next('.faux-' + key).addClass('focus');
				        	});
				        	obj.bind('blur', function() {
				    			$(this).next('.faux-' + key).removeClass('focus');
				        	});
				        	obj.each(function() {
				        		$(this).next('.faux-' + key).addClass(($(this).is(':disabled')) ? ' disabled' : '');
				        	});
						} else if (itemIs('file')) {
							obj.next('.faux-' + key).bind('mouseenter', function() {
		        				$(this).addClass('over');
				        	});
				        	obj.next('.faux-' + key).bind('mouseleave', function() {
				        		$(this).removeClass('over');
				        	});
				        	obj.next('.faux-' + key).bind('mousedown', function() {
			        			$(this).addClass('down');
			        		});
			        		obj.next('.faux-' + key).bind('mouseup', function() {
			        			$(this).removeClass('down');
			        		});
				        	obj.next('.faux-' + key).bind('focus', function() {
				    			$(this).addClass('focus');
				        	});
				        	obj.next('.faux-' + key).bind('blur', function() {
				    			$(this).removeClass('focus');
				        	});
				        	obj.next('.faux-' + key).each(function() {
				        		$(this).addClass(($(this).prev('input:file').is(':disabled')) ? ' disabled' : '');
				        	});
						}
					});

				}

			});

		} else {

			return false;

		}

	}

})(jQuery);