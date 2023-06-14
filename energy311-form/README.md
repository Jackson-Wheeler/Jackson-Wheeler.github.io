# Application Project for Energy311

## Explanation

I utilized Jotform in order to construct the visual layout and provide the functionality of the form itself. This means the form is visually appealing and easy to modify for future changes. I then downloaded the source code of this Jotform form, allowing me to both run the form on my own website & additionally add the API POSTing functionality.

Through modification of the source code I inputed functionality that POSTs the form data to the Energy311 API in a valid way (see energy311-form/index.html) before the “Thank you” page is navigated to.

Overall my methodology was to get a form that meets the requirements up and running quickly and efficiently. Further functionality can be added on top.

Note on POSTing to the API: Because the client side is inherently insecure, it would be necessary to validate the inputted form data on the server side, rather than the client side. A future improvement to this code would to add a server that receives the form data submission, cleanses it of malicious data, then sends the data to the REST API.

## Notes on Solution
Most of the code is the downloaded source code of the JotForm itself. The inserted code can be found in index.html within the <script> tag with comment "Added Code".


## Project Specification (For Reference)

Role Description
Energy311 is a software billing service that helps property owners sell solar power to tenants at local utility rates. We use Google cloud and 3rd party metering and utility rate schedules to capture energy usage data in 15m intervals and recreate the utility bill with "to the penny" accuracy. You will be using web standards to consume and create REST services, manipulate JSON documents, crunch data, create property owner and tenant dashboards, etc.

Energy311 has offices in San Diego, CA, and Kona, HI.

You can learn more about Energy311 at our website: energy311.com

Project:
To apply for this position, please submit your answer to the following challenge:

1. Create a webform, similar to this one:

https://docs.google.com/forms/d/e/1FAIpQLSfTcg71fVZA3eMxJC5D90IxPn3TYTNgrc6wCdFOWRUiVQbStg/viewform?usp=sf_link

The current onboarding webform above asks a lot of questions. Maybe just limit questions to:

business name
business address
business zip
phone
email

2. then call this api:

https://documenter.getpostman.com/view/7686659/2s93m4Yi2k

to create a "building" record.

Note: the API does not currently validate POSTed json data. Please be sure to follow the API and POST a valid, correct JSON document.

3. You may use typeform.com, jotform.com or create your own HTML forms.

Please submit solution to jobs@energy311.com
