
// organization - cluster cellular engines

require('./scratchpad.js');

var mainbus_control_structure = {
    counter: 0,
    limit: 110,
    wait_interval_ms: 11
};

var fn_e = function() {
    setInterval( () => {
        console.log('calling process.exit');
        process.exit();
    }, mainbus_control_structure.wait_interval_ms*3);
};

var call_controller_action = function(counter) {
    switch (counter) {
        case 97:
            break;
        case 98:
            try { console.log('action 98'); }
            catch (ex) {
                console.error(ex.message);
            }
            break;
        case 99:
            console.log('action 99');
            break;
        case 100:
            console.log('clearing interval');
            clearInterval(interval);
            console.log('interval cleared');
            console.log('re setting interval');
            mainbus_control_structure.wait_interval_ms *= 10;
            interval = set_interval_fn();
            break;
        case 105:
            fn_e();
            break;
        default:
            console.log('default action');
    }
};

var interval_fn = function() {
    console.log('counter is', mainbus_control_structure.counter++);
    henry();
    if (mainbus_control_structure.counter < mainbus_control_structure.limit) {
        call_controller_action(mainbus_control_structure.counter);
    } else {
        // secondary exit safety..
        fn_e();
    }
};

var set_interval_fn = function() {
    return setInterval(() => interval_fn(),
        mainbus_control_structure.wait_interval_ms);
};

var interval = set_interval_fn();
