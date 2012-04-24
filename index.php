<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Form Customizer | Blake Jason Struhs UI/UX Design &amp; Development</title>
  <meta name="description" content="">
  <meta name="author" content="Blake Jason Struhs">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="css/form.customizer.css">
  <style type="text/css">
  	::selection {background: #767676;}
	::-moz-selection {background: #767676;}
	body {background: #ebebeb;}
	header h1 {font-size: 2.0em; font-family: 'Museo300', Helvetica, Arial, sans-serif; font-weight: normal; margin-bottom: 2.0em;}
	#container {padding: 50px;}
	#text-fields .customized.text, #text-fields-disabled .customized.text {float: left;}
  </style>
</head>
<body>
	<div id="container">
		<div id="main" role="main">
			<header><h1>Form Customizer v1.0</h1></header>
			<div class="content-group clear">
				<div class="content-group-item shadow">
					<form class="customize">
						<fieldset id="text-fields">
							<input type="text" name="text-one" id="text-one" placeholder="Placeholder" />
							<input type="text" name="text-two" id="text-two" />
						</fieldset>

						<fieldset>
							<label for="text-three">Text Label</label>
							<input type="text" name="text-three" id="text-three" size="40" />
							<input type="text" name="text-three-disabled" id="text-three-disabled" size="40" disabled="disabled" />
						</fieldset>

						<fieldset>
							<label for="textarea">Textarea</label>
							<textarea name="textarea" id="textarea" cols="50" rows="5"></textarea>
							<textarea name="textarea-disabled" id="textarea-disabled" cols="50" rows="5" disabled="disabled"></textarea>
						</fieldset>

						<fieldset>
							<input type="checkbox" name="checkbox" value="option 1" id="checkbox-one" /><label for="checkbox-one">Option 1</label>
							<input type="checkbox" name="checkbox" value="option 2" id="checkbox-two" /><label for="checkbox-two">Option 2</label>
							<input type="checkbox" name="checkbox" value="option 3" id="checkbox-three" /><label for="checkbox-three">Option 3</label>
						</fieldset>

						<fieldset>
							<input type="checkbox" name="checkbox-disabled" value="option 1" id="checkbox-one-disabled" disabled="disabled" /><label for="checkbox-one-disabled">Option 1</label>
							<input type="checkbox" name="checkbox-disabled" value="option 2" id="checkbox-two-disabled" disabled="disabled" /><label for="checkbox-two-disabled">Option 2</label>
							<input type="checkbox" name="checkbox-disabled" value="option 3" id="checkbox-three-disabled" disabled="disabled" /><label for="checkbox-three-disabled">Option 3</label>
						</fieldset>
						
						<fieldset>
							<input type="radio" name="radio" value="option 1" id="radio-one" /><label for="radio-one">Option 1</label>
							<input type="radio" name="radio" value="option 2" id="radio-two" /><label for="radio-two">Option 2</label>
							<input type="radio" name="radio" value="option 3" id="radio-three" /><label for="radio-three">Option 3</label>
						</fieldset>

						<fieldset>
							<input type="radio" name="radio-disabled" value="option 1" id="radio-one-disabled" disabled="disabled" /><label for="radio-one-disabled">Option 1</label>
							<input type="radio" name="radio-disabled" value="option 2" id="radio-two-disabled" disabled="disabled" /><label for="radio-two-disabled">Option 2</label>
							<input type="radio" name="radio-disabled" value="option 3" id="radio-three-disabled" disabled="disabled" /><label for="radio-three-disabled">Option 3</label>
						</fieldset>

						<fieldset>
							<select name="select" id="select">
								<option value="option 1">Option 1</option>
								<option value="option 2">Option 2</option>
								<option value="option 3">Option 3</option>
							</select>

							<select name="select-disabled" id="select-disabled" disabled="disabled">
								<option value="option 1">Option 1</option>
								<option value="option 2">Option 2</option>
								<option value="option 3">Option 3</option>
							</select>
						</fieldset>

						<fieldset>
							<label for="password">Password</label>
							<input type="password" name="password" id="password" placeholder="Password" />
							<input type="password" name="password-disabled" id="password-disabled" placeholder="Password" disabled="disabled" />
						</fieldset>

						<fieldset>
							<label for="file">File Upload</label>
							<input type="file" name="file" id="file" />
							<input type="file" name="file-disabled" id="file-disabled" disabled="disabled" />
						</fieldset>
							
						<fieldset>
							<input type="submit" name="submit" value="Submit" />
							<input type="button" name="button" value="Button" />
							<input type="reset" name="reset" value="Reset" />
						</fieldset>

						<fieldset>
							<input type="submit" name="submit-disabled" value="Submit" disabled="disabled" />
							<input type="button" name="button-disabled" value="Button" disabled="disabled" />
							<input type="reset" name="reset-disabled" value="Reset" disabled="disabled" />
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/js/libs/jquery-1.7.1.min.js"><\/script>')</script>
  <script defer src="js/form.customizer.1.0.min.js"></script>
  <script type="text/javascript">
  	$(document).ready(function() {
	  	$('form.customize').formCustomizer({});
  	});
  </script>
</body>
</html>