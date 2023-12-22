function waitForElement(selector, callback, waitTime, valueText=null) {
    // Check if an element matching the selector exists in the DOM by xpath
    var eval_xpath = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

    if (eval_xpath) {

    	if (valueText) {
    		
    		eval_xpath.value = valueText;
    		
    	} else {
    		
    		// If the element is found, invoke the click function
    		try {
    			eval_xpath.click();
    		} catch (e) {
    			console.log('Cannot click in button ' + e);
    		}
    	}

    } else {
        // If the element is not found at first, set up a timeout to recheck after waitTime
        setTimeout(function() {
            // Recursively call waitForElement with the same selector, callback, and waitTime values
            waitForElement(selector, callback, waitTime, valueText);
        }, waitTime);
    }
}

if (confirm("Do you want auto fulfill for FDSE ?") == true) {

    var edit_button = "//*[text()='Edit']";
	waitForElement(edit_button, function() {
	    console.log("The element now exists!");
	}, 10);
	
	var status_element = "//button[@data-value='--None--' or @data-value='New' or @data-value='Under Review' or @data-value='In Progress' or @data-value='Deferred' or @data-value='Cancelled' or @data-value='Closed']";
	waitForElement(status_element, function() {
	    console.log("The element now exists!");
	}, 10);
	
	var close_element = "//lightning-base-combobox-item[@data-value='Closed']";
	waitForElement(close_element, function() {
	    console.log("The element now exists!");
	}, 10);
	
	var gss_post_close = "//label[text()='GSS Post Close Notes']/../div/textarea";
	waitForElement(gss_post_close, function() {
	    console.log("The element now exists!");
	}, 10, "FDSE");
	
	var duration = "//label[text()='Duration (In Hours)']/../div/input";
	waitForElement(duration, function() {
	    console.log("The element now exists!");
	}, 10, 10);
	
	var next_step = "//label[text()='SE Next Steps']/../div/textarea";
	waitForElement(next_step, function() {
	    console.log("The element now exists!");
	}, 10, "FDSE");
	
	var technical_challenges = "//label[text()='Technical Challenges']/../div/textarea";
	waitForElement(technical_challenges, function() {
	    console.log("The element now exists!");
	}, 10, "No");
	
	var technical_adaptation = "//button[contains(@aria-label, 'Technical Adoption Help')]";
	waitForElement(technical_adaptation, function() {
	    console.log("The element now exists!");
	}, 10);
	
	var gss_resolved = "//lightning-base-combobox-item[@data-value='Yes - GSS Resolved - Customer NOT ODS entitled']";
	waitForElement(gss_resolved, function() {
	    console.log("The element now exists!");
	}, 10);
	
	var save_button = "//button[@name='SaveEdit']";
	waitForElement(save_button, function() {
	    console.log("The element now exists!");
	}, 10);

} else {
    console.log('Normal ticket usage');
}
