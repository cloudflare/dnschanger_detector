#Detect DNSChanger and Notify Visitors

##About
This JS is a CloudFlare app that checks whether a visitor is
infected with the DNSChanger malware, and notifies the visitor
if so.

##Using This Tool
The easiest way is to put your site on CLoudFlare and go to
http://cloudflare.com/apps/dnschanger_detector
to enable the app.

##How It Works
DNSChanger Detector works by attaching an alerting function to the window, and
making a JSONP call to a special URL. The IP resolved for that URL
by the infected servers serves a file that calls the alerting function

The JS is packaged for use with cloudflare.js on CloudFlare, but it will work
on non-cloudflare sites if you add a script tag for cloudflare.js or if you
only use the part inside the CloudFlare.define call

##Why
Making the Internet a better place.
