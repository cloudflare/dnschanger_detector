CloudFlare.define("dnschanger_detector", ["cloudflare/dom", "dnschanger_detector/config"], function(dom, config){
    window.dnsChangerPresent = function(){
        var table = dom.createElement("table");
        var tr = dom.createElement("tr");
        table.appendChild(tr);
        dom.setAttribute(table, "style", 'z-index: 100000; width:100%; position: absolute; top: 0; left: 0; margin: 0 0 20px 0; padding: 10px; background-color: #f0f0f0; color: #404040; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; border-bottom: 1px solid #a5a5a5;');
        var message = dom.createElement("td");
        var warning = dom.createElement("p");
        dom.setAttribute(warning, "style", 'font-size: 16px; font-weight: bold; color: #be2424; margin-bottom: 5px; margin-left: 10px;');
        warning.innerHTML = 'Your computer has DNS settings that mean you probably have the DNS Changer malware.';
        message.appendChild(warning);
        var info = dom.createElement("p");
        dom.setAttribute(info, "style", 'color: #404040; font-size: 12px; margin-left: 10px; margin-top: 0;');
        var fix_url = ('fix_url' in config && config.fix_url !== "")? config.fix_url : "http://www.opendns.com/dns-changer";
        info.innerHTML = 'Please visit <a href="'+ fix_url +'" target="blank">'+ fix_url +'</a> for help fixing your DNS. <strong>You may lose access to the Internet after July 9, 2012 if you don\'t fix this.</strong> For additional information regarding the DNS changer malware, please visit the <a href="http://www.fbi.gov/news/stories/2011/november/malware_110911" target="blank">FBI\'s website</a>. <span style="color: #A5A5A5">DNS Changer warning powered by <a href="http://www.cloudflare.com/" style="color: #A5A5A5; text-decoration: underline;">CloudFlare</a>.</span>';
        message.appendChild(info);
        var icon = dom.createElement("td");
        dom.setAttribute(icon, "style", 'width: 50px; height: 50px; background: url("/cdn-cgi/custom/images/red-exclamation.png") no-repeat center top;');
        var closeButton = dom.createElement("button");
        dom.setAttribute(closeButton, "style", 'width: 20px; height: 20px; margin-left: 15px; background: url("/cdn-cgi/custom/images/button-x.png") no-repeat top left; border: none;');
        tr.appendChild(icon)
        tr.appendChild(message)
        tr.appendChild(closeButton)
        document.body.appendChild(table);

        dom.addEventListener(closeButton, "click", function(){
            document.body.removeChild(table);
        })
    }
    function detectorScript(){
        var test_site = "//cfdnscheck.cloudflare.com/test.js"
        var script = dom.createElement("script")
        var cursor = document.getElementsByTagName('script', true)[0]
        dom.setAttribute(script, "type", "text/javascript")
        dom.setAttribute(script, "src", test_site)
        cursor.parentNode.insertBefore(script, cursor);
    }

    detectorScript()
})
