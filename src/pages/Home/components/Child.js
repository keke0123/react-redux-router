import React, {useState, useEffect} from 'react';

function Child(props, ref) {
    let [test, setTest] = useState(0);

    useEffect(() => {
        console.log('child init');
        console.log('ref', ref);
    }, []);
    // useEffect(() => {
    //     console.log('count', count);
    // });
    useEffect(() => {
        console.log('child count', props.count);
        setTest(props.count);
    }, [props.count]);

    useEffect(() => {
        // console.log('props', prop);
    });

    function childBtn(e) {
        console.log('child button clicked');
        console.log('event', e);
        console.log('props', props);
        props.childData('hihi');
    }

    return (
        <div>
            <p>Child Count {test}</p>
            <button onClick={childBtn}>child button</button>
        </div>
    )
}

export default Child;
