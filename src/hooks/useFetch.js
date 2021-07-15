import { useState } from 'react';

import jokes from '../data/jokes.json'

export default function useFetch() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [single, setSingle] = useState([]);
    const [twopart, setTwopart] = useState([]);


    const init = () => {

        const single = [];
        const twopart = [];
        jokes.sort((a, b) => a.id - b.id);

        jokes.forEach((item, i) => {
            if (i > 1 && item.id !== jokes[i - 1].id) {

                setData([...data, {
                    id: item.id, category: item.category,
                    type: item.type, joke: item.joke,
                    setup: item.setup, delivery: item.delivery,
                    flags: item.flags, error: item.error
                }])

                if (item.type === 'twopart') {
                    twopart.push({
                        id: item.id, category: item.category,
                        type: item.type, setup: item.setup,
                        delivery: item.delivery, flags: item.flags,
                        error: item.error
                    })
                } else {
                    single.push({
                        id: item.id, category: item.category,
                        type: item.type, joke: item.joke,
                        flags: item.flags, error: item.error
                    })
                }
            }
        });

        setTwopart(twopart)
        setSingle(single)
        setLoaded(true)
        // console.log('data: ', data);
    }

    //TODO: use init function instead of getData and wrap it with Provider
    return [loaded, data, single, twopart, init];
}