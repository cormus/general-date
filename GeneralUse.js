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
	}	
	
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
	}
}