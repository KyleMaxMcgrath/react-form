import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const [boxList, setBoxList] = useState([]);

    const onSubmit = (box) => {
        setBoxList([...boxList, box]);
    };

    return (
        <>
            {boxList.map(
                (box, i) => (
                    <div key={uuid()}>
                        <Box width={Number(box.width)} height={Number(box.height)} backgroundColor={box.backgroundColor}/>
                        <button onClick={
                            () => {
                                boxList.splice(i, 1);
                                let boxListCopy = [...boxList];
                                setBoxList(() => boxListCopy);
                            } 
                        }>X</button>
                    </div>
            ))}
            <NewBoxForm submit={onSubmit}/>
        </>
    )
}

export default BoxList;