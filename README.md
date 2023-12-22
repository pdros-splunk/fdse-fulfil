# FDSE scripts to automate fill SalesForce ticket

Two solution to automate ticket closing for FDSE

## Extension solution
After opening the website https://splunk.lightning.force.com/lightning/r/Deal_Support__c/* for any ticket, the user will be asked whether he agrees to autofill for FDSE, if yes JS will automatically open edit page:

* change status to Closed
* fill Duration field with 10h
* GSS Post Close Notes with value FDSE
* SE Next Steps with value FDSE
* Technical Challenges with value No
* choose in Technical Adoption Help value Yes - GSS Resolved - Customer NOT ODS entitled and Save ticket.

The easiest way to use it is to add Chrome/Arc User [JavaScript and CSS extension](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) -> add new side, in the JS window -> copy code from  `fill_extension.js` → paste code in JS window.


## Bookmarks solution
Second idea for Chrome browser is to create bookmark as JS file to execute script by clicking in it. The code from `fill_as_bookmark.js` we have to paste in URL field during new bookmark creation.

### Name []
### URL [fill_as_bookmark.js]

### Bookmarks Bar
* ...
### Other Bookmarks