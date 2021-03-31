import React, { useState } from 'react';

const Bars = () => {
    const [data, setData] = useState ("Hello")
    return <div>{data}</div>;
};

export default Bars;