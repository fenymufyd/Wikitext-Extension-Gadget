"use strict";
jQuery.when(window.mw.loader.using('mediawiki.util'), $.ready).then(function () {
    if (!(mw.config.get("wgIsProbablyEditable") || ($('#ca-viewsource').length > 0))) {
        return undefined;
    }
    var text = 'Open in VSCode';
    var gadgetID = 'wikitext-extension-gadget';
    var tooltip = 'Open this page in VSCode';
    var scheme = 'codium';
    var extensionID = 'rowewilsonfrederiskholme.wikitext';
    var actionPath = '/PullPage';
    var args = {
        RemoteBot: 'true',
        TransferProtocol: window.location.protocol,
        SiteHost: window.mw.config.get('wgServer').replace(/[a-z]*?:(?=\/\/)/, ''),
        APIPath: window.mw.util.wikiScript('api'),
        Title: window.mw.config.get('wgPageName')
    };
    var isMinerva = window.mw.config.get('skin') === 'minerva';
    window.mw.util.addPortletLink(isMinerva ? 'p-tb' : 'p-views', scheme + "://" + extensionID + actionPath + "?" + new URLSearchParams(args).toString(), text, gadgetID, tooltip, undefined, isMinerva ? undefined : '#ca-history');
});
