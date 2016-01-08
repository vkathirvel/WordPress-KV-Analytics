kva_initialize();

function kva_initialize() {
    // Assign Yoast object to Universal Analytics object
    if (isYoastAnalyticsObjectAvailable()) {
        if (!isUniversalAnalyticsObjectAvailable()) {
            __gaTracker(function() {
                window.ga = __gaTracker;
            });
        }
    }
    // Initiate UUID on page load
    kva_uuid();
}

// Get cookie value of _kauuid. If not set yet, set a new _kauuid cookie and return the value
function kva_uuid() {
    var uuid = Cookies.get('kva_uuid');
    if (typeof uuid === 'undefined') {
        Cookies.set('kva_uuid', UUID(), {expires: 365});
        uuid = Cookies.get('kva_uuid');
    }
    return uuid;
}

// Is Universal Analytics object available?
function isUniversalAnalyticsObjectAvailable() {
    if (typeof ga !== 'undefined') {
        return true;
    }
    return false;
}

// Is Yoast Analytics object available?
function isYoastAnalyticsObjectAvailable() {
    if (typeof __gaTracker !== 'undefined') {
        return true;
    }
    return false;
}

function gaSocialTrack($socialNetwork, $socialAction, $urlPath) {
    $socialNetwork = typeof $socialNetwork !== 'undefined' ? $socialNetwork : 'Facebook';
    $socialAction = typeof $socialAction !== 'undefined' ? $socialAction : 'Share';
    $urlPath = typeof $urlPath !== 'undefined' ? $urlPath : window.location.pathname;

    ga('send', {
        'hitType': 'social',
        'socialNetwork': $socialNetwork,
        'socialAction': $socialAction,
        //'socialTarget': 'http://examplepage.com',
        'page': $urlPath}
    );
}

function gaEventTrack($category, $action, $label, $value) {
    $category = typeof $category !== 'undefined' ? $category : 'NULL';
    $action = typeof $action !== 'undefined' ? $action : 'NULL';
    $label = typeof $label !== 'undefined' ? $label : kva_uuid();
    $value = typeof $value !== 'undefined' ? $value : 'NULL';

    ga('send', {
        'hitType': 'event',
        'eventCategory': $category,
        'eventAction': $action,
        'eventLabel': $label,
        'eventValue': $value}
    );
}