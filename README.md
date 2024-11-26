# Detect DNSChanger and Notify Visitors

## Deprecation Notice

[In the summer of 2012](http://blog.cloudflare.com/cloudflare-opendns-work-together-to-save-the/), the Internet Systems Consortium turned off the DNS servers previously utilized by the DNSChanger malware.
CloudFlare developed this application to help alert affected Internet users, and link them to resources to correct their DNS settings to ensure continued Internet access.

The shut down date has long since passed, and this application has long since been removed from our platform.
It is no longer maintained, and it does not meet our current guidelines for applications on our platform.
For updated information on building applications, please visit the [App Developer Documentation](http://appdev.cloudflare.com/).

The original README continues below.

---

##About
This JavaScript is a CloudFlare app that checks whether a visitor is
infected with the DNSChanger malware, and notifies the visitor
if so.

##Using This Tool
The easiest way is to put your site on CloudFlare and go to
https://www.cloudflare.com/apps/dnschanger_detector
to enable the app.

##How It Works
DNSChanger Detector works by attaching an alerting function to the window, and
making a JSONP call to a special URL. The IP resolved for that URL
by the infected servers serves a file that calls the alerting function.

The alert is a banner at the top of the page with information about how to fix the infected computer.
![Example Visitor DNSChanger Banner](https://www.cloudflare.com/images/apps/dnschanger_detector/banner_example.png)


##For Non-CloudFlare Sites

The JavaScript is packaged for use with [cloudflare.js](http://js.cloudflare.com/) on CloudFlare, but it will work
on non-CloudFlare sites if you add a script tag for cloudflare.js.  [CloudFlareJS](http://js.cloudflare.com/) is a robust and highly performant API for placing your JavaScript on the page and safely resolving all of its dependencies. 

    <script type="text/javascript" src="//ajax.cloudflare.com/cdn-cgi/nexp/cloudflare.js" async></script>
    <script type="text/javascript">
        window.CloudFlare = window.CloudFlare || [];
        CloudFlare.push(function(require, define) {
            CloudFlare.push({ paths: { "dnschanger_detector": "//ajax.cloudflare.com/cdn-cgi/nexp/apps/" }});
            define("dnschanger_detector/config", function() { return { "fix_url" : "http://www.opendns.com/dns-changer" }});
            require(["dnschanger_detector"]);
        });
    </script>

##Why

CloudFlare is trying to make the Internet better for everyone.

The DNSChanger Working Group [DCWG](http://dcwg.org) has been operating DNS servers
to keep infected users online, but they are going to stop soon (July 9, 2012). We want to
do what we can to keep people from being kicked off the Internet when that happens.

For more background, see
http://www.fbi.gov/news/stories/2011/november/malware_110911

##License

This software is [MIT licensed](http://www.opensource.org/licenses/MIT).
