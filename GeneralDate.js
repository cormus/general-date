/*
 * General functions for processing and data validation
 * http://github.com/cormus
 * Copyright (c) 2016 -	Alex Ribeiro
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.1-dev
 *
 * Example: GeneralDate().hourValidation('15/04/2015');
 *          value returned is true;
 */
function GeneralDate()
{
	var obj = this;
	obj.hourValidation = hourValidation;
	obj.replaceAll = replaceAll;
	obj.dateValidation = dateValidation;
	obj.startDateGreaterEndDate = startDateGreaterEndDate;
	obj.intervalDateIsValidInDays = intervalDateIsValidInDays;
	obj.convertStringInDate = convertStringInDate;
	obj.formatStringToDate = formatStringToDate
	return obj;
	/** 
	 * Function for hour validation
	 * 
	 * @param String hour for validation in format d/m/Y
	 * @returns boolean value indicate if date is valid
	 */
	function hourValidation(hour)
	{
		  if(!hour)  
		  {
				return false;
		  }
		  
		  hrs = (hour.substring(0,2));
		  min = (hour.substring(3,5));
		  seg = (hour.substring(6,8));
			
		  if ((hrs < 00 ) || (hrs > 23) || ( min < 00) ||( min > 59) || ( seg < 00) ||( seg > 59)){
			  return false;
		  }  
		  return true;
	}

	/**
	 * Function for replace all
	 * Needed because javascript is not native
	 * 
	 * @param str String to be treated
	 * @param de String to be replaced
	 * @param para String new value
	 * @returns
	 */
	function replaceAll(str, de, para){
		var pos = str.indexOf(de);
		while (pos > -1){
			str = str.replace(de, para);
			pos = str.indexOf(de);
		}
		return (str);
	};

	/**
	 * Function to valid date.
	 * Return true case date is valid or false case invalid.
	 * 
	 * @param String
	 * @returns Boolean
	 */
	function dateValidation(date){

		var ardt   = new Array;
		var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
		ardt = date.split("/");
		var erro = false;
		if ( date.search(ExpReg)==-1)
		{
			erro = true;
		}
		else if (((ardt[1]==4)||(ardt[1]==6)||(ardt[1]==9)||(ardt[1]==11))&&(ardt[0]>30))
		{
			erro = true;
		}
		else if ( ardt[1]==2) 
		{
			if ((ardt[0]>28)&&((ardt[2]%4)!=0))
				erro = true;
			if ((ardt[0]>29)&&((ardt[2]%4)==0))
				erro = true;
		}
		if(erro) 
		{
			return false;
		}
		return true;
	};
			
	/**
	 * Function that is valid start date is greater than the end date.
	 * 
	 * @param String start date
	 * @param String final date
	 * @returns
	 */
	function startDateGreaterEndDate(startDate, finalDate){
		var startDate = converteStringEmData(startDate);
		var finalDate = converteStringEmData(finalDate);
		return startDate > finalDate ? false : true;
	};

	/**
	 * Function valid is start date and final date are within the last interval
	 * For example: Start date 12/12/2016 and final date 17/12/2016 is valid for interval 5 days
	 * 
	 * @param startDate
	 * @param finalDate
	 * @param interval
	 * @return boolean
	 */
	function intervalDateIsValidInDays(startDate, dataFinal, interval){
		var startDate = converteStringEmData(startDate);
		var dataFinal = converteStringEmData(dataFinal);
		var divisor = (1000 * 60 * 60 * 24);
		var difference = (dataFinal - startDate) / divisor;
		return difference > interval ? false : true;
	}

	/**
	 * unction that converts a String to date. The string must have a size of 8 characters and the default date should be pt-BR.
	 * Example: 12122016 entry, exit new Date.
	 * 
	 * @param int
	 * @returns {Date}
	 */
	function convertStringInDate(data){
		return new Date(data.substring(4), data.substring(2,4) - 1, data.substring(0,2));
	};

	/**
	 * Function to format a string to a representation in date format. The separator is passed as a parameter. 
	 * The String must be 8 characters and the default should be pt-BR. If the tab is not informed, is assigned the default separator '/'.
	 * Example: input 12122016, outinput 12/12/2016
	 * 
	 * @param int
	 * @returns String
	 */
	function formatStringToDate(date, separator){
		separator = separator ? separator : '/';
		return date.substring(0,2) + separator + date.substring(2,4) + separator + date.substring(4); 
	}

}