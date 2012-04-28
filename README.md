Form Customizer
=========

####A UI Plugin for [jQuery][1]  
_Copyright ©2012 Blake Jason Struhs UI/UX Design & Development_

Overview
--------

As an extension to the jQuery library, Form Customizer provides the tools to bridge the gap between customized form styling and seamless user experience. An instance of the plugin can be applied individually or globally to any HTML `<form>` tag. A variety of options are available including built-in themes, or the ability to apply your own custom theme.

Form Customizer was built with flexibility in mind. All styling is applied through external stylesheets - not inline styles. This makes for easy integration within your own CSS stylesheets and removes the need to try to override inline CSS applied via javascript.


Usage
-----

#### Required Files  
Be sure to include the latest version of jQuery: [Minified][2], [Uncompressed][3]

    <script src="jquery-1.7.2.min.js"></script>  

Below that, you will need to include the Form Customizer JS file:

    <script src="form.customizer.1.0.min.js"></script>  

Also, you will need to include the Form Customizer CSS file (or copy into your own CSS file):  

    <link rel="stylesheet" href="form.customizer.1.0.css" />

#### Built-In Themes  
To use either of the built-in themes, include the theme CSS file (or copy into your own CSS file):

    <link rel="stylesheet" href="form.customizer.themes.css" />

Also you will need to include the theme images located in the `css/images/` directory.

#### Initializing the plugin  
Initialize an instance of Form Customizer on any `<form>` tag:

    <script type="text/javascript">  
      $(document).ready(function() {  
        $('form').formCustomizer({});  
      });  
    </script>

Choosing a specific form or group of forms by way of ID `<form id="myform">` or Class `<form class="myforms">`:
  
    <script type="text/javascript">  
      $(document).ready(function() {  
        $('#myform').formCustomizer({});  
      });  
    </script>  

OR

    <script type="text/javascript">  
      $(document).ready(function() {  
        $('.myforms').formCustomizer({});  
      });  
    </script>

#### Structuring form markup
Form Customizer will work on any HTML form, but is optimized for forms that are structured correctly using the HTML `<fieldset>` tag. This tag is used to group related form elements, and within the plugin, clears floats applied to form element containers that helps render the proper layout. 
  
    <form id="myform">  
      <fieldset>  
        <input type="text" name="text-one" id="text-one" size="30" />  
        <input type="text" name="text-two" id="text-two" size="50" />  
      </fieldset>  

      <fieldset>  
        <label for="textarea">Textarea</label>  
        <textarea name="textarea" id="textarea" cols="50" rows="5"></textarea>  
      </fieldset>

      <fieldset>  
        <input type="checkbox" name="checkbox" value="option 1" id="checkbox-one" /><label for="checkbox-one">Option 1</label>  
        <input type="checkbox" name="checkbox" value="option 2" id="checkbox-two" /><label for="checkbox-two">Option 2</label>  
        <input type="checkbox" name="checkbox" value="option 3" id="checkbox-three" /><label for="checkbox-three">Option 3</label>  
      </fieldset>  
    </form>  

Options
-------

#### Elements  
The first set of options provides the ability to choose form elements to include in an instance of the function. All default to _true_.

`text:` _boolean_  
`textarea:` _boolean_  
`password:` _boolean_  
`checkbox:` _boolean_  
`radio:` _boolean_  
`select:` _boolean_  
`file:` _boolean_  
`submit:` _boolean_  
`button:` _boolean_  
`reset:` _boolean_  
`label:` _boolean_  

__Example:__ To turn off customization of all `<input type="text" />` and `<input type="checkbox">` elements in an instance, set them to _false_:

    <script type="text/javascript">  
      $(document).ready(function() {  
        $('#myform').formCustomizer({  
          text: false,  
          checkbox: false  
        });  
      });  
    </script>  

Other options include:

#### Theme  
Choose a built-in theme, or set to _false_ to create your own custom theme. Built-in theme options include `'light'` or `'dark'`. Defaults to `'light'`.

`theme:` _string_

__Supported options:__ `'light'`, `'dark'`, `false`  

#### Container Type  
Choose the type of HTML tag that will render on form elements. Supported HTML tags include `<div>`, `<span>`, or `<p>`. Defaults to `'div'`.

`containerType:` _string_

__Supported options:__ `'div'`, `'span'`, `'p'`  

#### Container Class  
The CSS class to be applied to the Container Type HTML tag. Defaults to `'customized'`.

`containerType:` _string_  

#### File Button Text  
The text to be displayed on `<input type="file" />` element's button. Defaults to `'Browse'`.

`fileButtonText:` _string_  

#### File Max Length  
A maximum character limit for the displayed file text in `<input type="file" />` element's textbox. Defaults to `25`.

`fileButtonText:` _number_    

#### Inline Layouts    
Set an element type to display inline. Supported elements include `<input type="checkbox" />`, `<input type="radio" />`, `<input type="submit" />`, `<input type="button" />`, `<input type="reset" />`. All default to _true_.  

`inlineCheckbox:` _boolean_    
`inlineRadio:` _boolean_  
`inlineSubmit:` _boolean_  
`inlineButton:` _boolean_  
`inlineReset:` _boolean_  

__Example:__ To set checkboxes to display as a list in an instance, you would set `inlineCheckbox:` to `false`:  

    <script type="text/javascript">  
      $(document).ready(function() {  
        $('#myform').formCustomizer({  
          inlineCheckbox: false  
        });  
      });  
    </script>  


Contact
-------

Clone: `git clone git://github.com/blakestruhs/form-customizer.git`  
Github: <https://github.com/blakestruhs>  
Email: <blakejasonstruhs@gmail.com>  

[1]: http://jquery.com/
[2]: http://code.jquery.com/jquery-1.7.2.min.js
[3]: http://code.jquery.com/jquery-1.7.2.js