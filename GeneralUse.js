/*
 * General functions for general use
 * http://github.com/cormus
 * Copyright (c) 2016 -	Alex Ribeiro
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.1-dev
 *
 * Example: GeneralUse().removeAccent('áéíúõ');
 *          value returned is true;
 */
function GeneralUse()
{
	var obj = this;
	obj.fileExists = fileExists;
	obj.removeAccent = removeAccent;
	obj.validateEmail = validateEmail;
	obj.onlyNumber = onlyNumber;
	return obj;
	
	/** 
	 * Function for verification if file exist
	 * 
	 * @param String hour for validation in format d/m/Y
	 * @returns boolean value indicate if file exist
	 */
	function fileExists (url) {
		// Returns true if filename exists      
		var req = this.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		if (!req) 
		{
			throw new Error('XMLHttpRequest not supported');
		} 
		// HEAD Results are usually shorter (faster) than GET
		req.open('HEAD', url, false);
		req.send(null);
		if (req.status == 200)
		{      
			return true;
		}

		return false;
	};
	
	/**
	* Function for remove accent 
	*
	* @param String 
	* @return String with accent removed
 	*/
   function removeAccent(strToReplace) 
   {
		var str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
		var str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
		var nova="";
		
			for (var i = 0; i < strToReplace.length; i++) {
				
				if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
					nova+=str_sem_acento.substr(str_acento.search(strToReplace.substr(i,1)),1);
				} 
				else 
				{
					nova+=strToReplace.substr(i,1);
				}
				
			}
		return nova;
	};
	
	/**
	 * Function for email validation
	 * 
	 * @param String email 
	 * @return Boolean
	 */
	function  validateEmail(email)
	{
		er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
		if(er.exec(email))
			return true;
		else
			return false;
	};
	
	/**
	 * Função para só permitir números nos inputs dos forms
	 * 
	 * Ex:
	 *    <input maxlength="9" onkeydown="javascript:return onlyNumber(event);"name="cep">
	 *
	 * @param Event
	 * @return Boolean
	 */
	function onlyNumber(event){
	   var tecla = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	   if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || tecla == 8 ||  tecla == 9)
	   {
		   return  true;
	   }
	   else
	   {
		   return  false;
	   }
	};
	
	/**
	* Function to create valid URL from texts with accents or spaces
	* 
	* @param String
	*/
	function createUrl(value)
	{

		return removeAccent(value).toLowerCase().replace(/[^a-z0-9]+/g,'-');

	};
}