import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `Rhythmic Moves | ${title}`;
    },[title])
};

export default useTitle;