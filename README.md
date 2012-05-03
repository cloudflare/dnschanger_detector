#Detect DNSChanger and Notify Visitors

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

The alert is banner at the top of the page with information about how to fix the infected computer. It looks like
https://www.cloudflare.com/images/apps/dnschanger_detector/banner_example.png

##For Non-CloudFlare Sites

The JavaScript is packaged for use with cloudflare.js on CloudFlare, but it will work
on non-CloudFlare sites if you add a script tag for cloudflare.js

    <script type="text/javascript" src="//ajax.cloudflare.com/cdn-cgi/nexp/cloudflare.js" async></script>

##Why

CloudFlare is trying to make the Internet better for everyone.

The Federal Bureau of Investigation (FBI) has been operating DNS servers
to keep infected users online, but they are going to stop soon (July 9, 2012). We want to
do what we can to keep people from being kicked off the Internet when that happens.

For more background, see
http://www.fbi.gov/news/stories/2011/november/malware_110911
