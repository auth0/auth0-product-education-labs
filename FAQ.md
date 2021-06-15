# Contact & Frequently Asked Questions


**Q**: Do I have to complete the training in one session?

**A**: No! Please build in breaks between modules to give yourself time to digest.

---

**Q**: What should I do if I find an issue with the training materials or instructions?

**A**: Please report any display, technical, or grammar/spelling issues you come across to our team. International audience: We’re especially interested in locating and correcting any language that does not translate well (idioms etc.). 

Include a detailed description of the issue:

- Where the issue is/is occurring in the course material (Module title, approximate location)
- What browser you were using at the time (if technical/display related)
- Include a screenshot if relevant

---

**Q**: What should I do if I am having an issue with the lab sample applications or environments?

**A**: In an effort to ensure you have a positive experience we’re planning to be on-call during business hours and have a plan in place to support you no matter your timezone. Please contact us via our email address ([training@auth0.com](mailto:training@auth0.com)). 

Include a detailed description of the issue:

- Error messages and reproduction steps
- Browser/OS and screenshot for visual issues
- The lab used to deploy a sample application
- GitHub repository for the deployed source code
- URL for publicly available applications
- Associated Tenant, Client ID, Client Secret, Audience 

---

**Q:** What is the SLA for receiving help from a team member?

**A:** A staff member will be available for support, help, and answer questions during the regular workdays, Monday - Friday 6:00 AM - 8:00 PM PST.

Email: Incoming requests to the training inbox will have the following SLA:
- Response in 4 hours during regular workdays.
- Off-hours requests will be responded to within 2 hours of the start of the following regular workday.

---

**Q**: I see a **502: BAD_GATEWAY** error with the code **NO_RESPONSE_FROM_FUNCTION** after I deploy my application to Vercel. How can I fix this?

**A**: Watch [this video](https://auth0-1.wistia.com/medias/t48iertwqs) on troubleshooting this error.

---

**Q**: I get a **404 Not Found Error** when loading the lab web application sample app. In developer tools, I can see a **302 Redirect** to the missing page. How can I fix this?

**A**: The lab applications attempt to [ensure you are using a well known url](https://github.com/auth0/auth0-product-education-labs/blob/master/apps/regular-web-app-express/v1.0/env-config.js#L13-L25) for your sample apps. This is needed because most of the SDKs we will be working with require you to supply a base url at configuration time. And we do not want you to have to update callback, logout & allowed web origins everytime you deploy the application.

The wellknown url is formatted like this:

```
`https://${VERCEL_GITHUB_REPO}-git-master-${VERCEL_GITHUB_ORG.toLowerCase()}.vercel.app`
```

The number one reason for this issue is your GitHub repository name does not match your Vercel project name. In this case you will need to delete the project in Vercel, delete the repository in GitHub and redeploy the application maintaining the name between the two. If you select default values for GitHub and Vercel names, you should not encounter this issue.


The second most common reason is your GitHub username does not match your Vercel username. This is a fairly easy fix. Navigate to [your account](https://vercel.com/account) in Vercel. Update your username to match your GitHub username.

Once either or both of these issues are resolved, you will need to redeploy the project for the changes to take effect.

---

More questions and answers will be added as they come in. 
