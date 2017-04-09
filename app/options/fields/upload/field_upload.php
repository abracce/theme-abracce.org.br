<?php

class KR_Options_upload extends KR_Options{

	/**
	 * Field Constructor.
	 *
	 * Required - must call the parent constructor, then assign field and value to vars, and obviously call the render field function
	 *
	 * @since KR_Options 1.0
	*/
	function __construct($field = array(), $value ='', $parent = ''){

		parent::__construct($parent->sections, $parent->args, $parent->extra_tabs);
		$this->field = $field;
		$this->value = $value;

	}//function



	/**
	 * Field Render Function.
	 *
	 * Takes the vars and outputs the HTML for the field in the settings
	 *
	 * @since KR_Options 1.0
	*/
	function render() {

		$class = (isset($this->field['class']))?$this->field['class']:'regular-text';

		echo '<input type="txt" id="'.$this->field['id'].'" name="'.$this->args['opt_name'].'['.$this->field['id'].']" value="'.$this->value.'" class="'.$class.'" />';
		// echo '<img class="opts-screenshot" id="opts-screenshot-'.$this->field['id'].'" src="'.$this->value.'" />';
		if($this->value == ''){$remove = ' style="display:none;"';$upload = '';}else{$remove = '';$upload = ' style="display:none;"';}
		echo ' <a href="javascript:void(0);" class="opts-upload button"'.$upload.' rel-id="'.$this->field['id'].'">'.__('Search image...', THEME_FX).'</a>';
		echo ' <a href="javascript:void(0);" class="opts-upload-remove button button-primary"'.$remove.' rel-id="'.$this->field['id'].'">'.__('Clear', THEME_FX).'</a>';

		echo (isset($this->field['desc']) && !empty($this->field['desc']))?'<br/><br/><span class="description">'.$this->field['desc'].'</span>':'';

	}//function



	/**
	 * Enqueue Function.
	 *
	 * If this field requires any scripts, or css define this function and register/enqueue the scripts/css
	 *
	 * @since KR_Options 1.0
	*/
	function enqueue(){

		wp_enqueue_script(
			'opts-field-upload-js',
			KR_OPTIONS_URL.'fields/upload/field_upload.js',
			array('jquery', 'thickbox', 'media-upload'),
			time(),
			true
		);

		wp_enqueue_style('thickbox');// thanks to https://github.com/rzepak

		wp_localize_script('opts-field-upload-js', 'KR_upload', array('url' => $this->url.'fields/upload/blank.png'));

	}//function

}//class